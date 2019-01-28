const baseUrl = '/dmpod/app/booking/vue/'
export default {
  compType: {
    TimePicker: 'TimePicker',
    DatePicker: 'DatePicker',
    InputNumber: 'InputNumber',
    Input: 'Input',
    Select: 'Select',
    Checkbox: 'Checkbox',
    BSelect: 'BSelect',
    LocationInput: 'LocationInput',
    MappingTableInput: 'MappingTableInput',
    TypeSizeInput: 'TypeSizeInput'
  },
  URL_LOGIN: '/dmpod/',
  templateUrl: '/home/dmpodapp/dmpodshare/BKS/Template',
  requiredRule: '{"required":true,"message":"can not be empty","trigger":"blur"}',
  yn: [{ code: true, label: 'Y' }, { code: false, label: 'N' }],
  URL_EDITMESSAGECONFIG: baseUrl + 'editMessageConfig.jsf',
  URL_EDITMAPPINGTABLE: baseUrl + 'editMappingTable.jsf',
  URL_SEARCHMAPPINGTABLE: baseUrl + 'searchMappingTable.jsf',
  action: {
    copy: 'copy',
    new: 'new',
    edit: 'edit'
  },
  fieldType: {
    geo: 'GEO',
    typeSize: 'BEST'
  },
  supportCustomizedCriteria: [2, 3],
  fieldTypeKey: {
    BCAT: 'cargoNature',
    BMMT: 'movementType',
    BPGT: 'pkgUom',
    BBLT: 'blType',
    BWGT: 'vgmWeightUnit',
    BEST: 'CTNSizeType',
    BVST: 'ventilation',
    BKVM: 'vgmWeightMethod',
    PST: 'freightPaymentType',
    GEO: 'geo'
  }
}
