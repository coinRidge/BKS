import { mapState } from 'vuex'
export default {
  computed: mapState(['records', 'total', 'form', 'multipleSelection']),
  methods: {
    checkAtLeast1Value () {
      if (this.atLeast1Value && this.atLeast1Value.length > 0) {
        let flag = false
        _.forEach(this.atLeast1Value, value => {
          if (this.form[value]) {
            flag = true
          }
        })
        return flag
      }
      return true
    },
    search (reset) {
      this.$refs.form.$refs.form.validate(valid => {
        if (valid) {
          if (!this.checkAtLeast1Value()) {
            this.$message({
              message: `${this.$r.getMessage('00213')}`,
              type: 'warning'
            })
            return false
          }
          this.$store.dispatch('search', reset)
        } else {
          this.$message.error('form error')
          return false
        }
      })
    },
    checkSelected () {
      const length = this.multipleSelection.length
      if (length > 1 || length === 0) {
        this.$message({
          type: 'error',
          message: `${this.$r.getMessage('selectOne')}`
        })
        return false
      } else if (length === 1) {
        return this.multipleSelection[0].oid
      }
    },
    checkSelectedMulti () {
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'error',
          message: `${this.$r.getMessage('selectAtLeast1')}`
        })
        return false
      } else {
        return this.multipleSelection.map(item => item.oid)
      }
    },
    edit () {
      const oid = this.checkSelected()
      if (oid) {
        this.openEdit(oid)
      }
    },
    handleDblClick (row, event) {
      this.openEdit(row.oid)
    },
    openEdit (oid) {
      if (this.$util.isGranted(this.editGrant)) {
        window.open(this.editUrl + `#/${this.$constant.action.edit}/${oid}`)
      }
    }
  }
}
