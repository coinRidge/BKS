function change (value, currentRow) {
  const row = _.cloneDeep(currentRow)
  Object.assign(row, {
    code: value,
    name: value
  })
  if (!row.externalCode && !row.externalName) {
    const map = _.filter(_.get(this, 'attrs.options'), item => item.code === value)
    Object.assign(row, {
      externalCode: value,
      externalName: map ? map[0].label : ''
    })
  }
  this.$emit('change', value, row, this.index)
}
function select (item, currentRow) {
  const row = _.cloneDeep(currentRow)
  Object.assign(row, {
    code: item.unCode,
    name: item.name
  })
  if (!row.externalCode && !row.externalName) {
    Object.assign(row, {
      externalCode: item.unCode,
      externalName: item.name
    })
  }
  this.$emit('change', item.name, row, this.index)
}
export default {
  computed: {
    mtConfigs () {
      const isGeo = this.form.fieldType === this.$constant.fieldType.geo
      return [{
        prop: 'oid'
      },
      {
        prop: 'name',
        label: Resource.getLabel('name'),
        attrs: {
          maxlength: '100',
          compType: this.getMtNameCompType,
          options: this.$util.getScodesArray(this.form.fieldType)
        },
        on: {
          change: isGeo ? undefined : change,
          select: isGeo ? select : undefined
        }
      },
      {
        prop: 'code',
        label: Resource.getLabel('code'),
        attrs: {
          readOnly: true
        }
      },
      {
        prop: 'externalName',
        label: Resource.getLabel('externalName'),
        attrs: {
          maxlength: '100'
        }
      },
      {
        prop: 'externalCode',
        label: Resource.getLabel('externalCode'),
        attrs: {
          maxlength: '20'
        }
      }]
    },
    mtRules () {
      return {
        name: [
          JSON.parse(this.$constant.requiredRule)
        ]
      }
    },
    getMtNameCompType () {
      if (this.form.fieldType === this.$constant.fieldType.geo) {
        return this.$constant.compType.LocationInput
      } else if (this.form.fieldType === this.$constant.fieldType.typeSize) {
        return this.$constant.compType.TypeSizeInput
      } else {
        return this.$constant.compType.BSelect
      }
    }
  }
}
