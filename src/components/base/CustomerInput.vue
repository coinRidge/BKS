<template>
  <div>
    <el-autocomplete
      size="medium"
      :value="value"
      @input="handleInput"
      :fetch-suggestions="querySearchAsync"
      @select="handleSelect"
      class="input"
      ref="input"
      value-key="customerName"
      :disabled="disabled"></el-autocomplete>
    <div class="image">
      <img src="~/img/yonghu.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'CustomerInput',
  props: ['value', 'disabled'],
  data () {
    return {
      oid: 0
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      if (!queryString) {
        cb(Array(0))
        return
      }
      this.$dwr('BookingAgentService', 'searchActiveBookingParty', { showMask: false })(queryString).then(
        resp => {
          cb(resp)
          const item = resp[0]
          if (resp.length === 1 && this.oid !== item.oid) {
            this.$nextTick(() => {
              this.$refs.input.select(item)
            })
          }
        }
      )
    },
    handleSelect (item) {
      this.oid = item.oid
      this.$emit('select', item)
    },
    handleInput (value) {
      if (!value) {
        this.$emit('select', {
          customerSysCode: ''
        })
      }
      this.$emit('input', value)
    }
  }
}
</script>
<style scoped>
.input {
  width:90%;
}
.image {
  float: right;
  width: 10%;
  height: 36px;
  margin-top: 8px;
  text-align: center;
}
</style>
