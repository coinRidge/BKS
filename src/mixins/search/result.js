export default {
  props: {
    data: Array,
    totalRecords: Number
  },
  methods: {
    handleSelectionChange (val) {
      this.$store.commit('multipleSelection', val)
    },
    handleDblClick (row, event) {
      this.$emit('row-dblclick', row, event)
    }
  }
}
