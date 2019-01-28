<template>
<el-form
  :rules="tableRules"
  ref="form"
  :model="form"
  @validate="handleValidate"
  :show-message="false">
  <bar>
    <div @click="add"><span class="add-icon icon-left"></span>{{$r.getLabel('add')}}</div>
    <div @click="del"><span class="del-icon icon-left"></span>{{$r.getLabel('del')}}</div>
  </bar>
  <el-table
    :data="form.data"
    empty-text=" "
    @selection-change="handleSelectionChange"
    class="edit-table"
    :row-key="rowKey">
    <el-table-column
      type="selection"
      width="30">
    </el-table-column>
    <el-table-column
      v-for="config in tableConfigs"
      :key="config.prop"
      :prop="config.prop"
      :label="config.label">
      <template slot-scope="{row, $index}">
        <el-form-item :prop="getProp(config.prop, $index)">
          <el-tooltip
            effect="light"
            :content="message[getProp(config.prop, $index)]"
            :disabled="!message[getProp(config.prop, $index)]"
            placement="bottom-end">
            <dynamic-input
              :attrs="config.attrs"
              :on="config.on"
              v-model="row[config.prop]"
              :row="row"
              :index="$index"
              @change="handleChange"
            ></dynamic-input>
          </el-tooltip>
        </el-form-item>
      </template>
    </el-table-column>
  </el-table>
</el-form>
</template>
<script>
export default {
  name: 'EditableTable',
  props: {
    configs: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {}
    },
    initDatas: {
      type: Array,
      default: () => []
    },
    rowKey: {
      default: ''
    }
  },
  data () {
    return {
      form: {
        data: []
      },
      message: {},
      selection: [],
      initData: {}
    }
  },
  computed: {
    tableRules () {
      let tableRules = {}
      for (let i = 0; i < this.form.data.length; i++) {
        _.forEach(this.rules, (value, prop) => {
          const key = this.getProp(prop, i)
          tableRules[key] = this.$_.clone(this.rules[prop])
          if (tableRules[key][0].validator) {
            tableRules[key][0].validator = tableRules[key][0].validator.bind(this)
          }
        })
      }
      return tableRules
    },
    tableConfigs () {
      return this.configs.filter(item => item.label)
    }
  },
  methods: {
    handleValidate (prop, flag, error) {
      this.$set(this.message, prop, error)
    },
    handleSelectionChange (val) {
      this.selection = val
    },
    add () {
      this.form.data.push(this.getInitData())
    },
    del () {
      if (this.selection.length === 0) {
        this.$message.error(`${this.$r.getMessage('selectAtLeast1')}`)
        return false
      }
      this.form.data = _.differenceWith(this.form.data, this.selection, _.isEqual)
    },
    getProp (prop, index) {
      return `data[${index}].${prop}`
    },
    getIndex (prop) {
      if (!prop) return 0
      return Number(prop.slice(5, 6))
    },
    getInitData () {
      if (_.isEmpty(this.initData)) {
        this.configs.forEach(config => {
          switch (config.type) {
            case 'string': {
              this.initData[config.prop] = ''
              break
            }
            case 'number': {
              this.initData[config.prop] = 0
              break
            }
            default:
              this.initData[config.prop] = ''
          }
        })
      }
      return _.clone(this.initData)
    },
    handleChange (value, row, index) {
      if (typeof row !== 'undefined' && typeof index !== 'undefined') {
        this.$set(this.form.data, index, row)
      }
    }
  },
  watch: {
    initDatas (val) {
      this.form.data = val
    }
  }
}
</script>
<style lang="scss">
.edit-table {
  .el-input-xs {
    height: 26px;
    line-height: 26px;
    .el-input__inner {
      height: 26px;
      line-height: 26px;
    }
  }
  td, th{
    padding: 2px 0;
  }
}
</style>
