<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pageCurrent"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    layout="jumper, prev, pager, next, sizes, slot"
    :total="total"
    class="pagination">
    <span style="position: absolute;right:10px">{{paginationMsg}}</span>
  </el-pagination>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Pagination',
  props: {
    total: Number,
    'pageSizes': {
      type: Array,
      default: () => [50, 100, 150, 200]
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['pageSize', 'pageCurrent', 'multipleSelection']),
    paginationMsg () {
      const start = (this.pageCurrent - 1) * this.pageSize + 1
      const end = this.total < this.pageCurrent * this.pageSize ? this.total : this.pageCurrent * this.pageSize
      if (langType === 'en_US') {
        return `Selected Items: ${this.multipleSelection.length}, Local Items: ${start} - ${end}, Total Items: ${this.total}`
      } else {
        return `已经选择${this.multipleSelection.length}, 显示${start} - ${end}, 共${this.total}条`
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$store.commit('pageSize', val)
      this.$emit('search', true)
    },
    handleCurrentChange (val) {
      this.$store.commit('pageCurrent', val)
      this.$emit('search')
    }
  }
}
</script>
<style lang='scss'>
.pagination {
  margin-top: 5px;
  position: relative;
  .el-input__inner {
    box-shadow: 0 0 1.5px 1px white;
  }
}
</style>
