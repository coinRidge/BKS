var DCS = (typeof (DCS) == 'undefined' || DCS === null) ? {} : DCS;


(function() {
	/**
	 * @namespace Holds constants
	 */
	DCS.Const = {};

	DCS.Const.EXPORT_MAX_SIZE = 20000;

	DCS.Const.MESSAGE_EXPORT_MAX_SIZE = 10000;

	DCS.Const.Cookie = {
		SEPARATOR : '; ',
		EXT3_PREFIX : 'ys-',
		DCS : 'dcs',
		LAST_ACCESS_TIME: 'lastAccessTime' //R2.24, session timeout
	};

	DCS.Const.SummaryEmpty = "&nbsp;&nbsp;&nbsp;&nbsp;";

	DCS.Const.SummaryLabel = '<b><font color=#104E8B >{0}</font></b>{1}{2}';

	DCS.Const.SEPARATOR_SEMICOLON=";";

    DCS.Const.SEPARATOR_COLON=":";

	DCS.Const.SEPARATOR_COMMA=",";

	DCS.Const.SEPARATOR_SPACE=" ";

    DCS.Const.SEPARATOR_SLASH="/";

    DCS.Const.SEPARATOR_THROUGH_LINE="-";

	DCS.Const.System = "SYSTEM";

	DCS.Const.LabelSuffix = ":";
	/**
	 * Default page size for paging
	 *
	 * @type {int}
	 * @static
	 * @public
	 * @property
	 */
	DCS.Const.PAGE_ENTRY_SIZE = 20;

	/**
	 * For NW,GW,Volume,Unit_Price
	 *
	 * @type {int}
	 * @static
	 * @public
	 * @property
	 */
	DCS.Const.EQUIPMENT_CARGO_DATA_MAXVALUE = 9999999999;

	/**
	 * SVO/SVR, Equipments Reference types Sample usage:
	 * DCS.Const.REFERENCE_TYPE.SVO
     * svr_item -- item level ms log
     * svo_ref/svr_ref -- SVO/SVR reference log
	 * @type {obj}
	 * @static
	 * @public
	 */
	DCS.Const.REFERENCE_TYPE = {
		SVO : 'svo',
		SVR : 'svr',
		SVO_EQU : 'svo_equ',
		SVR_EQU : 'svr_equ',
		SVR_ITEM : 'svr_item',
		SVO_ITEM : 'svo_item',
		SVO_REF: 'svo_ref',
		SVR_REF: 'svr_ref'
	};
    /*
     * Order level reference fields
     * capture_at field can be 'SVO' or SVR service
     */
    DCS.Const.CAPTURE_AT = {
        SVO: 'SVO'
    };
	/**
	 * All product codes
	 */
	DCS.Const.PRODUCTS = {
		IMPORT_ORDER : 'IF', // Import Order Logistics Service
		LOCAL_STORAGE : 'ID', // Local(City) Storage & Distribution
		TRANSPORTATION_BARGE : 'ITB',// National Transportation
										// Management(Barge)
		TRANSPORTATION_COASTAL : 'ITC',// National Transportation
										// Management(Coastal)
		TRANSPORTATION_RAIL : 'ITD',// National Transportation Management(Rail)
		TRANSPORTATION_AIR : 'ITA',// National Transportation Management(Air)
		STANDARD_TRUCK : 'ST',// Standard Trucking Service
		STANDARD_CUS_CLEAN_IMPORT : 'TLI',// Standard Customs Clearance
											// Service (Import)
		STANDARD_CUS_CLEAN_EXPORT : 'TLE',// Standard Customs Clearance
											// Service (Export)
		EXPORT_ORDER : 'ELS',// Export Order Logistics Service
		MAINLAND_EXPORT_REIMPORT : 'ERI',// Mainland china Export & Re-Import
											// via BLP
		OTHERS : 'OTH',// Others
		STANDARD_STORAGE : 'SW',// Standard Storage Service
		FREIGHT_FORWARDING : 'FF',// Standard Freight Forwarding
		TRANSPROTATION_MIXED : 'ITM' // National Transportation
										// Management(Mixed)
	};
	DCS.Const.BIZUNIT = {
		IMP: '3FF',
		FCL: 'FCL',
		AFW: 'AFW'
	};
	DCS.Const.IntModeCode ={
        SEA :'INTSEA',
        AIR:'INTAIR',
        RAILWAY:'INTRLW',
        ROAD:'INTROAD'
    };
	/**
	 * All service codes
	 */
	DCS.Const.SERVICES = {
		EXPORT_CUSTOMERS : 'CD',// Export Customs Declaration/Clearance
		IMPORT_CUSTOMERS : 'CC',// Import Customs Declaration/Clearance
		EXPORT_IMPORT_CUSTOMERS : 'ERI',  //Export & Import Customs Declaration/Clearance
		BOOK_EMPTY_CONTAINER : 'BE',// Book Empty Container
		PICKUP_DELIVER_EMPTY_CONTAINER : 'PU',// Pickup and Deliver Empty Container
		TRUCKING : 'TK',
		RETURN_EMPTY_CONTAINER : 'RE',
		BOOKING_WITH_CARRIER : 'BS',
		MAIN_MODE_TRANSPORTATION : 'MMT',
		ARRIVAL_HANDLING : 'IAN',
		GATEIN_STORAGE : 'PAS',// -Gate In and Storage
		WAREHOUSE_ADDITIONAL_SERVICE : 'AS',
		LOAD_CARGO : 'LC',
		DISCHARGE_CARGO : 'DC',
		GATE_OUT : 'DPC',
		OTHER_SERVICE : 'OTH',
		INSURANCE : 'IN',
		SHIPPING_INSTRUCTION : 'SI',
		AES_FILING : 'AES',
		ADD_OTHER_SERVICE: 'ADOTH'
	};
    /**
    *  Two Dispatch Channel ways
    */
    DCS.Const.DispatchChannel = {
        OFFLINE: 'OFFLINE',
        EDI: 'EDI',
        BKS: 'BKS'
    };

	/**
	 * All Cargo natures
	 */
	DCS.Const.CARGONATURE = {
		GENERAL : "GC",
		HANDLING_CARMENT : "HG",
		DANGEROUS : "DG",
		REFER : 'RF',
		REFER_DANGER : 'RD',
		AWARD : "AW",
		AWARD_DANGER : 'AD'
	};

    DCS.Const.EquipNature = {
        Container: 'CNTR'
    };

	DCS.Const.TransportationMode = {
		Container_Trucking : 'CTR',
		Lorry_Trucking : 'LTR',
		Barge : 'BAR',
		Coastal_Feeder : 'CTF',
		Railway : 'RLW',
		Air : 'AIR'
	};

	DCS.Const.LocationNature = {
		EMPTY_PICKUP_POINT : 'EPP',
		LADEN_PICKUP_POINT : 'LPP',
		PICKUP_POINT : 'PUP',
		DELIVER_POINT : 'DYP',
		EMPTY_RETURN_POINT : 'ERP',
		LADEN_RETURN_POINT : 'LRP',
		LOADING_FACILITY: 'POL',
		DISCHARGING_FACILITY : 'POD',
		OP_MILKRUN: 'milkRun',
		OP_FIRST_PICK: 'firPickup',
		OP_LAST_DELIVER: 'lastDeliver'
	};

	DCS.Const.LoadingType = {
		FCL : 'FCL'
	};

	DCS.Const.SvoStatus = {
		Draft : 'Draft',
		New : 'New',
		InProgress : 'In-Progress',
		Cancel : 'Cancelled',
		Complete : 'Completed',
		Terminate : 'Terminated'
	};

	DCS.Const.SvrStatus = {
		New : 'N',
		Dispatching : 'H',
		Dispatched_P : 'P',
		Dispatched : 'D',
		Terminated : 'T',
		Cancelled : 'C',
		Completed : 'F',
		Cancelling : 'L',
        Terminating : 'A'
	};

    DCS.Const.SvrStatusLite = ['N','D','P','T','C','F'];

    DCS.Const.SvrDispatchChannel = {
        Manual : "manual",
        Email :"email",
        TMS : "TMS"
    };

    DCS.Const.chargeAndCostStatus = {
        invoiceFinal:'IF'
    };

	DCS.Const.CostStatus = {
		Approving : "P",
		New : "N",
		Updated : "U",
		Approved : "A",
		Nonbillable : "B",
		PartialMatched : "PM",
		FullyMatched : "FM",
		FullyPaid : "FP",
		Cleared : "CL",
		Pass2IPS : "PI"
	};

    DCS.Const.CostPrefix = {
        JO : "JO",
        SVR : "SVR",
        JSR : "JSR"
    };

	DCS.Const.ContractStatus = {
		DRAFT : "D",
		EXPIRIED : "X",
		EFFECTIVE: "E",
		FUTURE_AVALIABLE : "F",
		CONFIRMED : "C",
		APPROVED : "A",
		CANCELLED : "CA"
	};

	/**
	 * Refer to <tt>AttachmentInfo.TYPE_*</tt>
	 */
	DCS.Const.DocOwnerType = {
		SVO : 'SVO',
		SVR : 'SVR',
		MILESTONE : 'MS',
		RMA : 'RMA',
		CARTON_EVENT : 'CE'
	};

	/**
	 * Refer to <tt>DocRequest.STATUS_*</tt>
	 */
	DCS.Const.DocRequestStatus = {
		NEW : 'New',
		SENT : 'Sent',
		RECEIVED : 'Received',
		RESENT : 'Resent'
	};

	DCS.Const.ServiceType = {
		Carrier : 'CARRIER',
		Common : 'CMN',
		Others: 'CMN',
		Customs : 'CHB',
		Transportation : 'TP',
		Warehouse : 'WH'
	};

	DCS.Const.PageAction = {
		New : 'new',
		Edit : 'edit',
		Copy : 'copy',
		View : 'view',
		Delete : 'delete',
		Confirm: 'confirm',
		Approve: 'approve'
	};

	DCS.Const.SaveMode = {
		SwitchTab : 'switch',
		Manual : 'manual',
		Auto : 'atuo',
		NoReload : 'noReload'
	};
	// SVR tab information
	DCS.Const.SVRTab = {
		generalInfo : 'general',
		equipmentCargo : 'equipCargo',
		equipmentCarton : 'equipCarton',
		reference : 'reference',
		milestone : 'milestone',
		cost : 'cost',
		carrierCost : 'carrierCostTab'
	};

	DCS.Const.PartType = {
		Shipper : 'VDR',
		Consignee : 'CSN',
		NotifyParty : 'PY1',
		AlsoNotifyParty : 'PY2',
		Forwarder : 'FWD',
		Division : 'DV'
	};

	DCS.Const.PartySource = {
		ServiceOrder : "Service Order",
		CustomerProfile : "Customer Profile"
	};

	/**
	 * Valid status for SVR operation(complete/cancel/terminate/dispatch)
	 */
	DCS.Const.ValidCompleteSVRStatus = ";D;P;";
	DCS.Const.ValidCancelSVRStatus = ";N;D;P;";
	DCS.Const.ValidTerminateSVRStatus = ";N;D;P;";
	DCS.Const.ValidDispatchSVRStatus = ";N;D;P;";
	DCS.Const.ValidGoToSPSStatus = ";D;P;";

	DCS.Const.Permissions = {
		CSA:{
		    VIEW_CSA: 'CSA.LIST.VIEW',
		    NEW_CSA: 'CSA.ITEM.ADD',
		    COPY_CSA: 'CSA.ITEM.ADD',
		    EDIT_CSA: 'CSA.ITEM.EDIT',
		    CONFIRM_CSA: 'CSA.ITEM.EDIT',
		    APPROVE_CSA: 'CSA.ITEM.APPROVE'
		},
		OPE : {
			OR : "||",
			AND : "&&"
		},
		SOP : {
			ITEM_ADD : "SOP.ITEM.ADD",
			ITEM_EXPAND:"SOP.ITEM.EXPAND",
			LIST_VIEW : "SOP.LIST.VIEW",
			LIST_EXPORT : "SOP.LIST.EXPORT",
			ITEM_EDIT : "SOP.ITEM.EDIT"
		},
		SR : {
			LIST_VIEW : "SR.LIST.VIEW",
			CARTON_LIST : "SR.LIST.CARTON",
			ITEM_ADD : "SR.ITEM.ADD",
			ITEM_EDIT : "SR.ITEM.EDIT",
			ITEM_EDIT_CN : "SR.ITEM.EDIT.CN",
			ITEM_COMPLETE : "SR.ITEM.COMPLETE",
			ITEM_ROLLBACK : "SR.ITEM.ROLLBACK",
			ITEM_CANCEL : "SR.ITEM.CANCEL",
			ITEM_TERMINATE : "SR.ITEM.TERMINATE",
			COST_OFFICE_EDIT : "SR.COSTOFFICE.EDIT",
			LTL_ITEM_NEW :"LTL.ITEM.NEW",
			LTL_ITEM_EDIT :"LTL.ITEM.EDIT",
			LTL_LIST_VIEW:"LTL.LIST.VIEW",
			MANIFEST_PRINT:"SR.MANIFEST.PRINT",
			HAWB_PRINT:"SR.HAWB.PRINT",
			CARGO_LABEL_PRINT:"SR.LABEL.PRINT",
			QR_CODE_PRINT:"SR.ITEM.PRINT"
		},
		MSG : {
			LIST_VIEW : "MSG.LIST.VIEW",
			ITEM_PREFIX : "MSG.ITEM.",
			ITEM_ADD : "MSG.ITEM.ADD",
			ITEM_EDIT : "MSG.ITEM.EDIT",
			ITEM_CLOSE : "MSG.ITEM.CLOSE"
		},
        CB : {
            ADD_COST:  "ARAP.AP.ADD",
            ITEM_ADD : "CB.ITEM.ADD",
            ITEM_EDIT : "CB.ITEM.EDIT",
            LIST_VIEW : "CB.LIST.VIEW",
            LIST_TDL : "CB.LIST.TDL"
        },
		CUSTOMER : {
			LIST_VIEW : "CUSTOMER.LIST.VIEW",
			ITEM_ADD : "CUSTOMER.ITEM.ADD",
			ITEM_EDIT : "CUSTOMER.ITEM.EDIT"
		},
		CUSTOMERITEM : {
			ITEM_EDIT : "CUSTOMERITEM.ITEM.EDIT"
		},
		SP : {
			LIST_VIEW : "SP.LIST.VIEW",
			ITEM_ADD : "SP.ITEM.ADD",
			ITEM_EDIT : "SP.ITEM.EDIT"
		},
		USER : {
			LIST_VIEW : "USER.LIST.VIEW",
			ITEM_ADD : "USER.ITEM.ADD",
			ITEM_EDIT : "USER.ITEM.EDIT",
			ITEM_REMOVE : "USER.ITEM.REMOVE",
			ITEM_FUN_GRP_CREATE : "USER.ITEM.ROLE.CREATE",
			ITEM_FUN_GRP_EDIT : "USER.ITEM.ROLE.EDIT",
			ITEM_FUN_GRP_LIST_VIEW : "USER.ITEM.ROLE.LIST.VIEW"
		},
		SPCONTRACT : {
			LIST_VIEW : "SPCONTRACT.LIST.VIEW",
			LIST_EXPORT : "SPCONTRACT.LIST.EXPORT",
			ITEM_ADD : "SPCONTRACT.ITEM.ADD",
			ITEM_EDIT : "SPCONTRACT.ITEM.EDIT",
			ITEM_CANCEL : "SPCONTRACT.ITEM.CANCEL",
			ITEM_APPROVE : "SPCONTRACT.ITEM.APPROVE",
			ITEM_EXPIRE : "SPCONTRACT.ITEM.EXPIRE",
			LIST_TRUCKCO_TARIFF : "SPCONTRACT.LIST.TRUCOTARIFF"
		},
		JO : {
			LIST_PREFIX : "JO.LIST.",
			LIST_VIEW : "JO.LIST.VIEW",
            LIST_LCL_CREATE: "JO.LIST.LCL.CREATE",
			ITEM_PREFIX : "JO.ITEM.",
			ITEM_ADD : "JO.ITEM.ADD",
			ITEM_EDIT : "JO.ITEM.EDIT",
			ITEM_COMPLETE : "JO.ITEM.COMPLETE",
			ITEM_ROLLBACK : "JO.ITEM.ROLLBACK",
			ITEM_CANCEL : "JO.ITEM.CANCEL",
			ITEM_TERMINATE : "JO.ITEM.TERMINATE",
			ITEM_DISPATCH : "JO.ITEM.DISPATCH",
			APPROVE_COST : "JO.APPROVE.COST",
            POWER_APPROVE_COST: "JO.POWERAPPROVE.COST",
			AMEND_COST : "JO.AMEND.COST",
			BKS_ADD : "JO.BKS.ADD",
			MS_REGENERATE : 'JO.MS.REGENERATE'
		},
		MyDomestic : {
			ITEM_PWD_CHANGE : "MYDP.PWD.CHANGE"
		},
		Report : {
			LIST_VIEW : "RPT.LIST.VIEW",
			ITEM_ADD : "RPT.LIST.ADD",
			ITEM_RPAHR : "RPT.ITEM.RPAHR",
			ITEM_RPHR : "RPT.ITEM.RPHR",
			LIST_ALL :'RPT.LIST.ALL'
		},
		ARAP : {
			AR_VIEW : "ARAP.AR.VIEW",
			AR_ADD : "ARAP.AR.ADD",
			AR_EDIT : "ARAP.AR.EDIT",
			AP_VIEW : "ARAP.AP.VIEW",
			AP_ADD : "ARAP.AP.ADD",
			AP_EDIT : "ARAP.AP.EDIT",
			EUFILE_EDIT : "ARAP.EU.EDIT",
			EUFILE_APPROVE : "ARAP.EU.APPROVE",
			AP_UNLOCK : 'ARAP.AP.UNLOCK'
		},
		OFFICE : {
			OFFICE_VIEW : "OFFICE.LIST.VIEW",
			OFFICE_EDIT : "OFFICE.ITEM.EDIT",
			OFFICE_ADD : "OFFICE.ITEM.ADD"
		},
		WAREHOUSE : {
			WAREHOUSE_VIEW : "WAREHOUSE.LIST.VIEW",
			WAREHOUSE_ADD : "WAREHOUSE.ITEM.ADD",
			WAREHOUSE_EDIT : "WAREHOUSE.ITEM.EDIT"
		},
		ReturnCargoMGT : {
			RCM_NEW : "RCM.ITEM.NEW",
			RCM_VIEW : "RCM.ITEM.VIEW",
			RCM_PLAN : "RCM.ITEM.PLAN",
			RCM_RECEIVE : "RCM.ITEM.RECEIVE",
			RCM_HANDLING : "RCM.ITEM.HANDLING"
		},
		TransportionOrderMGT : {
			TOM_TRP : "TOM.ITEM.TRP",
			TOM_NCO : "TOM.ITEM.NCO",
			TOM_SCO : "TOM.ITEM.SCO",
			TOM_PCO : "TOM.ITEM.PCO",
			TOM_MEW : "TOM.ITEM.MEW"
		},
		EDIRule : {
			EDIRule_VIEW : "EDIR.LIST.VIEW",
			EDIRule_ADD : "EDIR.ITEM.ADD",
			EDIRule_EDIT : "EDIR.ITEM.EDIT"
		},
		CARRIER : {
			CARRIER_VIEW : "CARRIER.LIST.VIEW",
			CARRIER_ADD : "CARRIER.ITEM.ADD",
			CARRIER_EDIT : "CARRIER.ITEM.EDIT"
		},
		WAREHOUSERULE : {
			VIEW : "WarehouseRule.LIST.VIEW",
			ADMEND : "WarehouseRule.ITEM.AMEND"
		},
		SPSIMPRULE : {
			VIEW : "SPSImpRule.LIST.VIEW",
			ADMEND : "SPSImpRule.ITEM.AMEND"
		},
		TDL : {
			CHKOBL : "TDL.LIST.CHKOBL",
			COSTNOTOVERDUE : "TDL.LIST.COSTNOTOVERDUE",
			COSTOVERDUE : "TDL.LIST.COSTOVERDUE"
		},
		GEO: {
			GEO_EDIT: "LOCATION.ITEM.EDIT"
		},
		QTN : {
			ITEM_VIEW : 'QTN.LIST.VIEW',
			ITEM_NEW : 'QTN.ITEM.ADD',
			ITEM_COPY : 'QTN.ITEM.ADD',
			ITEM_EDIT : 'QTN.ITEM.EDIT',
			ITEM_CONFIRM: 'QTN.ITEM.EDIT',
			ITEM_APPROVE : 'QTN.ITEM.APPROVE'
		},
		CLP : {
			LIST_VIEW : 'CLP.LIST.VIEW'
		},
        MilestoneRule : {
            LIST_VIEW : "MSR.LIST.VIEW",
            ITEM_ADD : "MSR.ITEM.ADD",
            ITEM_EDIT : "MSR.ITEM.EDIT"
        },
        DMTPOutboundRule : {
            LIST_VIEW : "DMTPRULE.LIST.VIEW",
            ITEM_EDIT : "DMTPRULE.ITEM.EDIT"
        },
		KpiRule : {
			LIST_VIEW : "KPI.LIST.VIEW",
			ITEM_ADD : "KPI.ITEM.ADD",
			ITEM_EDIT : "KPI.ITEM.EDIT"
		},
		ScorecardRule : {
			LIST_VIEW : "SC.LIST.VIEW",
			ITEM_ADD : "SC.ITEM.ADD",
			ITEM_EDIT : "SC.ITEM.EDIT"
		},
		AssignSPNRule : {
			LIST_VIEW : "ASSIGN.LIST.VIEW",
			ITEM_EDIT : "ASSIGN.ITEM.EDIT"
		},
		LookupTable : {
		    LIST_VIEW: "LT.LIST.VIEW",
            ITEM_EDIT: "LT.ITEM.EDIT"
		},
		Milestone: {
		    ITEMS_EDIT : 'MS.ITEMS.EDIT'
		},
		BKSBR: {
            ITEM_CREATE : 'BKSBR.ITEM.CREATE',
            ITEM_AMEND : 'BKSBR.ITEM.AMEND',
            LIST_VIEW : 'BKSBR.LIST.VIEW'
        },
		CommonParty:{
		    ITEM_ADD : "BKS.PARTY.ITEM.CREATE",
		    ITEM_EDIT : "BKS.PARTY.ITEM.AMEND",
		    LIST_VIEW : "BKS.PARTY.LIST.VIEW"
		},
		Tariff: {
			LIST_VIEW : 'OLLLCMNTRF.LIST.VIEW',
			ITEM_ADD : 'OLLLCMNTRF.ITEM.CREATE',
			ITEM_EDIT : 'OLLLCMNTRF.ITEM.AMEND'
        },
        SpResource : {
        	LIST : 'SPRESOURCE.LIST.VIEW',
        	EDIT : 'SPRESOURCE.ITEM.EDIT'
        },
        Message : {
            LIST_VIEW : "ME.LIST.VIEW",
            ITEM_EDIT : "ME.ITEM.EDIT",
            ITEM_ADD : "ME.ITEM.ADD"
        },
        SpRule : {
            ITEM_EDIT: "SPRULE.ITEM.AMEND",
            LIST_VIEW : "SPRULE.LIST.VIEW"
        }
	};

    DCS.Const.CacheID = {
    	ThirdParty: "thirdParty",
        PartyCCP: "CustomerAll_Party",
        PartyOthers: "thirdParty_Party",
        CustomerAll: "CustomerAll",
        CustomerActive: "CustomerActive",
        CustomerSVOAll: "CustomerSVOAll",
        CustomerSVOActive: "CustomerSVOActive",
        CustomerNVO: "CustomerNVO",
        CustomerFilterByOffice: "CustomerFilterByOffice",
        OfficeAll: "OfficeAll",
        OfficeActive: "OfficeActive",
        OfficeUserActive: "OfficeUserActive",
        OfficeUserAccessible: "OfficeUserAccessible",
        Location: "Location",
        LocationLoc: "LocationLoc",
        LocationFac: "LocationFac",
        LocationLocFac: "LocationLocFac",
        LocationHigher: "LocationHigher",
        LocationCascade: "LocationCascade",
        LocationPort: "LocationPort",
        Warehouse: "Warehouse",
        ServiceProvider: "ServiceProvider",
        SVRServiceProvider: "SvrSPSC",
        SpServicePackage: "SpServicePackage",
        CustomerContract: "CustomerContract",
        EffectiveSPContract: "EffectiveSPContract",
		UserActive: "UserActive",
        UserInternal: "UserInternal",
        CompositeParty: "CompositeParty",
        Product: "Product",
        Charge: "Charge",
        Sales: "Sales",
        QuickSearchSVO: "QuickSearchSVO",
        UserEmails: "UserEmails",
        Carrier: "Carrier",
     	milestone: "milestone",
     	IscmsCode: "IscmsCode",
     	IscmsName: "IscmsName",
     	ParentLocation:"ParentLocation",
     	CustomerGroup: "CustomerGroup",
     	ProviderResource: "ProviderResource",
     	LangResource: "LangResource",
		SvoOffice: "SvoOffice",
		SvrOffice: "SvrOffice"
    };

     DCS.Const.Action = {
         Delete : -1,
         Ignore : 0,
         Update : 2,
         Insert : 1,
         Send : 3
     };


     // item template
     DCS.Const.TPL = {
         IC: 1,
         SELECTED: 2,
         RECEIVE_WMS_UPDATE: 4,
         MANDATORY: 8,
         BEYOND_VALUE_LIST: 16,
         STANDARD_FEILD: 'SF',
         CUSTOMIZED_FIELD: 'CF',
         TYPE_STRING: "String",
         TYPE_DATE: "Date",
         TYPE_DATETIME: "DateTime",
         TYPE_NUMBER: "Numeric"
     };

     DCS.Const.serviceCodes = ['SI','DPC','TK','PAS','AS',
                         'CHB','BS', 'OTH','IAN'];
     DCS.Const.OperationType = {
		ReceiveTypeCode : "RTD",
		ShippingTypeCode : "STD",
		SalesChannelCode : "SCN"
	};
		/**
	 * All edi capability service codes
	 */
	DCS.Const.EdiImplServices = {
		BOOKING_WITH_CARRIER : 'BS',
		BRACK : 'BRACK',
		BRBC : 'BC',
		SHIPPING_INSTRUCTION : 'SI',
		SIACK : 'SIACK',
		VGM : 'VGM',
		VGMACK : 'VGMACK'
	};

    DCS.Const.BLType = {
        House : 'House',
        ExpressHBL : 'ExpressHBL',
        Original : 'Original',
        SeaWayBill : 'SeaWayBill'
	};
	DCS.Const.actionLogType = {
		chargeActionLog : 'Charge',
		costActionLog : 'Cost'
	};
	DCS.Const.DpcBaseOn = [['', ''], ['ORT', 'Order Received Time'], ['GIT', 'Gate In Time']];
	DCS.Const.PasBaseOn = [['', ''], ['ORT', 'Order Received Time'], ['ETA', 'ETA']];
	DCS.Const.gateInTime = {
		day : 'GIS-days',
		hour : 'GIS-hours',
		minute : 'GIS-minutes'
	};
	DCS.Const.gateOutTime = {
		day : 'GOS-days',
		hour : 'GOS-hours',
		minute : 'GOS-minutes'
	};
	DCS.Const.EdiServiceTitles = {
		TK: 'Transportation',
		PAS: 'Gate In & Storage',
		WH : 'Warehouse Work Order',
		DPC : 'Gate Out',
		BC : 'Booking with Carrier',
		SI : 'Shipping Instructions',
		CD : 'Customs Declaration / Clearance',
		OTH : 'Other Service',
		IAN: 'Arrival Handling'
	};
	DCS.Const.TransLoadingType = [
		['FCL','FCL'],
		['LCL','LCL'],
		['FTL','FTL'],
		['LTL','LTL'],
		['FWL','FWL'],
		['LWL','LWL']
	];
	DCS.Const.SPRuleDimensions = [
		['intTransMode',"Int'l Trans. Mode"],
		['transMode','Trans. Mode (Transportation service)'],
		['loadingType','Loading Type'],
		['intTrafficMode',"Int'l Traffic Mode"],
		['trafficMode','Traffic Mode (Transportation service)'],
		['pol','POL'],
		['pod','POD'],
		['por','Carrier POR'],
		['fnd','Carrier FND'],
		['exeOffice','Execution Office'],
		['cargoNature','Cargo Nature'],
		['pickupPoint','Pickup Point'],
		['deliveryPoint','Delivery Point'],
		['destination','OLL FND'],
		['bizOrderType','Customer Biz Type'],
		['partyCode', 'Party Code'],
		['partyName', 'Party Name'],
		['partyType', 'Party Type']
		];
	DCS.Const.SPRuleOperator = [
		['IN','is equal to'],
		['NIN','is not equal to']
		];

	DCS.Const.SysOwner = {
	    CW: "PDCS",
	    NVO: "POCS",
	    DCS: "DMP3PL"
	};
	DCS.Const.UserType = {
	    CSV: "Internal", // CSV is Internal user.
	    CW: "Customer",
	    SP: "SP"
	};

	DCS.Const.UserTypeArray = [["", ""],[DCS.Const.UserType.CSV, 'Internal'], [DCS.Const.UserType.CW, 'Customer'], [DCS.Const.UserType.SP, 'Service Provider']];
	DCS.Const.emptyValueWarning = "This field is required";
	DCS.Const.invalidEmailWarning = "Invalid email address format.";

    /**
     *@see NSCoreBiz#setCuzFieldEditorByType and NSCoreBiz#setCargoColumns
     * maxLength for Number field will be 10, so set maxLength for Number field will not work.
     * the default maxLength will be 300
     */
	DCS.Const.itemMaxLength = {
        htsCode: 20,
        itemDescRef : 300,
        barcode : 150,
        blNo : 255,
        color : 50,
        countryCode : 150,
        itemSize : 150,
        lotNo : 150,
        poNo : 150,
        soNo : 150,
        fwBl : 150,
        bookingRequestNo : 150,
        poVendor : 150,
        preAdviceNo : 150,
        carrierBookingNo : 150,
        packsUom : 150,
        unitsUom : 150,
        fnd : 150
    };
    DCS.Const.itemConfig = {
        htsCode: {
            maxLength: 20,
            regex: /^[\d.]*$/,
            regexText: "Invalid value format. Only numbers and '.' are allowed."
        }
    };
    // set maxLength
    (function(conf, maxL) {
        for (var i in maxL) {
            if (maxL.hasOwnProperty(i)) {
                conf[i] = conf[i] || {};
                conf[i].maxLength = maxL[i];
            }
        }
    })(DCS.Const.itemConfig, DCS.Const.itemMaxLength);

    DCS.Const.ProfileStatus = {ACTIVE : "A", INACTIVE : "I"};

    DCS.Const.ProfileStatuTitles = {ACTIVE : "Active", INACTIVE : "Inactive"};

    DCS.Const.MilestoneStatus = {
        DELAY: 'D',
        COMPLETE: 'C'
    };

    DCS.Const.MilestoneType = {
        CARRIER : 'CARRIER',
        SERVICE: 'SERVICE',
        CUSTOMIZED : 'CUSTOMIZED'
    };

    DCS.Const.CustomizedMilestonePrefix = 'Customized Milestone';

    DCS.Const.YesOrNo = {
        Y: 'Yes',
        N: 'No'
    };


    DCS.Const.BaseDate = {
        ORD : 'ORD',
        GID : 'GID',
        GOD : 'GOD',
        PUP : 'PUP',
        DYP : 'DYP',
        POL : 'POL',
        POD : 'POD',
        ETA : 'ETA',
        FND : 'FND'
    };

    DCS.Const.ExcelType = {
        MapType : 'M',
        DefaultType : 'D'
    };

    DCS.Const.SVOCopySetting="SVO_CopySetting";

    DCS.Const.MaxAmount = {
        DCS: 'DCS_MAX_CHARGE',
        OCS: 'OCS_MAX_CHARGE'
    };

    DCS.Const.Currency = {
        USD: 'USD'
    };

    DCS.Const.InstanceId = {
    	SVOSearchSetting: 'SVO_SearchSetting',
    	SVRSearchSetting: 'SVR_SearchSetting',
    	SVOChargeSetting: 'SVO_ChargeSetting',
    	SVOCostSetting:'SVO_CostSetting',
    	SVRCostSetting:'SVR_CostSetting',
    	BatchApproveCostSetting:'BatchApproveCost_SearchSetting',
    	ChargeSearchSetting:'Charge_SearchSetting',
    	CostSearchSetting:'Cost_SearchSetting',
        Grid: {
            CWSearchShipment: "CWSearchShipmentResult",
            SearchLTLTruckingOrder: "SearchLTLTruckingOrder",
            OCSIbShipmentList: "OCS_IB_ASL",
            OCSObShipmentList: "OCS_OB_ASL",
            OcsClpGrid: "OCSClpGrid",
            OcsClpSpnGrid: "OCSClpSpnGrid",
            OcsLclJsrSearchSpnResult: "OcsLclJsrSearchSpnResult",
            ItslogicSearchOrder: "ItslogicSearchOrder",
            OCSSOSearchResult: 'OCSSOSearchResult',
            OCSCBSearchResult: 'OCSCBSearchResult',
            OCSQtnSearchResult : 'OCSQtnSearchResult',
            OCSTariffSearchResult: 'OCSTariffSearchResult',
            DCSBatchUpdateResult: 'DCSBatchUpdateResult',
			OCSDocumentPNL: "OCSDocumentPNL",
			OCSJobOrderPNL: "OCSJobOrderPNL",
			OCSQtnRateSearchResult : 'OCSQtnRateSearchResult',
			OCSTariffSearchResult : 'OCSTariffSearchResult',
			DCSBatchUpdateMilestoneSearchSVOResult: 'DCSBatchUpdateMilestoneSearchSVOResult',
			DCSBatchUpdateMilestoneSearchSVRResult: 'DCSBatchUpdateMilestoneSearchSVRResult',
			DCSSearchMessageResult: 'DCSSearchMessageResult'
        },
        Form: {
            CWSearchShipment: "CWSearchShipmentCriteria"
        }
    };

    DCS.Const.ComponentId = {
        Grid: {
            Normal: "Customized_Grid",
            WidgetLastOrder: "WIDGET_LATEST_GRID"
        },
        Form: {
            Normal: "Customized_Form"
        }
    };

    DCS.Const.ActionLog = {
        SVO : 'SVO',
        SVR : 'SVR',
        SPN: 'SPN',
        JSR: 'JSR'
    };

    DCS.Const.Clp = {
        CLP_PREFIX: 'CLP'
    };

    DCS.Const.OcsTDLType = {
		CHKOBL : 'CHKOBL',
		ADDJCR :'ADDJCR',
		LATEJCR : 'LATEJCR',
		CHKOBL_ALL : 'CHKOBLALL',
		CHKOBL_USER : 'CHKOBLUSER',
        ADDJCR_ALL : 'ADDJCRALL',
		ADDJCR_USER : 'ADDJCRUSER',
		LATEJCR_ALL : 'LATEJCRALL',
		LATEJCR_USER : 'LATEJCRUSER'
    };

    DCS.Const.FieldGroup={
    	GENERAL:'general',
    	SHIPMENTCHARGE:'shipmentCharge',
    	TRANSPORTATION:'transportation',
    	WAREHOUSING:'warehousing',
    	ROUTING:'routing',
    	QUANTITYANDAMOUNT:'quantityAndAmount',
    	INVOICE:'invoice',
    	LOCATION:'location'
    };
    DCS.Const.bizSubUnits = {
		WHS:'WHS',
		FCL:'FCL',
		TFF:'3FF'
	};

    DCS.Const.ArApLog = {
        LogType: {
            Amendment: 'AML',
            Removed: 'RMI'
        },
        OrderType: {
            Cost: 'Cost',
            PeriodicCost: 'PeriodicCost',
            CarrierCost: 'CarrierCost',
            Charge: 'Charge',
            PeriodicCharge: 'PeriodicCharge'
        },
        ActionType: {
            Delete: 'D',
            Add: 'I',
            Update: 'U'
        }
    };
    DCS.Const.timeZone = [
        ['-11:00','GMT-11:00'],['-10:00','GMT-10:00'],['-9:00','GMT-09:00'],['-8:00','GMT-08:00'],['-7:00','GMT-07:00'], ['-6:00','GMT-06:00'],
        ['-5:00','GMT-05:00'],['-4:00','GMT-04:00'], ['-3:00','GMT-03:00'],['-2:00','GMT-02:00'],['-1:00','GMT-01:00'], ['00:00','GMT'],
        ['1:00','GMT+01:00'],['2:00','GMT+02:00'],['3:00','GMT+03:00'],['4:00','GMT+04:00'],['5:00','GMT+05:00'], ['6:00','GMT+06:00'],
        ['7:00','GMT+07:00'], ['8:00','GMT+08:00'],['9:00','GMT+09:00'],['10:00','GMT+10:00'], ['11:00','GMT+11:00'],['12:00','GMT+12:00']
      ];
    DCS.Const.scheduleTime = {
		I : [],
		D : [['0', '00:00'], ['1', '01:00'], ['2', '02:00'], ['3', '03:00'],
				['4', '04:00'], ['5', '05:00'], ['6', '06:00'], ['7', '07:00'],
				['8', '08:00'], ['9', '09:00'], ['10', '10:00'],
				['11', '11:00'], ['12', '12:00'], ['13', '13:00'],
				['14', '14:00'], ['15', '15:00'], ['16', '16:00'],
				['17', '17:00'], ['18', '18:00'], ['19', '19:00'],
				['20', '20:00'], ['21', '21:00'], ['22', '22:00'],
				['23', '23:00']],
		M : [['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'],
				['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'], ['10', '10'],
				['11', '11'], ['12', '12'], ['13', '13'], ['14', '14'],
				['15', '15'], ['16', '16'], ['17', '17'], ['18', '18'],
				['19', '19'], ['20', '20'], ['21', '21'], ['22', '22'],
				['23', '23'], ['24', '24'], ['25', '25'], ['26', '26'],
				['27', '27'], ['28', '28'], ['29', '29'], ['30', '30'], ['31', '31']],
		W : [['1', 'Sun'],['2', 'Mon'], ['3', 'Tue'], ['4', 'Wed'], ['5', 'Thu'],
				['6', 'Fri'], ['7', 'Sat']]
	};

    DCS.Const.geoCategory = {
    		Truckzone: "TKZ"
    };
    DCS.Const.dcsFieldType = {
    		ITEM: 'item',
    		ORDER: 'order',
			SVR: 'svr'
    };
    DCS.Const.postAdviceFieldsData = [['order','Service Order Level'],['svr','Service Request Level'],['item','Item Level']];

    DCS.Const.vat = {
        zeroVat: '0%'
    };

    DCS.Const.highlightPage = {
        TARIFF : 'HIGHLIGHT_TARIFF',
        NEWREPORT : 'NEWREPORT'
    };

    DCS.Const.WMSNeededFlag = {
    	GI:'GI',
    	GO:'GO'
    };

	//OCS R1.9 US6793 START
	DCS.Const.MISChargeCode = ['DTR','DVA','GST','HST','IDP','RBC','SIG','UID','UIV','VAT'];
	//OCS R1.9 US6793 END

	DCS.Const.TrafficCodes = [["FCL/FCL"], ["FCL/LCL"], ["LCL/FCL"], ["LCL/LCL"]];

	DCS.Const.UIUserType = {
        DCS : 'DCS'
    };
	DCS.Const.editSvoGeneralIds = {
			dcsBaseInfoPanel : 'dcsBaseInfoPanel',
			dcsRoutingInfoPanel : 'dcsRoutingInfoPanel',
			cargoSupplementInfoPanel : 'cargoSupplementInfoPanel',
			serviceInfoPanel : 'serviceInfoPanel',
			referencePanel : 'referencePanel',
			equipAndCargoPanel : 'equipAndCargoPanel',
			partyInfoPanel : 'partyInfoPanel',
			remarkInfoPanel : 'remarkInfoPanel',
			airPanel : 'airPanel',
			accountingInformationPanel : 'accountingInformationPanel'
    };
	DCS.Const.viewSvoGeneralIds = {
			baseInfoPanel : 'baseInfoPanel',
			TPSummaryPanel : 'TPSummaryPanel',
			routingInfoPanel : 'routingInfoPanel',
			cargoSupplementInfoPanel : 'cargoSupplementInfoPanel',
			serviceInfoPanel : 'serviceInfoPanel',
			referencePanel : 'referencePanel',
			equipAndCargoPanel : 'equipAndCargoPanel',
			partyInfoPanel : 'partyInfoPanel',
			remarkInfoPanel : 'remarkInfoPanel',
			airPanel : 'airPanel'
    };
    DCS.Const.editSpnGeneralIds = {
            dcsBaseInfoPanel : 'dcsBaseInfoPanel',
            dcsRoutingInfoPanel : 'dcsRoutingInfoPanel',
            cargoSupplementInfoPanel : 'cargoSupplementInfoPanel',
            serviceInfoPanel : 'serviceInfoPanel',
            referencePanel : 'referencePanel',
            equipAndCargoPanel : 'equipAndCargoPanel',
            partyInfoPanel : 'partyInfoPanel',
            remarkInfoPanel : 'remarkInfoPanel',
            internalRemarkInfoPanel : 'internalRemarkInfoPanel',
            externalRemarkInfoPanel : 'externalRemarkInfoPanel',
            ibRoutingInfoPanel : 'ibRoutingInfoPanel',
            obRoutingInfoPanel : 'obRoutingInfoPanel',
            ctnMovementPanel : 'ctnMovementPanel'
    };
    DCS.Const.viewSpnGeneralIds = {
            baseInfoPanel : 'baseInfoPanel',
            routingInfoPanel : 'routingInfoPanel',
            cargoSupplementInfoPanel : 'cargoSupplementInfoPanel',
            serviceInfoPanel : 'serviceInfoPanel',
            referencePanel : 'referencePanel',
            equipAndCargoPanel : 'equipAndCargoPanel',
            partyInfoPanel : 'partyInfoPanel',
            remarkInfoPanel : 'remarkInfoPanel'
    };
    DCS.Const.SPSLinkSetting="SPS_LinkSetting";
    DCS.Const.LocationSortType='PO;CI;DI;TM';
    DCS.Const.getMonthNumbers = function() {
        var monthNumbers = {
            JAN : 1,
            FEB : 2,
            MAR : 3,
            APR : 4,
            MAY : 5,
            JUN : 6,
            JUL : 7,
            AUG : 8,
            SEP : 9,
            OCT : 10,
            NOV : 11,
            DEC : 12
        };
        return monthNumbers;
    };

    DCS.Const.NoPrefix = {
        SPO : "SPO",
        SPI : "SPI",
        CB : "CB"
    };

    DCS.Const.getUserType = function(isBKS){
    	if(isBKS) {
    		return [[NSConst.UserType.CSV, 'Internal'], [NSConst.UserType.CW, 'Customer']]
    	}
    	return [[NSConst.UserType.CSV, 'Internal'], [NSConst.UserType.CW, 'Customer'], [NSConst.UserType.SP, 'Service Provider']];
    };

    DCS.Const.SvoSuppType = {
        ASSOCIATED : "A",
        EXISTED : "E",
        NOT_EXISTED : "NE",
        MATCHED : "M",
        NOT_MATCHED : "NM"
    };

	DCS.Const.MqcUom = {
		TEU: "TEU",
		FEU : "FEU"
	}
    DCS.Const.CarrierType = {
        Ocean : 'OCEAN',
        Air : 'AIR'
    };

	DCS.Const.IndustrySegment = {
		NNVO: "NVO-Non Vessel Operator",
		BBCO : "BCO-Beneficial Cargo Owner",
		OTH : "Other"
	}

	DCS.Const.ContractType = {
		AB :"AB",
		CRO : "CRO",
		CSC :"Carrier Service Contract"
	}

	DCS.Const.PaymentTerm = {
		Prepaid: "Prepaid",
		Collect : "Collect",
		ELS : "Payment elsewhere"
	}

	DCS.Const.FreightPaymentStore = [['',''],['Freight Prepaid', 'Freight Prepaid'], ['Freight Collect','Freight Collect' ]]

	DCS.Const.PlusSeCategory ={
		IN : "IN",
		OUT :"OUT"
	}

    //code, resource key, data type array
	DCS.Const.ConditionOperator = [
		['EQUAL', 'equal', ['String', 'Date', 'DateTime', 'Numeric', 'Location', 'Office', 'Boolean', 'Supporting', 'Service']],
		['NOT_EQUAL', 'doesNotEqual', ['String', 'Date', 'DateTime', 'Numeric', 'Location', 'Office', 'Boolean', 'Supporting', 'Service']],
		['IN', 'in', ['String', 'Location', 'Office', 'Supporting', 'Service']],
		['NOT_IN', 'notIn', ['String', 'Location', 'Office', 'Supporting', 'Service']],
		['GREAT_THAN', '>', ['Date', 'DateTime', 'Numeric']],
		['GREAT_THAN_OR_EQUAL', '>=', ['Date', 'DateTime', 'Numeric']],
		['LESS_THAN', '<', ['Date', 'DateTime', 'Numeric']],
		['LESS_THAN_OR_EQUAL', '<=', ['Date', 'DateTime', 'Numeric']],
		['CONTAIN', 'contain', ['String']],
		['NOT_CONTAIN', 'doesNotContain', ['String']],
		['INTERSECT', 'intersect', ['String', 'Numeric', 'Supporting', 'Service', 'Location', 'Office']],
		['NOT_INTERSECT', 'notIntersect', ['String', 'Numeric', 'Supporting', 'Location', 'Office']],
		['STARTS_WITH', 'startsWith', ['String']],
		['ENDS_WITH', 'endsWith', ['String']],
		['NOT_STARTS_WITH', 'notStartsWith', ['String']],
		['NOT_ENDS_WITH', 'notEndsWith', ['String']]
	]

    DCS.Const.ConditionFilterType = {
        SVO: 'SVO'
    }

	DCS.Const.KpiServiceType = {
		SVO: 'SVO'
	}

	DCS.Const.MilestoneDateFrameOperator = [
	    ['ADD', '+'],
	    ['SUBTRACT', '-']
	]

    DCS.Const.MilestoneSplitDimension  = [
        ['EQUIPMENT', 'equipment'],
        ['POINT', 'pointName']
    ]

    DCS.Const.DataType = {
        String: 'String',
        Date: 'Date',
        DateTime: 'DateTime',
        Numeric: 'Numeric',
        Boolean: 'Boolean',
        Supporting: 'Supporting',
        Location: 'Location',
		Office: 'Office',
		Carrier: 'Carrier',
		Service: 'Service'
    }

    DCS.Const.DocRequestCollectAT = {
        SVO: 'Service Order',
        MS: 'Milestone'
    }

    DCS.Const.CustomizedFieldType = {
        Order: 'order',
        Equipment: 'equipment',
        Milestone_System_Define: 'sysdefined',
        Milestone_System_Customized: 'syscustomized',
        Milestone_User_Customized: 'usercustomized'
    }

    DCS.Const.CustomizedFieldCaptureAt = {
        SVO: 'SVO',
        MS: 'MS'
    }

    DCS.Const.ServiceCategory = {
        OutBound: 'OUTBOUND',
        InBound: 'INBOUND',
        Hub: 'HUB',
        General: 'GENERAL'
    }

	DCS.Const.OcsContractName = {
		OUTBOUND: 'OB',
		INBOUND: 'IB'
	}

    DCS.Const.PhaseName = {
        Ocean: 'Ocean'
    }

	DCS.Const.KpiToleranceType = [
		['Numeric', 'Numeric'],
		['CustomizedField', 'Customized Field'],
	]

	DCS.Const.KpiDimension = [
		['FIRST', 'First'],
		['LAST', 'Last'],
		//['FIRST_EXPECTED', 'First (Actual)'],
		//['LAST_EXPECTED', 'Last (Expected)'],
		['ANY', 'Any'],
		['SUMMARY', 'Summary']
	]

	DCS.Const.CodeType = {
		BaseOn: 'KPI_BASE_ON',
		Condition: 'CONDITION',
		Field: 'KPI_FIELD',
		Tolerance: 'TOLERANCE',
		Dimension: 'KPI_DIMENSION'
	}

	DCS.Const.CustomizedFieldSourceType = {
		SVO_Customized: 'SVO_CUSTOMIZED_FIELD',
		SVR_Customized: 'SVR_CUSTOMIZED_FIELD',
		SVO_Item: 'SVO_ITEM',
		SVR_Item: 'SVR_ITEM'
	}

	DCS.Const.DMTPAssignToType = [
		['USER', 'User'],
		['PROVIDER', 'Service Provider']
	]

	DCS.Const.DMTPAssignToOption = {
		all: 'SYS_ALL_VALUE_STRING'
	}

	DCS.Const.CsaFeature = {
		CSA: 'CSA'
	}

	DCS.Const.CsaFeature = {
		CSA: 'CSA'
	}

	DCS.Const.CsaConstants = {
	    NEW_CSA :'NEW CSA',
	    SAVE_CSA:'SAVE CSA',
	    APPROVE_CSA:'APPROVE CSA'
	}

	DCS.Const.RoleName = {
		OCS_SALES: 'OPLUS Sales',
		DCS_SALES: 'Sales'
	}

	DCS.Const.PostMessageType = {
		DomReady: 'DomReady',
		BrCreated: 'BrCreated'
	};

	DCS.Const.ExtMsgBtnIds = {
		Yes : 'yes',
		No : 'no',
		OK : 'ok',
		Cancel : 'cancel'
	};

	DCS.Const.docmap = {'.doc': 'doc_icon.png','.DOC': 'doc_icon.png','.docx': 'doc_icon.png','.DOCX': 'doc_icon.png','.dotx': 'doc_icon.png',
		  			       '.xls': 'xls_icon.png','.xlsx': 'xls_icon.png','.XLS': 'xls_icon.png','.XLSX': 'xls_icon.png','.xlsm': 'xls_icon.png',
		  			        '.msg': 'message.png','.ppt': 'ppt_icon.png',
		  			        '.txt': 'txt_icon.png','.TXT': 'txt_icon.png',
		  			        '.jpg': 'photo_scenery.png', '.JPG': 'photo_scenery.png', '.gif': 'photo_scenery.png', '.GIF': 'photo_scenery.png',
		  			        '.tif': 'photo_scenery.png','.TIF': 'photo_scenery.png','.png': 'photo_scenery.png','.bmp': 'photo_scenery.png',
		  			        '.bmp': 'photo_scenery.png',
		  			       '.rar': 'rar_icon.png','.zip': 'rar_icon.png','.7z': 'rar_icon.png',
		  			       '.htm': 'html_icon.png','.HTM': 'html_icon.png',
		  			       '.PDF': 'pdf_icon.png','.pdf': 'pdf_icon.png',
		  			       'default':'default_document.png'};
    DCS.Const.ARAPHeader = {
    		'svr' : 'SERVICE_REQUEST' , 'cb' : 'CARRIER_BOOKING'
    };

	DCS.Const.print_quotation = {
		both: 'BOTH',
		fcl: 'FCL',
		lcl: 'LCL'
	};

	DCS.Const.print_quotation_display_list = {
		fclList: ['origin', 'destination', 'transhipmentPort', 'paymentTerms', 'currency', 'cargoNatures',
			'trafficModes', 'LIST', 'subjectTo', 'inclusive', 'allIn', 'carrier', 'effectiveFrom', 'effectiveTo', 'remark'],
		lclList: ['origin', 'paymentTerms', 'currency', 'trafficModes', 'LIST', 'inclusive', 'subjectTo',
			'min', 'effectiveFrom', 'effectiveTo', 'remark'],
		addOnList: ['destination', 'pod', 'cbm', 'min', 'effectiveFrom', 'effectiveTo', 'remark'],
		fclSurchargeList: ['applyAt', 'chargeName', 'chargeCode', 'paymentTerms', 'manifest', 'optional', 'chargeUnit',
			'currency', 'containerSizeType', 'unitPrice', 'min', 'effectiveFrom', 'effectiveTo', 'remark'],
		lclSurchargeList: ['applyAt', 'chargeName', 'chargeCode', 'paymentTerms', 'manifest', 'optional', 'chargeUnit',
			'currency', 'unitPrice', 'min', 'effectiveFrom', 'effectiveTo', 'remark'],
		plusList: ['ios', 'serviceType', 'origin', 'destination', 'chargeName', 'chargeCode', 'manifest',
			'paymentTerms', 'optional', 'chargeUnit', 'currency', 'unitPrice', 'min', 'effectiveFrom', 'effectiveTo', 'remark']
	};

	DCS.Const.zipPrefix = {
		SVO: 'SVO_Document_',
		SVR: 'SVR_Document_',
		SPN: 'SPN_Document_',
		CW: 'CW_Document_',
		BTACH_MS: 'Batch_Update_MS_Document_',
		CB: 'CB_Document_',
		CC: 'CustomerContract_Document_'
	};

	DCS.Const.contractType = {
		CSA: 'CSA',
		QTN: 'QUOTATION'
	};

    DCS.Const.MessageChannel = {
        Email: 'EMAIL',
        DMTP: 'DMTP'
    };

    DCS.Const.SearchPanel = {
    	BATCH_UPDATE_MS : 'batchMsSearch',
    	CARRIER_BOOKING : 'carrierBooking',
    	DMTP_LOG : 'dmtpLog',
    	SEARCH_SVO : 'searchSvo',
    	SEARCH_SPN : 'searchSpn',
    	SEARCH_SVR : 'searchSvr',
    	SEARCH_JSR : 'searchJsr',
    	SEARCH_MESSAGE : 'searchMsg'
    };

    DCS.Const.CustomizedViewType = {
        DCS_MS_SVO: 'DCS_MS_SVO_VIEW',
        DCS_MS_SVR: 'DCS_MS_SVR_VIEW',
        CTW_MS_ORDER_SVO: 'CTW_MS_ORDER_SVO_VIEW',
        CTW_MS_ORDER_SVR: 'CTW_MS_ORDER_SVR_VIEW'
    };
})();

