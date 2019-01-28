(function(NS) {
    NS = NS || window;
    if (!NS.DCS){
        NS.DCS = {};
    }

    var DCS = NS.DCS;

    if (!DCS.Util){
        DCS.Util = {};
    }
    DCS.Util.dwrFun = function(f, info) {
                if (!f || typeof f === 'function') {
                    return (function(info) {
                        throw 'No specified function found in dwr service:' + (info || '');
                    }).createDelegate(window, ((info) ? [info] : []), 0);
                } else {
                    return f;
                }
    }

})(DCS);



/**
 * DCS.SCodes DCS Standard Codes
 * Encapsulate functions to load standard codes from global standard code table.
 * As for global standard code table (name as DCS.Scodes._codetable), it shall be populated with srvlet
 * and was located the individual js file (name as dcsscodes.js)
 * name as dcsscode.js
 */
(function() {
    if(!window.DCS){
        window.DCS = {};
    }
    NS = window.DCS;
    if (!NS.Scodes){
        NS.Scodes = {};
    }
    var Scodes = NS.Scodes;
    DCS.Scodes.CodeType = {
        PartyType : 'PTP',
        AdditionalService_TK : 'TAS',
        AdditionalService_MMT : 'MAS',
        AdditionalService_GI : 'GIS',
        AdditionalService_GO : 'GOS',
        BizNature : 'BZN',
        CustomerType : 'CTT',
        CommodityGroup : 'CMDG',
        RollbackReason : 'RBR',
        RollbackReason4SVR : 'SVR_RB',
        WMSNeeded: 'WMSN',
        Ops: 'OPS',
        BLType: 'BLT',
        DATEFORMAT: 'DATEFORMAT'
    };

    Object.assign(NS.Scodes, {
        /**
         * Return code/name array like as [{code:name}]
         * @param {Object} t code type
         */
        data : function(codeType, addEmpty) {
            var map = DCS.Scodes._codetable || [];
            var result = null;
            if (Array.isArray(codeType)) {
                result = [];
                var exist = {};
                Array.prototype.forEach.call(codeType, function(subCodeType) {
                    var tmpRes = map[subCodeType];
                    if (tmpRes && Array.isArray(tmpRes)) {
                        Array.prototype.forEach.call(tmpRes, function(item){
                            if (!exist[item[0]]) {
                                item[1] = Resource.getScodeLabel(subCodeType, item[0], item[1]);
                                result.push(item);
                                exist[item[0]] = true;
                            }
                        });
                    }
                });
                if (result.length > 0) {
                    result.sort(function(a, b) {
                        if (a[1] > b[1])
                            return 1;
                        else if (a[1] < b[1])
                            return -1;
                        return 0;
                    });
                }
            } else {
                result = map[codeType];
                if (result && Array.isArray(result)) {
                    Array.prototype.forEach.call(result, function(item){
                        item[1] = Resource.getScodeLabel(codeType, item[0], item[1]);
                    });
                }
            }
            if (!result || !Array.isArray(result)) {
                result = [['NO', 'x01:No code/ found for [' + codeType + ']']];
            } else if (addEmpty && result.length > 0 && result[0][0] != '') {
                result = [['', '']].concat(result);
            }
            return result;
        },
        /**
         * Return code/name array like as [{code:name}],

         and move the 'Others' to the end of Array
         * @param {Object} t = code type
         * @param {String} others = code of 'Others'
         * @sample
         *    NS.Scodes.dataHandleOthers('CMDG', true, 'CMD_OS')
         *    NS.Scodes.dataHandleOthers('NCR', true, 'OS')
         */
        dataHandleOthers : function(t, addEmpty, others) {
            var scodesData = Scodes.data(t, addEmpty);
            for (var i = 0; i < scodesData.length; i++) {
                if (scodesData[i][0] == others) {
                    var temp = scodesData[i];
                    scodesData.remove(temp);
                    scodesData.push(temp);
                    break;
                }
            }
            return scodesData;
        },
        dataGetCodeArray : function (codeType, addEmpty) {
            var sd = Scodes.data(codeType, addEmpty);
            var result = [];
            for (var i = 0; i < sd.length; i++) {
                result.push([sd[i][0]]);
            }
            return result;
        },
        /**
         * Return the function(code) as render which based on std codes as arrar[,

         ].
         * @param {String} codeType or array
         * @sample
         *  NS.Scodes.getRender('PTP')
         *  NS.Scodes.getRender(['LOC','FAC'])
         */
        getRender : function(codeType) {
            return function(code) {
                if (!code) {
                    return "";
                }
                var _codeType = Array.isArray(codeType) ? codeType : [codeType];
                var _datas = [];
                _codeType.forEach(function(item) {
                    var fun = Scodes[item];
                    var arr = (fun && typeof fun === 'function') ? fun() : [];
                    _datas = _datas.concat(arr);
                });

                var ret = code;
                _datas.forEach(function(data) {
                	if(Array.isArray(data) && data[0] == code){
                        ret = data[1];
                        return;
                	}
                    if (data.code && data.code == code) {
                    	ret = data.name || ret;
                    	return;
                    }
                });
                return ret;
            };
        },
        /**
         * extend by getRender,

         it can render multicode, such as 'AD;AW',
         * call DCS.Scodes.getRenders('CAT',';') should be 'Awkward Dangerous;Awkward'
         * @param {Object} codeType
         * @param {Object} sp
         */
        getRenders : function(codeType, sp) {
            return function(code) {
                if (!code) {
                    return "";
                }

                var _codeType = Array.isArray(codeType) ? codeType : [codeType];
                var _datas = [];
                _codeType.forEach(function(item) {
                    var fun = Scodes[item];
                    var arr = (fun && typeof fun === 'function') ? fun() : [];
                    _datas = _datas.concat(arr);
                });

                var values = code.split(sp);
                var newValue = "";
                values.forEach(function(v) {
                    var vn = null;
                    _datas.forEach(function(data) {
                        if (data[0] == v || data.code == v) {
                            vn = data[1] || data.name;
                        }
                    });
                    if (vn) {
                        newValue += (vn + sp);
                    }
                });
                var lastIndex = newValue.lastIndexOf(sp);
                if (lastIndex > -1) {
                    newValue = newValue.substring(0, lastIndex);
                }
                return newValue;
            };
        },
        //use with cautious,   currently only used in office filtering
        modifyData : function(fromKey, toKey) {
            var map = DCS.Scodes._codetable || [];
            var arr = map[fromKey];
            map[toKey] = arr || [];
        }
    });

    //Build more delegate function to facilitate the usage
    Object.assign(NS.Scodes, {
        BOT : Scodes.data.bind(window, 'BOT', 0)/*Biz Type*/,
        BLT : Scodes.data.bind(window, 'BLT', 0)/*B/L Type*/,
        BNT : Scodes.data.bind(window, 'BNT', 0)/*6*/,
        CAT : Scodes.data.bind(window, 'CAT', 0)/*Cargo Nature*/,
        CAU : Scodes.data.bind(window, 'CAU', 0)/*charge/cost unit*/,
        CGT : Scodes.data.bind(window, 'CGT', 0)/*Comment Need*/,
        CRD : Scodes.data.bind(window, 'CRD', 0)/*Credit Duration*/,
        CRS : Scodes.data.bind(window, 'CRS', 0)/*Comment Need*/,
        CRT : Scodes.data.bind(window, 'CRT', 0)/*Carrier Rate Type*/,
        CST : Scodes.data.bind(window, 'CST', 0)/*Non-billable*/,
        CT : Scodes.data.bind(window, 'CT ', 0)/*Comment Need*/,
        CUM : Scodes.data.bind(window, 'CUM', 0)/*Comment Need*/,
        CUR : Scodes.data.bind(window, 'CUR', 0)/*Comment Need*/,
        CVAN : Scodes.data.bind(window, 'CVAN', 0)/*Equipment -- Truck Type/ Size (TRUCKSIZE)*/,
        DAES : Scodes.data.bind(window, 'DAES', 0)/*CAT*/,
        DAS : Scodes.data.bind(window, 'DAS', 0)/*ECT,   ETT,WAG*/,
        DBS : Scodes.data.bind(window, 'DBS', 0)/*CAT*/,
        DCC : Scodes.data.bind(window, 'DCC', 0)/*CAT*/,
        DCD : Scodes.data.bind(window, 'DCD', 0)/*CAT*/,
        DDC : Scodes.data.bind(window, 'DDC', 0)/*ECT,   ETT,WAG*/,
        DDPC : Scodes.data.bind(window, 'DDPC', 0)/*ECT,   ETT,WAG*/,
        DGC : Scodes.data.bind(window, 'DGC', 0)/*DG Class*/,
        DIAN : Scodes.data.bind(window, 'DIAN', 0)/*ECT,   ETT,WAG*/,
        DLC : Scodes.data.bind(window, 'DLC', 0)/*ECT,   ETT,WAG*/,
        DMM : Scodes.data.bind(window, 'DMM', 0)/*TMS ProofofDelivery under CargoArrived*/,
        DMMT : Scodes.data.bind(window, 'DMMT', 0)/*Comment Need*/,
        DOCD : Scodes.data.bind(window, 'DOCD', 0)/*document download method*/,
        DOC_TYPE : Scodes.data.bind(window, 'DOC_TYPE', 0)/*DOC TYPE*/,
        DOTH : Scodes.data.bind(window, 'DOTH', 0)/*CAT*/,
        DPAS : Scodes.data.bind(window, 'DPAS', 0)/*ECT,   ETT,WAG*/,
        DPU : Scodes.data.bind(window, 'DPU', 0)/*TRK,   VAN,CVAN,REF*/,
        DRE : Scodes.data.bind(window, 'DRE', 0)/*TRK,   VAN,CVAN,REF*/,
        DSI : Scodes.data.bind(window, 'DSI', 0)/*CAT*/,
        DTK : Scodes.data.bind(window, 'DTK', 0)/*Comment Need*/,
        DERI : Scodes.data.bind(window, 'DERI', 0)/*Comment Need*/,
        DTP : Scodes.data.bind(window, 'DTP', 0)/*Type of Declaration*/,
        ECT : Scodes.data.bind(window, 'ECT', 0)/*Comment Need*/,
        EHD : Scodes.data.bind(window, 'EHD', 0)/*Equipment Owner*/,
        ELM : Scodes.data.bind(window, 'ELM', 0)/*wouter.entius@oocllogistics.com;earl.weidum@oocllogistics.com*/,
        EMN : Scodes.data.bind(window, 'EMN', 0)/*Equipment Nature*/,
        EMT : Scodes.data.bind(window, 'EMT', 0)/*Emergency Contact Type*/,
        EOE : Scodes.data.bind(window, 'EOE', 0)/*Comment Need*/,
        EPS : Scodes.data.bind(window, 'EPS', 0)/*Equipment Size*/,
        EPT : Scodes.data.bind(window, 'EPT', 0)/*Equipment Type*/,
        ETS : Scodes.data.bind(window, 'ETS', 0)/*Comment Need*/,
        ETT : Scodes.data.bind(window, 'ETT', 0)/*Supervised vehicle*/,
        EXC : Scodes.data.bind(window, 'EXC', 0)/*The actual shipment started date time is earlier than the expected start date time.*/,
        EXN : Scodes.data.bind(window, 'EXN', 0)/*Comment Need*/,
        FAC : Scodes.data.bind(window, 'FAC', 0)/*Comment Need*/,
        GCG : Scodes.data.bind(window, 'GCG', 0)/*Comment Need*/,
        GIS : Scodes.data.bind(window, 'GIS', 0)/*Comment Need*/,
        GOS : Scodes.data.bind(window, 'GOS', 0)/*Comment Need*/,
        GST : Scodes.data.bind(window, 'GST', 0)/*Genset Type*/,
        HLO : Scodes.data.bind(window, 'HLO', 0)/*Density option*/,
        IVO : Scodes.data.bind(window, 'IVO', 0)/*Comment Need*/,
        LNT : Scodes.data.bind(window, 'LNT', 0)/*Comment Need*/,
        LOC : Scodes.data.bind(window, 'LOC', 0)/*Comment Need*/,
        LTP : Scodes.data.bind(window, 'LTP', 0)/*Loading Type*/,
        TPP : Scodes.data.bind(window, 'TPP', 0)/*Trans. Leg Place*/,
        LUM : Scodes.data.bind(window, 'LUM', 0)/*Comment Need*/,
        MAS : Scodes.data.bind(window, 'MAS', 0)/*Comment Need*/,
        MSA : Scodes.data.bind(window, 'MSA', 0)/*Milestone rule*/,
        MNT : Scodes.data.bind(window, 'MNT', 0)/*Measurement Unit*/,
        MSCD : Scodes.data.bind(window, 'MSCD', 0)/*Comment Need*/,
        NBC : Scodes.data.bind(window, 'NBC', 0)/*Oceanplus-FCL*/,
        OIT : Scodes.data.bind(window, 'OIT', 0)/*Outbound / Inbound Loading Type*/,
        OST : Scodes.data.bind(window, 'OST', 0)/*Comment Need*/,
        OTK : Scodes.data.bind(window, 'OTK', 0)/*Comment Need*/,
        PBM : Scodes.data.bind(window, 'PBM', 0)/*Others biz type mapping*/,
        PDM : Scodes.data.bind(window, 'PDM', 0)/*Payment Method*/,
        PDT : Scodes.data.bind(window, 'PDT', 0)/*Comment Need*/,
        PRT : Scodes.data.bind(window, 'PRT', 0)/*Enterprise Identity Number*/,
        PST : Scodes.data.bind(window, 'PST', 0)/*Payment Status*/,
        PTP : Scodes.data.bind(window, 'PTP', 0)/*Comment Need*/,
        MSRT : Scodes.data.bind(window, 'MSRT', 0)/*Report Time*/,
        PUH : Scodes.data.bind(window, 'PUH', 0)/*Pickup Haulage*/,
        REF : Scodes.data.bind(window, 'REF', 0)/*Equipment -- Truck Type/ Size (TRUCKSIZE)*/,
        RPT : Scodes.data.bind(window, 'RPT', 0)/*Comment Need*/,
        RST : Scodes.data.bind(window, 'RST', 0)/*Comment Need*/,
        RTP : Scodes.data.bind(window, 'RTP', 0)/*Comment Need*/,
        SCM : Scodes.data.bind(window, 'SCM', 0)/*Comment Need*/,
        SCT : Scodes.data.bind(window, 'SCT', 0)/*Sensitive Cargo Type*/,
        SDP : Scodes.data.bind(window, 'SDP', 0)/*Comment Need*/,
        SIL : Scodes.data.bind(window, 'SIL', 0)/*Comment Need*/,
        SJT : Scodes.data.bind(window, 'SJT', 0)/*Comment Need*/,
        SRT : Scodes.data.bind(window, 'SRT', 0)/*Active Shipment Type*/,
        ALLSRT : Scodes.data.bind(window, 'ALLSRT', 0)/*ALL Shipment Type*/,
        SSO : Scodes.data.bind(window, 'SSO', 0)/*Comment Need*/,
        SST : Scodes.data.bind(window, 'SST', 0)/*Comment Need*/,
        STK : Scodes.data.bind(window, 'STK', 0)/*Comment Need*/,
        STM : Scodes.data.bind(window, 'STM', 0)/*Comment Need*/,
        STR : Scodes.data.bind(window, 'STR', 0)/*Comment Need*/,
        STS : Scodes.data.bind(window, 'STS', 0)/*Shipment Tracking search criteria*/,
        SWH : Scodes.data.bind(window, 'SWH', 0)/*Comment Need*/,
        TAS : Scodes.data.bind(window, 'TAS', 0)/*Comment Need*/,
        TRA : Scodes.data.bind(window, 'TRA', 0)/*Traffice Mode*/,
        TRD : Scodes.data.bind(window, 'TRD', 0)/*Trade*/,
        TRK : Scodes.data.bind(window, 'TRK', 0)/*Equipment -- Truck Type/ Size (TRUCKSIZE)*/,
        TRN : Scodes.data.bind(window, 'TRN', 0)/*Transportation Mode*/,
        TST : Scodes.data.bind(window, 'TST', 0)/*Non-billable*/,
        TTP : Scodes.data.bind(window, 'TTP', 0)/*Temperature Unit*/,
        TUT : Scodes.data.bind(window, 'TUT', 0)/*Comment Need*/,
        UOM : Scodes.data.bind(window, 'UOM', 0)/*CWT*/,
        UOMINTERFACE : Scodes.data.bind(window, 'UOMINTERFACE', 0)/*CWT*/,
        UOT : Scodes.data.bind(window, 'UOT', 0)/*Comment Need*/,
        NR : Scodes.data.bind(window, 'NR', 0)/*Comment Need*/,
        VAN : Scodes.data.bind(window, 'VAN', 0)/*Equipment -- Truck Type/ Size (TRUCKSIZE)*/,
        VLM : Scodes.data.bind(window, 'VLM', 0)/*Comment Need*/,
        VUT : Scodes.data.bind(window, 'VUT', 0)/*Ventilation Unit*/,
        WAG : Scodes.data.bind(window, 'WAG', 0)/*Comment Need*/,
        WAL : Scodes.data.bind(window, 'WAL', 0)/*Comment Need*/,
        WGT : Scodes.data.bind(window, 'WGT', 0)/*Comment Need*/,
        EVT : Scodes.data.bind(window, 'EVT', 0)/*Comment Need*/,
        YNO : Scodes.data.bind(window, 'YNO', 0)/*Comment Need*/,
        MCT : Scodes.data.bind(window, 'MCT', 0)/*Comment Need*/,
        VATR : Scodes.data.bind(window, 'VATR', 0)/*Comment Need*/,
        VATP : Scodes.data.bind(window, 'VATP', 0)/*Comment Need*/,
        CMD : Scodes.data.bind(window, 'CMD', 0)/*Commodity*/,
        COR : Scodes.data.bind(window, 'COR', 0)/*zero/negative cost reason*/,
        RER : Scodes.data.bind(window, 'RER', 0)/*zero/negative charge reason*/,
        DIR : Scodes.data.bind(window, 'DIR', 0)/*Routing Infomation Direction*/,
        QTN_SERVICE : Scodes.data.bind(window, 'QTN_SERVICE', 0)/*Quotation Service*/,
        FLC_UNIT : Scodes.data.bind(window, 'FLC_UNIT', 0)/*Quotation FCL Unit*/,
        LCL_UOM : Scodes.data.bind(window, 'LCL_UOM', 0)/*Quotation LCL Uom*/,
        SPC_STATUS : Scodes.data.bind(window, 'SPC_STATUS', 0)/*SP Contract Status*/,
        BZN : Scodes.data.bind(window, Scodes.CodeType.BizNature, 0)/* 2.9 reefer trade add biz nature:OLL,    FRT*/,
        CTT : Scodes.data.bind(window, Scodes.CodeType.CustomerType, 0)/*Customer Type*/,
        CMDG : Scodes.data.bind(window, Scodes.CodeType.CommodityGroup, 0)/*Commodity Group*/,
        WMSN : Scodes.data.bind(window, Scodes.CodeType.WMSNeeded, 0)/*WMS Needed*/,
        SPN_TRA : Scodes.data.bind(window, 'SPN_TRA', 0),  //SPN Traffic Mode
        CB_TRA : Scodes.data.bind(window, 'CB_TRA', 0),  //CB Traffic Mode
        TRIWAY : Scodes.data.bind(window, 'TRIWAY', 0)/*Tariff TriggerMethod*/,
        OPS : Scodes.data.bind(window, 'OPS', 0)/*OCS Shipment Plan Operation Status*/,
        OBL : Scodes.data.bind(window, 'NVO_CB_OBL', 0)/*OCS carrier booking obl*/,
        PAER : Scodes.data.bind(window, 'PAER', 0)/*Post Advice Creation Rule*/,
        SUR : Scodes.data.bind(window, 'SUR', 0)/*SVO EDI update Rule*/,
        PAYMODE : Scodes.data.bind(window, 'PAYMODE', 0)/*New LTL pay mode*/,
        PICKUPMODE : Scodes.data.bind(window, 'PICKUPMODE', 0)/*New LTL pickup Mode*/,
        DELIVERYMODE : Scodes.data.bind(window, 'DELIVERYMODE', 0)/*New LTL delivery mode*/,
        INTERFACE_CATEGEORY : Scodes.data.bind(window, 'INTERFACE_CATEGEORY', 0)/*New Interface category*/,
        INTERFACE_ORDERTYPE : Scodes.data.bind(window, 'ORDER_TYPE', 0)/*New Interface order type*/,
        DISPATCH_CHANNEL : Scodes.data.bind(window, 'DISPATCH_CHANNEL', 0)/*New Interface dispatch channel*/,
        INBOUND_ORDER_TYPE : Scodes.data.bind(window, 'INBOUND_ORDER_TYPE', 0)/*New Interface INBOUND_ORDER_TYPE*/,
        DATEFORMAT : Scodes.data.bind(window, 'DATEFORMAT', 0),
        MAX_CHARGE: Scodes.data.bind(window, 'MAX_CHARGE', 0),
        RBR : Scodes.data.bind(window, Scodes.CodeType.RollbackReason, 0),
        SVR_RB: Scodes.data.bind(window, Scodes.CodeType.RollbackReason4SVR, 0),
        RPT_CATEGORY : Scodes.data.bind(window, 'REPORT_CATEGORY', 0),
        RPT_STATUS : Scodes.data.bind(window, 'REPORT_STATUS', 0),
        HEAD_CST : Scodes.data.bind(window, 'HEAD_CST', 0),
        HEAD_RST : Scodes.data.bind(window, 'HEAD_RST', 0),
        SFPTP : Scodes.data.bind(window, 'SFPTP', 0),
        ITM : Scodes.data.bind(window, 'ITM', 0),
        SVR_STATUS : Scodes.data.bind(window, 'SVR_STATUS', 0),
        SVO_STATUS : Scodes.data.bind(window, 'SVO_STATUS', 0),
        LANG:Scodes.data.bind(window, 'LANG', 0),
        DIMENSIONS: Scodes.data.bind(window, 'dimensions', 0),
        EXCHANGE_RATES: Scodes.data.bind(window, 'exchange_rates', 0),
        RPT_SCHEDULED_TYPE: Scodes.data.bind(window, 'RPT_SCHEDULED_TYPE', 0),
        RPT_RANGE_UNIT: Scodes.data.bind(window, 'RPT_RANGE_UNIT', 0),
        RPT_RANGE_SCOPE: Scodes.data.bind(window, 'RPT_RANGE_SCOPE', 0),
        TIME_ZONE: Scodes.data.bind(window, 'TIME_ZONE', 0),
        DATE_RANGE: Scodes.data.bind(window, 'DATE_RANGE', 0),
        BBZG: Scodes.data.bind(window, 'BBZG', 0),
        SPNT: Scodes.data.bind(window, 'SPNT', 0),
        ORT : Scodes.data.bind(window, 'ORT', 0),
        SPNDL : Scodes.data.bind(window, 'SPNDL', 0),
        ORG : Scodes.data.bind(window, 'ORG',0),
        CBDL : Scodes.data.bind(window, 'CBDL', 0),
        CLP_KG: Scodes.data.bind(window, 'CLP_KG', 0),
        CLP_CBM: Scodes.data.bind(window, 'CLP_CBM', 0),
        KCF_WH : Scodes.data.bind(window, 'KCF_WH', 0), /*Korea Custom Filing Warehouse*/
        CLB_PKG :  Scodes.data.bind(window, 'CLB_PKG', 0), /*Sri LanKa Customs Filing Package Type*/
        COR_SPN :  Scodes.data.bind(window, 'COR_SPN', 0), /*OCS SPN cancel reason*/
        WH_SUBCLASS : Scodes.data.bind(window, 'WH_SUBCLASS', 0),/*WAREHOUSE PROFILE*/
        WH_TYPE : Scodes.data.bind(window, 'WH_TYPE', 0),/*WAREHOUSE PROFILE*/
        VCT :  Scodes.data.bind(window, 'VCT', 0),
        VM :  Scodes.data.bind(window, 'VM', 0),
        JURISDICTION :  Scodes.data.bind(window, 'JURISDICTION', 0),
        DMTP_TRANSFORM_TYPE:  Scodes.data.bind(window, 'DMTP_TRANSFORM_TYPE', 0),
        DMTP_T_M:  Scodes.data.bind(window, 'DMTP_T_M', 0),
        DMTP_DATA_TYPE_DCS:  Scodes.data.bind(window, 'DMTP_DATA_TYPE_DCS', 0),
        DMTP_DATA_TYPE_NVO:  Scodes.data.bind(window, 'DMTP_DATA_TYPE_NVO', 0),
        DMTP_DATA_TYPE_CTW:  Scodes.data.bind(window, 'DMTP_DATA_TYPE_CTW', 0),
        TRIGGER_POINT:  Scodes.data.bind(window, 'TRIGGER_POINT', 0),
        DMTP_SOURCE: Scodes.data.bind(window, 'DMTP_SOURCE', 0),
        TRIGGER_TYPE:  Scodes.data.bind(window, 'TRIGGER_TYPE', 0),
        DMTP_CHANNEL:  Scodes.data.bind(window, 'DMTP_CHANNEL', 0),
        DMTP_LOG_STATUS:  Scodes.data.bind(window, 'DMTP_LOG_STATUS', 0),
        CONDITION : Scodes.data.bind(window, 'CONDITION', 0),
        KPI_BASE_ON : Scodes.data.bind(window, 'KPI_BASE_ON', 0),
        KPI_FIELD : Scodes.data.bind(window, 'KPI_FIELD', 0),
        MS_BASE_ON : Scodes.data.bind(window, 'MS_BASE_ON', 0),
        MS_SUPPLY : Scodes.data.bind(window, 'MS_SUPPLY', 0),
        KPI_DIMENSION : Scodes.data.bind(window, 'KPI_DIMENSION', 0),
        AIROPT : Scodes.data.bind(window, 'AIROPT', 0),
        AIRWPT : Scodes.data.bind(window, 'AIRWPT', 0),
        AIRPT : Scodes.data.bind(window, 'AIRPT', 0),
        AIRTT : Scodes.data.bind(window, 'AIRTT', 0),
        AIRBL : Scodes.data.bind(window, 'AIRBL', 0),
        AIRRC : Scodes.data.bind(window, 'AIRRC', 0),
        CBST : Scodes.data.bind(window, 'CBST', 0),/*CB Status*/
        MCHANNEL : Scodes.data.bind(window, 'MCHANNEL', 0),
        MRVARIABLE : Scodes.data.bind(window, 'MRVARIABLE', 0),
        MRSVOVARIABLE : Scodes.data.bind(window, 'MRSVOVARIABLE', 0),
        MSEVERITY : Scodes.data.bind(window, 'MSEVERITY', 0),
        MSG_TRIGGER_TYPE : Scodes.data.bind(window, 'MSG_TRIGGER_TYPE', 0),
        MSG_TYPE : Scodes.data.bind(window, 'MSG_TYPE', 0),
        MSG_CATEGORY : Scodes.data.bind(window, 'MSG_CATEGORY', 0),
        MSG_ORDER_TYPE : Scodes.data.bind(window, 'MSG_ORDER_TYPE', 0),
        CSTATUS : Scodes.data.bind(window, 'CSTATUS', 0),/*Customer Contract Status*/
        KPI_UOT : Scodes.data.bind(window, 'KPI_UOT', 0),
        SORT_TYPE : Scodes.data.bind(window, 'SORT_TYPE', 0),
        RTD : Scodes.data.bind(window, 'RTD', 0),
        STD : Scodes.data.bind(window, 'STD', 0),
        MSG_STATUS: Scodes.data.bind(window, 'MSG_STATUS', 0)
    });

    Object.assign(NS.Scodes, {
        // for excelUpload only
        ServiceOrder : Scodes.data.bind(window, 'ServiceOrder', 0),
        Equipment : Scodes.data.bind(window, 'Equipment', 0),
        Revenue : Scodes.data.bind(window, 'Revenue', 0),
        Cost : Scodes.data.bind(window, 'Cost', 0),
        Service : Scodes.data.bind(window, 'Service', 0),
        Routing : Scodes.data.bind(window, 'Routing', 0),
        Cargo : Scodes.data.bind(window, 'Cargo', 0),
        PickupLocation : Scodes.data.bind(window, 'PickupLocation', 0),
        DeliveryLocation : Scodes.data.bind(window, 'DeliveryLocation', 0),
        //EmptyPickupLocation : Scodes.data.bind(window, 'EmptyPickupLocation', 0),
        //EmptyReturnLocation : Scodes.data.bind(window, 'EmptyReturnLocation', 0),
        //LadenPupLocation : Scodes.data.bind(window, 'LadenPupLocation', 0),
        //LadenDelLocation : Scodes.data.bind(window, 'LadenDelLocation', 0),
        Lookup : Scodes.data.bind(window, 'Lookup', 0),
        Party : Scodes.data.bind(window, 'Party', 0),
        LTL_Setting : Scodes.data.bind(window, 'LTL_Setting', 0),
        CargoSupplement : Scodes.data.bind(window, 'CargoSupplement', 0),
        EXCELUPLOAD : Scodes.data.bind(window, 'EXCELUPLOAD', 0),
        // not from dp_sd_codes
        TMM : Scodes.data.bind(window, 'TMM', 0)/*Excel Multi Pickup/Delivery*/,
        OFFICES : function(){
            var map = DCS.Scodes._codetable || [];
            var key = DCS.UIConfig.DCS == DCS.UIConfig.userType ? 'offices' :  DCS.UIConfig.userType+"_offices";
            var ret = map[key];
            return ret;
        },
        CHARGES : Scodes.data.bind(window, 'charges', 0)/*Comment Need*/,
        COSTS : Scodes.data.bind(window, 'costs', 0)/*Comment Need*/,
        DOCS : Scodes.data.bind(window, 'docs', 0)/*Comment Need*/,
        SERVICES : Scodes.data.bind(window, 'services', 0)/*Comment Need*/,
        ADDSERVICES : Scodes.data.bind(window, 'addservices', 0)/*Comment Need*/,
        WHSAS : Scodes.data.bind(window, 'WHSAS', 0)/*WMS additional service*/,
        TRADEMAP : Scodes.data.bind(window, 'trade', 0),
        PRODEF : function() {/*product define*/
            var map = DCS.Scodes._codetable || [];
            var ret = map['productDefine'];
            return ret;
        },
        PROSERVICES : function() {/*product services*/
            var map = DCS.Scodes._codetable || [];
            var ret = map['proservices'];
            return ret;
        },
        EQUIPS : function() {/*equip nature mapping*/
            var map = DCS.Scodes._codetable || [];
            var ret = map['equips'];
            return ret;
        },
        UOM_INTERFACE: function(){
            var map = DCS.Scodes._codetable || [];
            var ret = map['uominterface'];
            return ret;
        },
        DIMENSIONS: Scodes.data.bind(window, 'dimensions', 0),
        EXCHANGE_RATES: Scodes.data.bind(window, 'exchange_rates', 0),
        RPT_SCHEDULED_TYPE: Scodes.data.bind(window, 'RPT_SCHEDULED_TYPE', 0),
        RPT_RANGE_UNIT: Scodes.data.bind(window, 'RPT_RANGE_UNIT', 0),
        RPT_RANGE_SCOPE: Scodes.data.bind(window, 'RPT_RANGE_SCOPE', 0),
        TIME_ZONE: Scodes.data.bind(window, 'TIME_ZONE', 0),
        DATE_RANGE: Scodes.data.bind(window, 'DATE_RANGE', 0),
        QTN_MOV_TYPE: Scodes.data.bind(window, 'QTN_MOV_TYPE', 0),
        SPNT: Scodes.data.bind(window, 'SPNT', 0),
        SP_RESOURCE_TYPE : Scodes.data.bind(window, 'SP_RESOURCE_TYPE', 0)
    });
})();

var NSCT = DCS.Scodes.CodeType;
