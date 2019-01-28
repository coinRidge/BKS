var Resource = (function(NS,resource){
    var formatRe = /\{(\d+)\}/g;
    function format(str, args) {
        var res = str.replace(formatRe, function(m, i){
            return args[i];
        });
        return res;
    }
    function isEmpty(str) {
        return str === undefined || str === null || str == "";
    }
    resource.label = NS.label||{};
    resource.message = NS.message||{};
    function get(key, defV, args) {
        var res;
        if (!this.hasOwnProperty(key) || isEmpty(this[key])) {
            res = defV || key || "";
        } else {
            res = this[key];
        }
        if (arguments.length > 2 && args != null) {
            return format(res, args instanceof Array ? args: [].slice.call(arguments, 2));
        }
        return res;
    }
    resource.getLabel = function(key, defaultLabel, args){
        return get.apply(resource.label, arguments);
    };
    resource.getMessage = function(key, defaultMessage, args){
        return get.apply(resource.message, arguments);
    };
    resource.getScodeLabel = function(codeType,code,defaultLabel, args){
        return get.apply(resource.label,[codeType+"_"+code,defaultLabel,args]);
    };
    resource.processScodes = function(scodeArray){
        var processed = [];
        if(scodeArray && scodeArray.length){
            scodeArray.forEach(function(scode){
                processed.push({
                    code : scode[0],
                    name : Resource.getLabel(scode[0],scode[1])
                });
            });
        }
        return processed;
    };
    resource.customerMultiKey = {};
    resource.customerLabelKey = {};
    if(NS.customerMultiKey){
        for(var customerSysCode in NS.customerMultiKey){
            if(NS.customerMultiKey.hasOwnProperty(customerSysCode)){
                resource.customerMultiKey[customerSysCode] = {};
                resource.customerLabelKey[customerSysCode] = {};
                var keys = NS.customerMultiKey[customerSysCode];
                for(var i=0; i< keys.length; ++i){
                    var key = keys[i];
                    resource.customerMultiKey[customerSysCode][key] = true;
                    resource.customerLabelKey[customerSysCode][resource.getLabel(key)] = key;
                }
            }
        }
    }
    resource.isCustomerMultiKey = function(customerSysCode, key){
        return customerSysCode && key && resource.customerMultiKey[customerSysCode] && resource.customerMultiKey[customerSysCode][key];
    };
    resource.isCustomerMultiLabel = function(customerSysCode, label){
        return customerSysCode && label && resource.customerLabelKey[customerSysCode] && resource.customerLabelKey[customerSysCode][label];
    };
    resource.getCustomerMultiKey = function(customerSysCode, label){
        if(resource.isCustomerMultiLabel(customerSysCode, label)){
            return resource.customerLabelKey[customerSysCode][label];
        }
        return null;
    };
    return resource;
})(window,Resource || {});