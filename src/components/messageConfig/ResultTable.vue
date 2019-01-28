<template>
  <el-table
    :data="data"
    stripe
    max-height=700
    style="width: 100%"
    empty-text=" "
    @selection-change="handleSelectionChange"
    @row-dblclick="handleDblClick">
    <el-table-column
      type="selection"
      width="30">
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('haulier')">
      <template slot-scope="scope">
        {{ $util.getHaulierName(scope.row.carrierCode) }}
      </template>
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('bkOffice')">
      <template slot-scope="scope">
        {{ $util.getOfficeName(scope.row.officeCode) }}
      </template>
    </el-table-column>
    <el-table-column
      prop="msgType"
      :label="$r.getLabel('type')">
    </el-table-column>
    <el-table-column
      prop="msgName"
      :label="$r.getLabel('msgName')">
    </el-table-column>
    <el-table-column
      prop="msgChannel"
      :label="$r.getLabel('msgChannel')">
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('tplCode')">
      <template slot-scope="{row}">
        {{$_.last(row.tplCode.split('/'))}}
      </template>
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('status')">
      <template slot-scope="scope">
        {{ scope.row.active ? $r.getLabel('active') : $r.getLabel('inactive') }}
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import Result from '@/mixins/search/result'
export default {
  mixins: [Result],
  name: 'ResultTable',
  computed: {
    status () {
      return this.active ? 'active' : 'inactive'
    }
  }
}
</script>
