<template>
  <session-time-out :visible="visible"/>
</template>
<script>
export default {
  name: 'SessionTimeOutView',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    showSTO () {
      if (this.$util.isSessionTimeOut()) {
        document.cookie = 'hasTimeout=true; path=/dmpod'
        this.visible = true
      }
    },
    hideSTO () {
      if (this.$util.getCookieValue('stoDirect') === 'true') {
        location.href = this.$constant.URL_LOGIN
      } else {
        this.visible = this.$util.getCookieValue('hasTimeout') === 'true'
      }
    }
  },
  mounted () {
    if (this.$util.getCookieValue('needSTO') === 'false') return
    let userId = this.$util.getUser().userId
    if (userId) {
      setInterval(this.showSTO, 1 * 60 * 1000)
      setInterval(this.hideSTO, 2 * 1000)
    }
  }
}
</script>
