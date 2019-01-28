<template>
  <el-autocomplete
    :size="size"
    :value="value"
    :fetch-suggestions="querySearchAsync"
    @input="handleInput"
    @select="handleSelect"
    class="input"
    popper-class="location-input-popper"
    value-key="name"
    ref="input">
      <template slot-scope="{item}">
        <div class="left item">{{item.name}}</div>
        <div class="center item">{{item.unCode}}</div>
        <div class="right item">{{getType(item.type)}}</div>
      </template>
    </el-autocomplete>
</template>
<script>
import Util from '@/common/common-util'
export default {
  name: 'LocationInput',
  props: {
    value: String,
    mustcarrier: Boolean,
    carrierCode: String,
    locationtype: String,
    hasUncodeOnly: Boolean,
    size: {
      default: 'medium'
    }
  },
  data () {
    return {
      oid: 0 // to promise that only auto select item when item is no equal current item
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      if (!queryString || (this.mustCarrier && !this.haulierCode)) {
        cb(Array(0))
        return
      }
      const vo = {
        locationType: this.locationtype,
        locationCode: queryString,
        locationName: queryString,
        hasUncodeOnly: this.hasUncodeOnly
      }
      this.$dwr('DWRCommonService', 'searchLocation', { showMask: false })(vo).then(
        resp => {
          const data = resp.location
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
    getType (type) {
      if (Util.getScodesMap('GEOT')[type]) {
        return `(${Util.getScodesMap('GEOT')[type].label})`
      } else {
        return ''
      }
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
