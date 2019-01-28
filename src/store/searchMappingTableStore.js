import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: {
      name: '',
      filedType: ''
    },
    pageSize: 50,
    pageCurrent: 1,
    records: [],
    total: 0,
    multipleSelection: []
  },
  mutations: {
    form (state, value) { state.form = value },
    records (state, value) { state.records = value },
    total (state, value) { state.total = value },
    pageSize (state, value) { state.pageSize = value },
    pageCurrent (state, value) { state.pageCurrent = value },
    multipleSelection (state, value) { state.multipleSelection = value }
  },
  actions: {
    search ({ state, commit }, reset) {
      if (reset) {
        commit('pageCurrent', 1)
      }
      function getCriteria () {
        return {
          name: state.form.name,
          fieldType: state.form.fieldType,
          pagingParameter: {
            rowsOfPage: state.pageSize,
            pageIndex: state.pageCurrent
          }
        }
      }
      Vue.prototype.$dwr('BookingAgentService', 'pagingMappingConfig')(getCriteria()).then(
        resp => {
          if (!_.isEmpty(resp.result) && !_.isEmpty(resp.page)) {
            commit('records', resp.result)
            if (resp.page.totalRecord !== 0) {
              commit('total', resp.page.totalRecord)
            }
          } else {
            commit('records', [])
            commit('total', 0)
            Vue.prototype.$message({
              message: `${Vue.prototype.$r.getMessage('01001')}`,
              type: 'warning'
            })
          }
        },
        err => {
          Vue.prototype.$message({
            message: `${err.message}`,
            type: 'warning'
          })
        }
      )
    }
  }
})
