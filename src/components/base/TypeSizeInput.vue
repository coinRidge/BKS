<template>
  <b-select
    :options="options"
    :value="value"
    @input="handleInput"
    @change="handleChange"
    :disabled="disabled"
    :size="size">
    <template slot-scope="{item}">
      <div class="left item">{{item.code}}</div>
      <div class="right item">{{item.name}}</div>
    </template>
  </b-select>
</template>
<script>
export default {
  name: 'TypeSizeInput',
  props: {
    value: {},
    size: {
      default: 'medium'
    },
    disabled: {
      default: false
    }
  },
  computed: {
    options () {
      let result = this.$util.getScodesArray('BEST')
      result.forEach(item => {
        item.name = item.label
        item.label = item.code
      })
      return result
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    },
    handleChange (value) {
      this.$emit('change', value)
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
  width: 50px;
}
.right {
  float: left;
  width: 200px;
}
</style>
