<template>
  <el-dialog
    :visible.sync="visible"
    lock-scroll
    close-on-click-modal
    :title="$r.getLabel('conversationExpired')"
    width="30%">
    <div class="message">
      {{$r.getMessage('expiredMessage')}}
    </div>
    <el-form ref="form" :model="form">
      <el-form-item size="medium" class="item">
        <el-input :value="userId" readonly></el-input>
      </el-form-item>
      <el-form-item prop="pwd" :error="error" size="medium" class="item">
        <el-input v-model="form.pwd" type="password" :placeholder="$r.getLabel('password')"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="handleLogin" size="small" type="primary">{{$r.getLabel('login')}}</el-button>
      <el-button @click="handleCancel" size="small">{{$r.getLabel('cancel')}}</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'SessionTimeOut',
  props: {
    visible: Boolean
  },
  data () {
    return {
      form: {
        pwd: ''
      },
      error: '',
      capIndicator: false
    }
  },
  computed: {
    userId () {
      return this.$util.getUser().userId
    }
  },
  methods: {
    setOnTime () {
      document.cookie = 'hasTimeout=false; path=/dmpod'
      this.visible = false
    },
    handleLogin () {
      if (this.form.pwd) {
        this.$dwr('DWRCommonService', 'sessionTimeoutLogin')(this.userId, this.form.pwd).then(
          resp => {
            if (resp) {
              this.error = Resource.getMessage('00115')
            } else {
              this.error = ''
              this.setOnTime()
            }
          },
          error => this.$message.error(error)
        )
      }
    },
    handleCancel () {
      document.cookie = 'hasTimeout=false; path=/dmpod'
      document.cookie = 'stoDirect=true; path=/dmpod'
      location.href = this.$constant.URL_LOGIN
    }
  }
}
</script>
<style scoped>
.message {
  margin-bottom: 20px;
}
.item {
  margin: 5px 0;
}
</style>