(function(){
	if(!DCS.Common){
		DCS.Common = {};
	}

	if(!DCS.UIConfig){
		DCS.UIConfig = {};
	}

	if(!DCS.SysConf){
		DCS.SysConf = {};
	}

	if(!DCS.Session){
		DCS.Session = {};
	}

	if(!DCS.Renderer){
		DCS.Renderer = {};
	}

	if (!DCS.Reference) {
		DCS.Reference = {};
	}

	if (!DCS.Supp) {
		DCS.Supp = {};
	}

	if(!DCS.OCS) {
	    DCS.OCS = {};
	}

	if (!DCS.Navigation) {
		DCS.Navigation = {};
	}

    if(!DCS.Http){
        DCS.Http = {};
    }

	DCS.Renderer.dateFormat = 'm/d/Y';

	DCS.Renderer.defaultDateFormat = 'm/d/Y';

	DCS.Renderer.timeFormat = 'g:i A';

	DCS.Renderer.defaultTimeFormat = 'H:i:s';

	DCS.Renderer.defaultTimeHIFormat = 'H:i';

	DCS.Renderer.defaultDateTimeHIFormat = 'm/d/Y H:i';

	DCS.Renderer.defaultDateTimeFormat = 'm/d/Y H:i:s';

	DCS.UIConfig.OCS = 'NVO';
    DCS.UIConfig.DCS = 'DCS';
    DCS.UIConfig.BKS = 'BKS';
    DCS.UIConfig.CTW = 'CTW';

    DCS.Common.formatDate = function(date,fmt){
        var o = {
            "m+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "H+": date.getHours(), //小时
            "i+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + ""));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, ("" + o[k]).length === 1 ? "0" + o[k] : o[k]);
        return fmt;
    }

    DCS.Common.wrapDateTo = function(oDate) {
    	if (!oDate || toString.call(oDate) !== '[object Date]') {
    		return null;
    	}
    	var returnVal = new Date(oDate);
    	returnVal.setHours(23);
    	returnVal.setMinutes(59);
    	returnVal.setSeconds(59);
    	return returnVal;
    }

    DCS.Common.isEmpty = function(v){
        if(v === null || v === undefined || v === ''){
            return true
        }
        if(v instanceof Array && v.length === 0){
            return true
        }
        if(v instanceof Object && JSON.stringify(v) === '{}'){
            return true
        }
        return false
    }

    DCS.Common.decodeStringToObj = function(string,overwrite){
        var obj = {},
            pairs = string.split('&'),
            name,
            value;
        pairs && pairs.forEach(function(pair) {
            pair = pair.split('=');
            name = decodeURIComponent(pair[0]);
            value = decodeURIComponent(pair[1]);
            obj[name] = overwrite || !obj[name] ? value :
                        [].concat(obj[name]).concat(value);
        });
        return obj;
    }

	DCS.Common.decodeParams=function(url){
			if(!url ||  url== null)
						return null;
			var locs = url;
			var locHash = null;
			var firstP = locs.indexOf('?');
			if(firstP > -1){
					locs = locs.substring(firstP+1);
			}
			firstP = locs.indexOf('#');
			if(firstP > -1){
						locHash = locs.substring(firstP+1);
						locs = locs.substring(0,firstP);
			}
			var urlParams = DCS.Common.decodeStringToObj(locs);
			if(locHash != null)
					urlParams.locationHash = locHash;
			return urlParams;
	};

	DCS.Common.getApplicationContext = function() {
		var curUser=DCS.Session.getCurrentUser();
		if(curUser){
			return {
				userId : curUser.userId
			};
		} else {
		    return {
		        userId : ''
		    };
		}
	};

    DCS.Common.hanldeContext = function(realm){
        DCS.UIConfig.userType = realm;
        if(!realm){
            realm = DCS.UIConfig.DCS; //in case of cannot use at all
        }
        if (realm == DCS.UIConfig.OCS) {
            var modifyData = DCS.SysConf.NVO_SUPPORTING_DATA_MODIFY || [];
            for (var i = 0; i < modifyData.length; i++) {
                DCS.Scodes.modifyData(DCS.UIConfig.OCS + '_' + modifyData[i], modifyData[i]);
            }
        }
        if (realm == DCS.UIConfig.BKS) {
            var modifyData = DCS.SysConf.BKS_SUPPORTING_DATA_MODIFY || [];
            for (var i = 0; i < modifyData.length; i++) {
                DCS.Scodes.modifyData(DCS.UIConfig.BKS + '_' + modifyData[i], modifyData[i]);
            }
        }
    };

    DCS.Common.initSessionTimeSetting = function() {
        var state = window.history.state;
        if (state) {
            if (typeof state.needUpdateSTO === 'undefined') { //page refresh
                document.cookie = "hasTimeout=false; path=/dmpod";
            }
        } else {
            document.cookie = "hasTimeout=false; path=/dmpod"; //first enter
            document.cookie = "stoDirect=false; path=/dmpod"; //first enter
        }
        //DE8157 session time out for page refresh.
        window.onunload = function() {
            var stateObj = { needUpdateSTO: "11" };
            if (typeof window.history.pushState === 'function') {
                window.history.pushState(stateObj, "", "");
            }
        };
    };

    DCS.Common.getCookieValue = function(key) {
        if(!key){
            return ''
        }
        var strCookie = document.cookie;
        if(strCookie && strCookie.toString().length > 0){
            var arrCookie = strCookie.split(DCS.Const.Cookie.SEPARATOR);
            for (var i = 0; i < arrCookie.length; i++) {
               var keyValue = arrCookie[i];
               var index = keyValue.indexOf('=');
               if (key == keyValue.substring(0, index)) {
                   return keyValue.substring(index + 1);
               }
            }
        }else{
            return '';
        }
    };
    DCS.Common.DCSTimeLeft = function (frmEnv){
        var lastAccessTime = getCookie(frmEnv + '_' + DCS.Const.Cookie.LAST_ACCESS_TIME);
        return new Date().getTime() - lastAccessTime;
    };
    DCS.Common.isSessionTimeOut = function() {
        var clientCurrentTime = new Date().getTime();
        var lastAccessTime = DCS.Common.getCookieValue(environmentID + '_' + DCS.Const.Cookie.LAST_ACCESS_TIME);
        if(DCS.Common.isEmpty(lastAccessTime)) {
            return false;
        }

        var getTimeLeftM = DCS.Common.DCSTimeLeft;
        var left = getTimeLeftM(environmentID);
        var interval = left / (60*1000);   //convert millisecond to minute
        var preDefTime = STOTime;
        if(typeof STOTime === 'undefined') {
            preDefTime = "30";
        }
        return interval > parseInt(preDefTime, 10);
    };
    DCS.Session.getUserActiveAccessibleOffice = function(addEmpty){
    	var userOffice = [];
    	var curUser = DCS.Session.getCurrentUser();
    	if (curUser) {
    		if (curUser.canAccessAllOffice){
    			var all = DCS.Scodes.OFFICES();
    			 all.forEach(function(item){
    				if (item[2] === true) {
    					userOffice.push(item);
    				}
    			});
    		} else if (curUser.offices && curUser.offices.length > 0) {
    			for (var i = 0; i < curUser.offices.length; i++) {
    				DCS.Scodes.OFFICES().forEach(function(data) {
							if (data[0] == curUser.offices[i] && data[2] === true) { //active
								userOffice.push(data);
							}
						});
    			}
    		}
    	}
    	if (addEmpty && userOffice.length > 0 && userOffice[0][0] != '') {
    		userOffice.unshift(['','']);
    	}
    	return userOffice;
    };

	DCS.Session.getCurrentUser = function(){
			var _dcsUser = window['dcsUser'];
			if(!_dcsUser || _dcsUser == null){
				return {};
			}
			return _dcsUser;
	};

    DCS.Session.getUserType = function() {
        var currentUser = DCS.Session.getCurrentUser();
        return currentUser.userType;
    };

    DCS.Session.isDCS = function() {
        return DCS.UIConfig.userType == DCS.UIConfig.DCS;
    };

    DCS.Session.isBKS = function() {
        return DCS.UIConfig.userType == DCS.UIConfig.BKS;
    };

    DCS.Session.isNVO = function() {
        return DCS.UIConfig.userType == DCS.UIConfig.OCS;
    };

    DCS.Session.isCTW = function() {
        return DCS.UIConfig.userType == DCS.UIConfig.CTW;
    };

    DCS.Session.isDCSOrCTW = function() {
        return DCS.UIConfig.userType == DCS.UIConfig.DCS || DCS.UIConfig.userType == DCS.UIConfig.CTW;
    };

    DCS.Session.isDCSOrOCS = function() {
        return DCS.UIConfig.userType == DCS.UIConfig.DCS || DCS.UIConfig.userType == DCS.UIConfig.OCS;
    };

	DCS.Session.isCTWOrOCS = function() {
        return DCS.UIConfig.userType == DCS.UIConfig.CTW || DCS.UIConfig.userType == DCS.UIConfig.OCS;
    };

    DCS.Session.isSP = function() {
        return DCS.Session.getUserType() == DCS.Const.UserType.SP;
    };

    DCS.Session.isInternalUser = function() {
        return DCS.Session.getUserType() == DCS.Const.UserType.CSV;
    };

    DCS.Session.isCustomerUser = function() {
        return DCS.Session.getUserType() == DCS.Const.UserType.CW;
    };
    DCS.Session.isGranted = function(code){
                var user = DCS.Session.getCurrentUser();
                if(user.allPermissions && user.allPermissions.length > 0){
                            var aps = user.allPermissions;
                            for(var i = 0; i < aps.length; i++){
                                    if(aps[i] == code)
                                            return true;
                            }
                }
                return false;
    };
    DCS.Session.isOCS = function(){
        if (DCS.UIConfig.userType == NSUIConf.OCS) {
            return true;
        }
        return false;
    };
	/**
	 * Get user personal date display format.
	 * eg: 'm/d/Y' is used for data 12/31/2014; 'd/m/Y' is used for data 31/12/2014
	 * @return {string} the required format
	 */
	DCS.Renderer.personalDateFormat = function () {
		var dateFormatKey = DCS.Session.getCurrentUser().dateFormat;
		var extFormat = DCS.Scodes.getRender(DCS.Scodes.CodeType.DATEFORMAT)(dateFormatKey);
		if (!extFormat) {
			extFormat = DCS.Renderer.defaultDateFormat;
		}
		return extFormat;
	};

	/**
	 * date-format-lite
	 * https://www.npmjs.com/package/date-format-lite
	*/
	DCS.Renderer.vuePersonalDateTimeFormat = function() {
		var units = [['Y', 'YYYY'], ['d', 'DD'], ['m', 'MM'], ['H', 'h'], ['i', 'mm'], ['s','ss']];
		var result = DCS.Renderer.personalDateTimeFormat();
		units.forEach(function(unit) {
			result = result.replace(unit[0], unit[1]);
		});
		return result;
	}

	/**
	 * date-format-lite
	 * https://www.npmjs.com/package/date-format-lite
	*/
	DCS.Renderer.vuePersonalDateFormat = function() {
		var units = [['Y', 'YYYY'], ['d', 'DD'], ['m', 'MM']];
		var result = DCS.Renderer.personalDateFormat();
		units.forEach(function(unit) {
			result = result.replace(unit[0], unit[1]);
		});
		return result;
	}

	DCS.Renderer.getDocumentType = function(value) {
		var docs = DCS.Supp.getDocTypes();
		if (DCS.Session.isCTW() && DCS.Scodes.data('DOC_TYPE', false)) {
		    docs = DCS.Scodes.data('DOC_TYPE', false);
		}
		for (var i = 0; i < docs.length; i++) {
			if (value == docs[i][0]) {
				return docs[i][1];
			}
		}
		return value;
	}

	DCS.Supp.getDocTypes = function (){
        var other = ['OTHERS','Others'];
        var types = [['','']];
        Array.prototype.forEach.call(DCS.Scodes.DOCS(),function(type){
            if (type.co != 'OTHERS'){
                types.push([type.co, type.na]);
            }
        });
        types.push(other);
        return types;
    };

	/**
	 * Get user personal date time display format.
	 * eg: 'm/d/Y H:i:s' is used for data 12/31/2014 23:59:59 ; 'd/m/Y H:i:s' is used for data 31/12/2014 23:59:59
	 *
	 * @param {value}
	 * @return {string} the required format
	 * @public
	 * @static
	 * @function
	 */
	DCS.Renderer.personalDateTimeFormat = function () {
		return DCS.Renderer.personalDateFormat() + " " + DCS.Renderer.defaultTimeFormat;
	};

    DCS.Renderer.generateDateRenderer = function (format) {
        return function(value){
            if (!value) {
                return "";
            }
            if (toString.call(value) !== '[object Date]') {
                value = new Date(Date.parse(value));
            }
            return DCS.Common.formatDate(value, format || 'm/d/Y');
        };
    }

	DCS.Renderer.dateRenderer = function (value) {
		if (value && !value.getDate) {
			value = new Date(Date.parse(value.replace(/-/g, "/")));
		}
		return DCS.Renderer.generateDateRenderer(DCS.Renderer.personalDateFormat())(value);
	};

	DCS.Renderer.dateTimeRenderer = function (value) {
		if (value && !value.getDate && !(typeof value === 'number' && isFinite(value))) {
			value = new Date(Date.parse(value.replace(/-/g, "/")));
		}
		return DCS.Renderer.generateDateRenderer(DCS.Renderer.personalDateTimeFormat())(value);
	};

	DCS.Reference.getDisplayName = function(fieldKey, fieldName) {
        if (!fieldKey) {
            fieldKey = fieldName;
        }
        if (!fieldKey) {
            return '';
        }
        var result = DCS.Scodes.getRenders('ALLSRT')(fieldKey);
        if (result && result != fieldKey) {
            return result;
        }
        result = Resource.getLabel(fieldKey);
        if (result && result != fieldKey) {
            return result;
        }
        return fieldKey;
	}

    DCS.OCS.isOCS = function(){
        if (NSUIConf.userType == NSUIConf.OCS) {
            return true;
        }
        return false;
    };

	DCS.Http.encodeParams = function(obj) {
		if (DCS.Common.isEmpty(obj)) return '';
		var params = [];
		for(var key in obj) {
			params.push(key + '=' + encodeURIComponent(obj[key]));
		}
		return params.join('&');
	};
	DCS.Http.navigate = function(url, params) {
		params = params || {};
		var pstr = DCS.Http.encodeParams(params);
		if (!pstr) {
		    if (url.indexOf("?") > -1) {
		        url = url + '&' + pstr;
		    } else {
		        url = url + '?' + pstr;
		    }
		}
		window.location.href = url;
	};
	DCS.Navigation.loginPage = function(params) {
		DCS.Http.navigate("/dmpod/", params);
	};
    DCS.Navigation.editSPNAssignToRule = function(oid, params) {
        var p = params || {};
        p.action = DCS.Const.PageAction.Edit;
        var url = "/dmpod/app/vue/editSPNRule.jsf?oid=" + oid;
        if (!DCS.Common.isEmpty(p)) {
            url = url + "&" + DCS.Http.encodeParams(p);
        }
        return url;
    };
    DCS.Navigation.viewSPNAssignToRule = function(oid, params) {
        var p = params || {};
        p.action = DCS.Const.PageAction.View;
        var url = "/dmpod/app/vue/editSPNRule.jsf?oid=" + oid;
        if (!DCS.Common.isEmpty(p)) {
            url = url + "&" + DCS.Http.encodeParams(p);
        }
        return url;
    };
	DCS.Navigation.backToSPNAssignToRule = function() {
		var url = "/dmpod/app/vue/searchSPNRule.jsf?back=true";
		return url;
	};
    DCS.Navigation.editDMTPLUTable = function(oid, params) {
        var p = params || {};
        p.action = DCS.Const.PageAction.Edit;
        var url = "/dmpod/app/vue/editLookup.jsf?oid=" + oid;
        if (!DCS.Common.isEmpty(p)) {
            url = url + "&" + DCS.Http.encodeParams(p);
        }
        return url;
    };
    DCS.Navigation.viewDMTPLUTable = function(oid, params) {
        var p = params || {};
        p.action = DCS.Const.PageAction.View;
        var url = "/dmpod/app/vue/editLookup.jsf?oid=" + oid;
        if (!DCS.Common.isEmpty(p)) {
            url = url + "&" + DCS.Http.encodeParams(p);
        }
        return url;
    };
	DCS.Navigation.backToDMTPLUTable = function() {
		var url = "/dmpod/app/vue/searchLookup.jsf?back=true";
		return url;
	};

})();



var NSConst = DCS.Const;
var PermissionConstants = DCS.Const.Permissions;
var NSInstanceId = DCS.Const.InstanceId;
var NSComponentId = DCS.Const.ComponentId;
var NSCommon = DCS.Common;
var NSSession = DCS.Session;
var NSOCS = DCS.OCS;
