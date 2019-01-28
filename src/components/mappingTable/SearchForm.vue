<template>
  <el-form :model="form" ref="form">
    <el-row class="search-tip">{{this.$r.getMessage('c_i_0416')}}</el-row>
    <el-row type="flex" justify="start" :gutter="30">
      <el-col :span="8">
        <el-form-item :label="$r.getLabel('mappingTableName')" prop="name">
          <el-input
            v-model="form.name"
            :maxLength="50"
            size="medium"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item :label="$r.getLabel('field')" prop="fieldType">
          <b-select
            v-model="form.fieldType"
            :options="fieldTypes"
            size="medium"
          ></b-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" :gutter="30">
      <el-col :span="8" :offset="16">
        <el-form-item style="text-align:right">
          <el-button size="small" @click="reset">{{$r.getLabel('reset')}}</el-button>
          <el-button size="small" type="primary" @click="search">{{$r.getLabel('search')}}</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
import Search from '@/mixins/search/search'
export default {
  mixins: [Search],
  name: 'SearchPanel',
  data () {
    return {
      fieldTypes: []
    }
  },
  methods: {
    getFieldType () {
      const vm = this
      this.$dwr('DWRProfileService', 'getCodeTypeSupportCustomized')(this.$constant.supportCustomizedCriteria).then(
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
</script>
