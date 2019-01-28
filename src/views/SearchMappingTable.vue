<template>
  <el-container class="container">
    <el-header class="panel-head">{{$r.getLabel('searchMappingTable')}}</el-header>
    <el-main>
      <el-card>
        <search-form
          @search="search"
          ref="form"></search-form>
        <bar v-if="$util.isGranted(editGrant)">
          <div @click="edit"><span class="edit-icon icon-left"></span>{{$r.getLabel('edit')}}</div>
          <div @click="del"><span class="del-icon icon-left"></span>{{$r.getLabel('del')}}</div>
        </bar>
        <result-table
          :data="records"
          class="result-table"
          @row-dblclick="handleDblClick"></result-table>
        <pagination
          :total="total"
          @search="search"></pagination>
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
import SearchForm from '@/components/mappingTable/SearchForm.vue'
import ResultTable from '@/components/mappingTable/ResultTable.vue'
import Form from '@/mixins/search/form.js'

export default {
  mixins: [Form],
  name: 'SearchMappingTable',
  components: {
    SearchForm,
    ResultTable
  },
  data () {
    return {
      atLeast1Value: ['name', 'fieldType'],
      editGrant: 'SETTING.MAPPING.EDIT'
    }
  },
  computed: {
    editUrl () {
      return this.$constant.URL_EDITMAPPINGTABLE
    }
  },
  methods: {
    del () {
      const oids = this.checkSelectedMulti()
      if (!oids) return
      this.$confirm(`${this.$r.getMessage('00173')}`, `${this.$r.getLabel('confirmTip')}`, {
        confirmButtonText: `${this.$r.getLabel('confirmed')}`,
        cancelButtonText: `${this.$r.getLabel('cancel')}`,
        type: 'warning'
      }).then(
        () => {
          this.$dwr('BookingAgentService', 'deleteMappingConfig')(oids).then(
            resp => {
              this.$store.commit('records', this.records.filter(item => !oids.includes(item.oid)))
              this.$message.success(this.$r.getMessage('deleted'))
            },
            error => this.$message.error(error)
          )
        },
        error => console.log(error)
      )
    }
  }
}
</script>
