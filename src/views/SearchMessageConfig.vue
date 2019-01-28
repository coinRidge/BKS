<template>
  <el-container class="container">
    <el-header class="panel-head">{{$r.getLabel('searchMsgConfig')}}</el-header>
    <el-main>
      <el-card>
        <search-form
          @search="search"
          ref="form"></search-form>
        <bar v-if="$util.isGranted(editGrant)">
          <div @click="edit"><span class="edit-icon icon-left"></span>{{$r.getLabel('edit')}}</div>
          <div @click="changeStatus"><span class="active-icon icon-left"></span>{{$r.getLabel('activeOrNot')}}</div>
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
import SearchForm from '@/components/messageConfig/SearchForm.vue'
import ResultTable from '@/components/messageConfig/ResultTable.vue'
import Form from '@/mixins/search/form.js'

export default {
  mixins: [Form],
  name: 'SearchMessageConfig',
  data () {
    return {
      atLeast1Value: ['officeCode', 'carrierCode', 'msgType', 'template'],
      editGrant: 'SETTING.MSGCONFIG.EDIT'
    }
  },
  computed: {
    editUrl () {
      return this.$constant.URL_EDITMESSAGECONFIG
    }
  },
  components: {
    SearchForm,
    ResultTable
  },
  methods: {
    changeStatus () {
      const oid = this.checkSelected()
      if (!oid) return
      this.$confirm(`${this.$r.getMessage('confirm2continue')}`, `${this.$r.getLabel('confirmTip')}`, {
        confirmButtonText: `${this.$r.getLabel('confirmed')}`,
        cancelButtonText: `${this.$r.getLabel('cancel')}`,
        type: 'warning'
      }).then(() => {
        this.$dwr('BookingAgentService', 'changeMessageConfigStatus')(oid).then(
          resp => {
            this.records.forEach(item => {
              if (item.oid === oid) {
                item.active = !item.active
              }
            })
            this.$store.commit('records', this.records)
            this.$message({
              type: 'success',
              message: `${this.$r.getMessage('statusUpdated')}`
            })
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
