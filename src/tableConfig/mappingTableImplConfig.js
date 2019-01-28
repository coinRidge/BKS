export default {
  computed: {
    mtRowKey () {
      return 'fieldType'
    },
    mtConfigs () {
      return [{
        prop: 'oid'
      },
      {
        prop: 'fieldType',
        label: Resource.getLabel('field'),
        attrs: {
          compType: this.$constant.compType.BSelect,
          options: this.fieldTypes
        }
      },
      {
        prop: 'name',
        label: Resource.getLabel('name'),
        attrs: {
          compType: this.$constant.compType.MappingTableInput
        },
        on: {
          select: function (item) {
            const row = _.cloneDeep(item)
            this.$emit('change', item.name, row, this.index)
          }
        }
      }]
    },
    mtRules () {
      return {
        fieldType: [
          JSON.parse(this.$constant.requiredRule)
        ],
        name: [
          JSON.parse(this.$constant.requiredRule)
        ]
      }
    }
  }
}
