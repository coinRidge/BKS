<template>
  <el-autocomplete
    :size="size"
    :value="value"
    @input="handleInput"
    :fetch-suggestions="querySearchAsync"
    @select="handleSelect"
    class="input"
    popper-class="location-input-popper"
    ref="input"
    value-key="name"
    :disabled="!fieldType">
    </el-autocomplete>
</template>
<script>
// import Util from '@/common/common-util'
export default {
  name: 'MappingConfigInput',
  props: {
    value: String,
    fieldType: {
      default: '',
      type: String
    },
    size: {
      default: 'medium'
    }
  },
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
      this.$dwr('BookingAgentService', 'getConfigsByType', { showMask: false })(this.fieldType, queryString).then(
        resp => {
          const data = resp || []
          cb(data)
          const item = data[0]
          if (data.length === 1 && this.oid !== item.oid) {
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
        this.$emit('select', {})
      }
      this.$emit('input', value)
    }
  },
  watch: {
    fieldType (newVal, oldVal) {
      this.$emit('input', '')
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.left {
  float: left;
  width: 220px;
}
.center {
  float: left;
  width: 100px;
}
.right {
  float: right;
  width: 80px;
}
</style>
