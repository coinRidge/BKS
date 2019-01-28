import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import _ from 'lodash'
import 'element-ui/lib/theme-chalk/index.css'
import 'static/css/bks.scss'
import dwr from '@/common/dwrProxy'
import Util from '@/common/common-util'
import Constant from '@/common/common-constant'
import BaseComp from 'baseComp'
import Language from '@/common/language'
import SessionTimeOutView from '@/views/SessionTimeOutView'

export default function () {
  Vue.use(VueI18n)
  Vue.use(ElementUI)
  Vue.use(BaseComp)

  Vue.config.productionTip = false
  Vue.config.lang = window.langType
  Vue.locale(window.langType, Language)
  Object.defineProperty(Vue.prototype, '$_', { value: _ })
  Object.defineProperty(Vue.prototype, '$dwr', { value: dwr })
  Object.defineProperty(Vue.prototype, '$util', { value: Util })
  Object.defineProperty(Vue.prototype, '$r', { value: Resource })
  Object.defineProperty(Vue.prototype, '$constant', { value: Constant })

  BKS.STO = new Vue({
    render: h => h(SessionTimeOutView)
  }).$mount('#sessionTimeOut')

  return Vue
}
