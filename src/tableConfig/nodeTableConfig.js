function validateNodeName (rule, name, callback) {
  const index = this.getIndex(rule.field)
  const prop = this.getProp('nodeValue', index)
  const value = _.get(this.form, prop)
  if (!name) {
    callback(new Error(Resource.getMessage('01065')))
  }
  if (name && value) {
    this.$set(this.message, rule.field, '')
    callback()
  }
}

function validateNodeValue (rule, value, callback) {
  const index = this.getIndex(rule.field)
  const prop = this.getProp('nodeName', index)
  const name = _.get(this.form, prop)
  if (value) {
    if (name) {
      this.$set(this.message, rule.field, '')
    } else {
      this.$refs.tableForm.validateField(prop)
    }
    callback()
  }
  if (!value && name) {
    callback(new Error(Resource.getMessage('01065')))
  }
}

export default {
  configs: [{
    prop: 'oid'
  },
  {
    prop: 'nodeName',
    label: Resource.getLabel('nodeName'),
    attrs: {
      maxlength: '100'
    }
  },
  {
    prop: 'nodeValue',
    label: Resource.getLabel('nodeValue'),
    attrs: {
      maxlength: '200'
    }
  }],
  rules: {
    nodeName: [{
      validator: validateNodeName, trigger: 'blur'
    }],
    nodeValue: [{
      validator: validateNodeValue, trigger: 'blur'
    }]
  }
}
