(function(){
    /**
     * @namespace Holds UI config, including Labeling, Hidden, Mandatory
     */
    if(!DCS.UIConfig){
        DCS.UIConfig = {};
    }



    // view/edit SVO page
    DCS.UIConfig.getSvoPageConfig = function(){
        var uiHidden = {};
        var uiMandatory = {};

        var dcsUIHidden = {
            //GeneralTab
            opmsSoNo: true,
            csaNo: true,
            motBookingOffice: true,
            hblNo: true,
            iscms: true,
            hblIssued: true,
            bookingOffice: true,
            deliveryOffice: true,
            fndEta:true,
            soTrafficMode:true,
            nctsCustomsCode: true,
            //Equipment and Cargo Tab
            bookingNo:true,
            cusClearanceNo: true,
            //Revenue tab
            trade: true,
            manifest: true,
            interunitCharge: false,
            exchangeRate: true,
            paymentCurrency: true,
            paymentAmount: true,
            totalPayment: true,
            holdPayment: true,
            //Button
            anNotification: true,
            iscmsCustomer: false,
            anNo: true,
            viewActionLog : false,
            paymentNetAmount: true,
            vatExempt: true
        };
        var ocsUIHidden = {
            //Tab
            referenceTab: true,
            //GeneralTab
            contractName: true,
            executionOffice: true,
            servicePackage: true,
            product: true,
            orderType: true,
            opmsSoNo: false,
            csaNo: false,
            motBookingOffice: false,
            hblNo: false,
            iscms: false,
            hblIssued: false,
            bookingOffice: false,
            deliveryOffice: false,
            cutoffDate: true,
            ata: true,
            cargoNature4OCS: true,
            svvd4OCS: true,
            fndEta:false,
            soTrafficMode:false,
            //Edit Page Service Panel
            serviceExeOffice: true,
            serviceAdminOnly: true,
            serviceInsurance: true,
            operationTime: true,
            shippingInstruction: true,
            nctsCustomsCode: true,
            //View Page Service Panel
            spContract: true,
            svrReference: true,
            svrMilestone: true,
            //Equipment and Cargo Tab
            bookingNo: false,
            equipNature: true,
            uploadCargoBtns: true,
            cusClearanceNo: false,
            //Revenue tab
            invoiceeOffice: true,
            localTransTaxInvoiceParty: true,
            chargeSubTotal: true,
            profit: true,
            dollarInTotal: true,
            balance: true,
            zeroReason: true,
            chargePanel: true,
            dimensions: true,
            userDefinedDimension: true,
            negotiable: true,
            interunitCharge: true,
            trade: false,
            manifest: false,
            exchangeRate: false,
            paymentCurrency: false,
            paymentAmount: false,
            totalPayment: false,
            holdPayment: false,
            //Button
            print: false,
            generatePdf: false,
            printCO: true,
            rollback: true,
            viewRelatedMessage: true,
            anNotification: false,
            markAsFavorite: true,
            iscmsCustomer: true,
            anNo: false,
            trackingNo: true,
            viewActionLog : false,
            paymentNetAmount: false,
            vatExempt: false
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;
        var submitOrder4Charge = CoreBizService.submitSVO4Charge.asManagedDwr({skipAppErrChecking: true});
        var submitOrder = CoreBizService.submitSVO.asManagedDwr();

        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
            submitOrder = DWROcsBean.submitShipmentPlan.asManagedDwr();
            submitOrder4Charge = DWROcsBean.submitSPN4Charge.asManagedDwr({skipAppErrChecking: true});
        }

        return {
            uiHidden: uiHidden,
            uiMandatory: uiMandatory,
            submitOrder: submitOrder,
            submitOrder4Charge: submitOrder4Charge
        };
    };

    DCS.UIConfig.getSearchSvoPageConfig = function(){
        var dcsUIHidden = {
            opmsSoNo: true,
            opmsHblNo: true,
            ccpName: true,
            csaNo: true,
            sales: true,
            shipperName: true,
            consigneeName: true,
            bookingOffice: true,
            deliveryOffice: true,
            trade: true,
            carrierBookingNo: true,
            billofLadingNo: true,
            podEta: true,
            fndEta: true,
            refNo:false,
            shipId:true,
            joNos:true,
            rateRefNumber: true
        };
        var ocsUIHidden = {
            //Hide Fields
            opmsSoNo: false,
            opmsHblNo: false,
            ccpName: false,
            csaNo: false,
            sales: false,
            shipId:false,
            joNos:false,
            shipperName: false,
            consigneeName: false,
            bookingOffice: false,
            deliveryOffice: false,
            trade: false,
            carrierBookingNo: false,
            billofLadingNo: false,
            podEta: false,
            whsRefNo: true,
            rateRefNumber: false,
            //Tab
            referenceTab: true,
            //Search Criteria
            advSearchTips: true,
            customerName: true,
            shipNum: true,
            exeOffice: true,
            containerNo: true,
            revenueOffice: true,
            transMode: true,
            product: true,
            warehouseName: true,
            breakLine: true,
            //Button
            viewRelatedMessage: true,
            print: false,
            generatePdf: false,
            exportBtn: true,
            markAsFavorite: true,
            refNo:true,
            fndEta:false
        };

        var dcsUIMandatory = {
            checkAdvSearchInputed: true
        };
        var ocsUIMandatory = {
            checkAdvSearchInputed: false
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;
        var uiMandatory = dcsUIMandatory;
        var searchFun = CoreBizService.searchShipment.asManagedDwr();
        var submitOrders = CoreBizService.submitShipments.asManagedDwr();

        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
            Object.assign(uiMandatory, ocsUIMandatory);
            searchFun = DWROcsBean.searchPreSo.asManagedDwr();
            submitOrders = DWROcsBean.submitShipmentPlans.asManagedDwr();
        }

        return {
            uiHidden: uiHidden,
            uiMandatory: uiMandatory,
            searchFun: searchFun,
            submitOrders: submitOrders
        };
    };

    DCS.UIConfig.getViewSvoPageConfig = function(){
        var uiHidden = {};
        var uiMandatory = {};

        var dcsUIHidden = {
            trade: true,
            manifest: true,
            interunitCharge: false,
            fndEta:true,
            anNotification: true,
            exchangeRate: true,
            paymentCurrency: true,
            paymentAmount: true,
            totalPayment: true,
            anNo: true
        };
        var ocsUIHidden = {
            //revenue tab
            invoiceeOffice: true,
            revenueRecogDate: true,
            localTransTaxInvoiceParty: true,
            chargeSubTotal: true,
            profit: true,
            dollarInTotal: true,
            dollarOutTotal: true,
            balance: true,
            zeroReason: true,
            chargePanel: true,
            dimensions: true,
            userDefinedDimension: true,
            negotiable: true,
            interunitCharge: true,
            trade: false,
            manifest: false,
            anNotification: false,
            fndEta:false,
            anNo: false
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;

        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
        }

        return {
            uiHidden: uiHidden,
            uiMandatory: uiMandatory
        };
    };

    DCS.UIConfig.getSearchSvrPageConfig = function(){
        var uiHidden = {};
        var uiMandatory = {};

        var dcsUIHidden = {
            shipmentNo: false,
            shippingOrderNo: true,
            hblNo: true,
            ccpName: true,
            consigneeName: true,
            shipperName: true
        };
        var ocsUIHidden = {
            //btn
            messageBtn: true,
            exportBtn: true,
            referenceBtn: true,
            milestoneBtn: false,
            //fields
            customer: true,
            shipmentNo: true,
            shippingOrderNo: false,
            hblNo: false,
            ccpName: false,
            consigneeName: false,
            shipperName: false,
            //col
            executionOffice: true,
            whsRefNo: true,
            containerNo: true,
            costSummary: true,
            joCostNo: true
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;
        var searchFun = CoreBizService.searchServiceRequestPage.asManagedDwr();

        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
            searchFun = DWROcsBean.searchJobService.asManagedDwr();
        }

        return {
            uiHidden: uiHidden,
            uiMandatory: uiMandatory,
            searchFun: searchFun
        };
    };

    DCS.UIConfig.getViewSvrCostPageConfig = function(){
        var uiHidden = {};
        var uiMandatory = {};

        var dcsUIHidden = {
            chargeSubTotal: false,
            endSupplierCost: false,
            dollarInTotal: false,
            interunitCharge: false,
            dimensions: false,
            userDefinedDimension: false,
            negotiable: false,
            trade: true,
            manifest: true,
            fndEta:true,
            exchangeRate: true,
            paymentCurrency: true,
            paymentAmount: true,
            totalPayment: true,
            viewActionLog : false,
            holdPayment: true,
            spControlOffice : true,
            spMaintenanceOffice : false,
            multiPickupCargo : false,
            //milestone grid column
            expectedDate: false,
            msCreatedBy: false,
            cusClearanceNo: true,
            costRecognitionDateHeader: false,
            paymentNetAmount: true,
            vatExempt: true
        };
        var ocsUIHidden = {
            //btn
            quickNavigation: true,
            viewRelMsg: true,
            message: true,
            printInlandBL: true,
            printDockReceipt: true,
            viewSerialNo: true,
            docFolder: false,
            //Tab
            referenceTab: true,
            //equipment grid column
            equipNature: true, //'CNTR'
            additionalNature: false,
            additionalNo: false,
            cusClearanceNo: false,
            //milestone grid column
            expectedDate: true,
            msCreatedBy: true,
            //fields
            svvd4OCS: true,
            serviceProviderContract: true,
            servicePackage: true,
            controlOffice: true,
            adminOnly: true,
            ata: true,
            cutoffDate: true,
            chargeSubTotal: true,
            endSupplierCost: true,
            dollarInTotal: true,
            interunitCharge: true,
            dimensions: true,
            userDefinedDimension: true,
            negotiable: true,
            trade: false,
            manifest: false,
            trackingNo: true,
            fndEta:false,
            truckingInsuraceService: true,
            spControlOffice : false,
            spMaintenanceOffice : true,
            multiPickupCargo : true,
            //button
            addFromTariff: true,
            retrigger: true,
            exchangeRate: false,
            paymentCurrency: false,
            paymentAmount: false,
            totalPayment: false,
            viewActionLog : false,
            holdPayment: false,
            costRecognitionDateHeader: true,
            paymentNetAmount: false,
            vatExempt: false
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;

        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
        }

        return {
            uiHidden: uiHidden,
            uiMandatory: uiMandatory
        };
    };

    DCS.UIConfig.getPeriodCostConfig = function(){
        var uiHidden = {};
        var uiMandatory = {};

        var dcsUIHidden = {
            carrierBookingNo: true,
            oblNo: true,
            chbGroup: true,
            trade: true,
            go2OCS: true,
            manifest: true,
            exchangeRate: true,
            paymentCurrency: true,
            paymentAmount: true,
            costRecogDateCombo: true,
            recognitionDate: false,
            vatExempt: true
        };
        var ocsUIHidden = {
            customerName: true,
            contractName: true,
            exeOffice: true,
            ccpOffficeName: true,
            bizNature: true,
            periodicFeeDate: true,
            warehouseName: true,
            refChargePanel: true,
            refEdit: true,
            spContractName: true,

            go2OCS: false,
            carrierBookingNo: false,
            oblNo: false,
            chbGroup: false,
            trade: false,
            manifest: false,
            exchangeRate: false,
            paymentCurrency: false,
            paymentAmount: false,
            costRecogDateCombo: false,
            recognitionDate: true,
            vatExempt: false
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;

        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
        }

        return {
            uiHidden: uiHidden,
            uiMandatory: uiMandatory
        };
    };

    DCS.UIConfig.getSearchCostConfig = function(){
        var uiHidden = {};
        var uiMandatory = {};

        var dcsUIHidden = {
            oblNo: true,
            holdPayment: true
        };
        var ocsUIHidden = {
            warehouse: true,
            spContract: true,
            executionOffice: true,
            newPeriodicCost: true,
            interUnitCharge: true,
            exportBtn: true,
            oblNo: false,
            bizSubUnit:true,
            holdPayment: false
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;
        var searchFun = ArapService.searchCost.asManagedDwr();
        
        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
            searchFun = DWROcsBean.searchNVOCost.asManagedDwr();
        }
        
        return {
            uiHidden: uiHidden,
            uiMandatory: uiMandatory,
            searchFun: searchFun
        };
    };

    DCS.UIConfig.getBatchApproveCostConfig = function(){
        var uiHidden = {};

        var dcsUIHidden = {
            exchangeRate: true,
            paymentCurrency: true,
            paymentAmount: true,
            totalPayment: true,
            paymentNetAmount: true,
            holdPayment: true
        };
        var ocsUIHidden = {
            warehouse: true,
            spContract: true,
            executionOffice: true,
            businessNature: true,
            revenueSubTotal: true,
            inTotal: true,
            profit: true,
            balance: true,
            interUnitCharge: true,
            exchangeRate: false,
            paymentCurrency: false,
            paymentAmount: false,
            totalPayment: false,
            paymentNetAmount: false,
            holdPayment: false
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;

        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
        }

        return {
            uiHidden: uiHidden
        };
    };

    DCS.UIConfig.getProviderConfig = function(){
        var uiHidden = {};

        var dcsUIHidden = {};
        var ocsUIHidden = {
            warehouse: true
        };

        // Default use DCS config
        var uiHidden = dcsUIHidden;

        if (DCS.UIConfig.userType == DCS.UIConfig.OCS) {
            Object.assign(uiHidden, ocsUIHidden);
        }

        return {
            uiHidden: uiHidden
        };
    };

})();

var NSUIConf = DCS.UIConfig;