<template>
  <el-table
    :data="data"
    stripe
    style="width: 100%"
    empty-text=" ">
    <el-table-column
      :label="$r.getLabel('msgName')"
      prop="msgName">
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('tplCode')">
      <template slot-scope="{row}">
        {{$_.last(row.tplCode.split('/'))}}
      </template>
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('bkOffice')">
      <template slot-scope="scope">
        {{ $util.getOfficeName(scope.row.officeCode) }}
      </template>
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('haulier')">
      <template slot-scope="scope">
        {{ $util.getHaulierName(scope.row.carrierCode) }}
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'MessageConfigTable',
  props: {
    data: Array
  }
}
</script>
