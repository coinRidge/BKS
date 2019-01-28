<template>
  <el-select
    :value="value"
    @input="handleInput"
    @change="handleChange"
    filterable
    clearable
    :size="size"
    placeholder=""
    :filter-method="filterMethod"
    :disabled="disabled"
    ref="select">
    <el-option
      v-for="item in data"
      :key="item.code"
      :label="item.label"
      :value="item.code">
      <template>
        <slot :item="item"></slot>
      </template>
    </el-option>
  </el-select>
</template>
<script>
export default {
  name: 'BSelect',
  props: {
    options: {
      default: () => [],
      type: Array
    },
    value: {},
    size: {
      default: 'medium'
    },
    disabled: {
      default: false
    }
  },
  data () {
    return {
      data: this.options
    }
  },
  methods: {
    resetOptions () {
      this.data = this.options
    },
    filterMethod (val) {
      if (val === '') {
        this.resetOptions()
      } else {
        this.data = this.options.filter(item => {
          return this.includes(item.code, val) || this.includes(item.label, val)
        })
      }
    },
    includes (x, y) {
      return x.toUpperCase().includes(y.toUpperCase())
    },
    handleInput (value) {
      this.$emit('input', value)
      this.resetOptions()
    },
    handleChange (value) {
      this.$emit('change', value)
    },
    blur () {
      this.$refs.select.blur()
    }
  },
  watch: {
    options () {
      this.data = this.options
    }
  }
}
</script>
