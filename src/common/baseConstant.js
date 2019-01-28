export default {
  CONTAINER_STATUS_LCL: 'LCL',
  CONTAINER_STATUS_FCL: 'FCL',
  OOCL_BL_PATTERN: /^OOLU\d{10}$/,
  MOL_BL_PATTERN: /^(MOLU)?\d{1,}$/,
  HAULIER_OOCL: 'OOCL',
  HAULIER_SNL: 'SNL',
  HAULIER_KL: 'KL',
  HAULIER_CMA: 'CMA',
  HAULIER_HASCO: 'HASCO',
  HAULIER_APL: 'APL',
  HAULIER_HMM: 'HMM',
  HAULIER_WHL: 'WHL',
  HAULIER_EVG: 'EVG',
  HAULIER_MOL: 'MOL',

  BK_BLTYPE_S: 'S',
  BK_BLTYPE_M: 'M',
  BK_BLTYPE_O: 'O',
  BK_BLTYPE_T: 'T',

  // br status
  BK_STATUS_Draft: 'Draft', // 未提交
  BK_STATUS_Submit: 'Submit', // 已提交
  BK_STATUS_Approving: 'Approving', // 提交待审核
  BK_STATUS_Failed: 'Failed', // 审核未通过
  BK_STATUS_Pending: 'Pending', // 待处理
  BK_STATUS_Sent: 'Sent', // 已发送给船公司
  BK_STATUS_CAccept: 'CAccept', // 船公司已同意
  BK_STATUS_CPartiallyAccept: 'CPartiallyAccept', // 船公司部分同意
  BK_STATUS_CReject: 'CReject', // 船公司已拒绝
  BK_STATUS_Cancelling: 'Cancelling', // 申请退关
  BK_STATUS_Cancelled: 'Cancelled', // 已退关
  BK_STATUS_CCancelling: 'CCancelling', // 取消订舱中
  BK_STATUS_CCancelled: 'CCancelled', // 船公司已取消
  BK_STATUS_CarrierReceived: 'CarrierReceived', // 船公司已收到
  BK_STATUS_PlatformReceived: 'PlatformReceived', // 平台已收到
  BK_STATUS_CCarrierReceived: 'CCarrierReceived', // 船公司收到取消
  BK_STATUS_CPlatformReceived: 'CPlatformReceived', // 平台收到取消

  BK_MOVEMENT_HR: 'HR',

  SI_STATUS_Cancelled: 'Cancelled',
  SI_STATUS_Draft: 'Draft',
  SI_STATUS_Sent: 'Sent',
  SI_STATUS_Submit: 'Submit',

  USERTYPE_Internal: 'Internal',

  FILE_CHANNEL_CS: 'CS',
  FILE_CHANNEL_FTP: 'FTP',
  FILE_CHANNEL_EMAIL: 'EMAIL',
  FILE_CHANNEL_MANUAL: 'Manual',
  FILE_CHANNEL_GTN: 'GTN',
  FILE_CHANNEL_CUSEMAIL: 'CUSEMAIL',

  exceptionType: {
    error: 'ERROR'
  },

  sourceCodeMapping: {
    contsVentilations: 'BVST',
    contsSizeType: 'BEST',
    contsPackUnit: 'BPGT',
    contsBizGroup: 'BBZG',
    contsTrafficMode: 'BMMT',
    contsBlType: 'BBLT',
    contsFreight: 'PST',
    contsCargoNature: 'BCAT',
    contsShipperType: 'BSPT',
    hauliers: 'haulier',
    country: 'country',
    office: 'BKS_offices'
  },
  // page url
  URL_SEARCHSS: '/dmpod/app/booking/SearchSS.jsf',
  URL_NEWBOOKING: '/dmpod/app/booking/NewBooking.jsf',
  URL_SEARCHBOOKING: '/dmpod/app/booking/SearchBooking.jsf',
  URL_VIEWBOOKING: '/dmpod/app/booking/PreviewBooking.jsf',
  URL_BATCHJOINBOOKING: '/dmpod/app/booking/BatchJoinBooking.jsf',
  URL_NEWSI: '/dmpod/app/si/NewSI.jsf',
  URL_SEARCHSI: '/dmpod/app/si/SearchSI.jsf',
  URL_VIEWSI: '/dmpod/app/si/ViewSI.jsf',
  URL_DOWNLOAD_SI_EXCEL_TMP: '/dmpod/downloadFile',
  URL_LOGIN: '/dmpod/',
  SI_EXCEL_TMP_NAME: 'SI Excel Upload Template (Booking Agent).xlsm',
  PASTE_CONTAINER_DETAIL_TEMPLATE_NAME: 'PasteContainerDetail.xls',
  memail: /^\s*\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*(\;\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*(\;)*\s*$/,
  NOT_SPECIAL_CHAR: /[^！—【】、：；？》《，。“”‘’]/g,
  printPluginName: 'printPlugin',

  LOG_BR_NOTE: '$$brNoteLog',
  LOG_SI_NOTE: '$$siNoteLog',
  ORDER_TYPE_BR: 'BR',
  ORDER_TYPE_SI: 'SI',
  ORDER_TYPE_VGM: 'VGM',
  MSG_CHANNEL_MANUAL: 'Manual',
  VALIDATE_SUCCESS: 'SUCCESS',
  COMPONENT_NORMAL: 'BK_Customized_Grid',
  INSTANCE_ID: {
    BKSearch: 'BK_SearchSetting',
    SICreate: 'SI_CreateSetting',
    SISearch: 'SI_SearchSetting'
  },
  BK_G: {
    basicInfo: 'basicInfo',
    contactInfo: 'contactInfo',
    shipsInfo: 'shipsInfo',
    localeInfo: 'localeInfo',
    cargoInfo: 'cargoInfo',
    otherInfo: 'otherInfo',
    containerInfo: 'containerInfo',
    siInfo: 'siInfo'
  },
  SI_G: {
    basicInfo: 'basicInfo',
    contactInfo: 'contactInfo',
    shipsInfo: 'shipsInfo',
    localeInfo: 'localeInfo',
    containerCargo: 'containerCargo',
    vgm: 'vgm',
    otherInfo: 'otherInfo'
  },
  EXPORT_TYPE: {
    order: 'EXPORT_BK_ORDER',
    container: 'EXPORT_BK_CONTAINER',
    vesselVoyage: 'EXPORT_BK_VESSEL_VOYAGE'
  },

  // Awkward_Dangerous, Dangerous, Reefer_Dangerous
  DANGEROUS_CARGO: [
    'AD', 'DG', 'RD'
  ],

  DISPATCH_ACTION_TYPE: {
    ACTION_CANCEL: 'CANCEL',
    ACTION_NEW: 'NEW',
    ACTION_UPDATE: 'UPDATE'
  },
  LOCATION_TYPE: {
    city: 'CI',
    port: 'PO'
  },
  BKS_POSITION_INTEGRATION: {
    por: {
      name: 'porName',
      handler: 'selectPor'
    },
    pol: {
      name: 'polName',
      handler: 'selectPol'
    },
    pod: {
      name: 'podName',
      handler: 'selectPod'
    },
    fnd: {
      name: 'fndName',
      handler: 'selectFnd'
    }
  },
  ORDER_SOURCE: {
    CTW: 'CTW_MANUAL',
    DCS: 'DCS_MANUAL',
    NVO: 'OCS_MANUAL',
    ICS: 'ICS_MANUAL'
  },
  POST_MESSAGE_TYPE: {
    DomReady: 'DomReady',
    BrCreated: 'BrCreated'
  },
  CREATE_BR_RESULT: {
    OCS_RESPONSE_SUCCESS: 'Success.'
  },
  MESSAGE_TYPE: {
    PMF: 'PMF',
    BR: 'BR',
    BRVGM: 'BRVGM'
  },
  PARTY_TYPE: {
    shipper: 'VDR',
    consignee: 'CSN',
    notifyParty: 'PY1'
  },
  LANG_TYPE: {
    en_US: 'en-US',
    zh_CN: 'zh-CN'
  },
  mulLang: ['BBKS', 'BCCS', 'BWGT', 'BKVM', 'BSIS', 'BCCT', 'BSSIS', 'BCNS', 'BPSS', 'BPMS', 'BMSS', 'BMPS', 'BKLOG']
}
