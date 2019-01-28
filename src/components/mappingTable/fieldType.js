export default {
  data () {
    return {
      fieldTypes: []
    }
  },
  methods: {
    getFieldType () {
      const vm = this
      vm.$dwr('DWRProfileService', 'getCodeTypeSupportCustomized')(vm.$constant.supportCustomizedCriteria).then(
        resp => {
          vm.fieldTypes = resp.map(function (item) {
            return {
              code: item,
              label: Resource.getLabel(vm.$constant.fieldTypeKey[item])
            }
          })
        },
        error => {
          vm.$message.error(error)
        }
      )
    }
  },
  created () {
    this.getFieldType()
  }
}
