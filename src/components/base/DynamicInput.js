import constant from '@/common/common-constant'
export default {
  name: 'DynamicInput',
  props: {
    attrs: {
      type: Object,
      default: () => {}
    },
    on: {
      type: Object,
      default: () => {}
    },
    value: {
      required: true
    },
    row: {},
    index: {}
  },
  methods: {
    handleInput (value) {
      const vm = this
      if (typeof value === 'string') {
        value = value.trim()
      }
      vm.$emit('input', value)
    },
    handleChange (value) {
      this.on && this.on.change && this.on.change.call(this, value, this.row)
    },
    handleSelect (item) {
      this.on && this.on.select && this.on.select.call(this, item, this.row)
    }
  },
  render (h) {
    if (this.attrs.readOnly) {
      return <span>{this.value}</span>
    }
    let input
    const vm = this
    const on = {
      input: vm.handleInput,
      change: vm.handleChange,
      select: vm.handleSelect
    }
    const attrs = {
      size: 'mini',
      ...vm.attrs
    }
    const attributes = { attrs, on }
    switch (vm.attrs.compType) {
      case constant.compType.BSelect: {
        input = <b-select
          value={vm.value}
          {...attributes}
        ></b-select>
        break
      }
      case constant.compType.TypeSizeInput: {
        input = <type-size-input
          value={vm.value}
          {...attributes}
        ></type-size-input>
        break
      }
      case constant.compType.LocationInput: {
        input = <location-input
          value={vm.value}
          {...attributes}
        ></location-input>
        break
      }
      case constant.compType.MappingTableInput: {
        input = <mapping-config-input
          value={vm.value}
          {...attributes}
          fieldType={this.row.fieldType}
        ></mapping-config-input>
        break
      }
      default:
        input = <el-input
          value={vm.value}
          class="el-input-xs"
          {...attributes}
        ></el-input>
        break
    }
    return input
  }
}
