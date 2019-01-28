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
      :label="$r.getLabel('mappingTableName')"
      prop="name">
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('field')">
      <template slot-scope="{row}">
        {{fieldTypeResource(row.fieldType)}}
      </template>
    </el-table-column>
    <el-table-column
      :label="$r.getLabel('remark')"
      prop="remark">
    </el-table-column>
  </el-table>
</template>
<script>
import Result from '@/mixins/search/result'
export default {
  mixins: [Result],
  name: 'ResultTable',
  methods: {
    fieldTypeResource (fieldType) {
      return Resource.getLabel(this.$constant.fieldTypeKey[fieldType])
    }
  }
}
</script>
