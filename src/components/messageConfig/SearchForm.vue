<template>
  <el-form :model="form" ref="form">
    <el-row class="search-tip">{{this.$r.getMessage('c_i_0416')}}</el-row>
    <el-row type="flex" justify="start" :gutter="30">
      <el-col :span="8">
        <el-form-item :label="$r.getLabel('bkOffice')" prop="officeCode">
          <b-select
            v-model="form.officeCode"
            :options="$util.getUserOfficeArray()"></b-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item :label="$r.getLabel('haulier')" prop="carrierCode">
          <b-select
            v-model="form.carrierCode"
            :options="$util.getHaulierScodes()"></b-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item :label="$r.getLabel('msgType')" prop="msgType">
          <b-select
            v-model="form.msgType"
            :options="$util.getScodesArray('BMCT')"></b-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" :gutter="30">
      <el-col :span="8">
        <el-form-item :label="$r.getLabel('tplCode')" prop="template">
          <el-input v-model="form.template" size="medium"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" :gutter="30">
      <el-col :span="8">
        <el-form-item prop="showInactive">
          <el-checkbox v-model="form.showInactive">{{$r.getLabel('showDisable')}}</el-checkbox>
        </el-form-item>
      </el-col>
      <el-col :span="8" :offset="8">
        <el-form-item style="text-align:right">
          <el-button size="small" @click="reset">{{$r.getLabel('reset')}}</el-button>
          <el-button size="small" type="primary" @click="search" @keyup.enter="search">{{$r.getLabel('search')}}</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
import Search from '@/mixins/search/search'
export default {
  mixins: [Search],
  name: 'SearchPanel'
}
</script>
