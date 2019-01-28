import Constant from '@/common/common-constant'
function changeTitle (key) {
  document.title = (Resource.getLabel(key) || '') + ' | ' + Resource.getLabel('bks')
}
export default {
  data () {
    return {
      oid: 0,
      resp: {}
    }
  },
  methods: {
    isNew () {
      return Constant.action.new === this.$route.params.action
    },
    isCopy () {
      return Constant.action.copy === this.$route.params.action
    },
    isEdit () {
      return Constant.action.edit === this.$route.params.action
    },
    toCopy () {
      this.$router.push(`/${Constant.action.copy}/${this.oid}`)
    },
    toNew () {
      this.$router.push(`/${Constant.action.new}`)
    },
    afterSave (oid) {
      if (!this.isEdit()) {
        this.$router.push(`/${Constant.action.edit}/${oid}`)
      }
    },
    bksPageTitle (newTitle, editTitle) {
      this.isEdit() ? changeTitle(editTitle) : changeTitle(newTitle)
    }
  }
}
