export default {
  computed: {
    form: {
      get () {
        return this.$store.state.form
      },
      set (val) {
        this.$store.commit('form', val)
      }
    }
  },
  methods: {
    search () {
      this.$emit('search', true)
    },
    reset () {
      this.$refs.form.resetFields()
    }
  }
}
