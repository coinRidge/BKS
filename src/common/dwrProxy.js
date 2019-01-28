import {
  Loading
} from 'element-ui'
let dwr2Promise = (service, func, option) => {
  return function () {
    let args = arguments
    return new Promise((resolve, reject) => {
      let loadingInstance = null
      if (!option || option.showMask) {
        loadingInstance = Loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      }
      window[service][func](...args, (resp) => {
        loadingInstance && loadingInstance.close()
        if (resp && resp.exceptionRecord) {
          reject(resp.exceptionRecord)
        } else {
          resolve(resp)
        }
      })
    })
  }
}
let importMockData = (service, func, option) => {
  return () => {
    return import(
      /* webpackChunkName: "mock" */
      /* webpackMode: "lazy" */
      'static/dev/mock').then(data => {
      let loadingInstance = null
      if (!option || option.showMask) {
        loadingInstance = Loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.6)'
        })
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          loadingInstance && loadingInstance.close()
        }, 500)
        if (data) {
          resolve(data.default[service][func])
        } else {
          reject(new Error('no data'))
        }
      })
    })
  }
}
export default (service, func, option) => {
  if (window[service]) {
    if (window[service][func] && typeof window[service][func] === 'function') {
      return dwr2Promise(service, func, option)
    } else {
      console.error(`Service ${service} does not have ${func} or it is not a function`)
    }
  } else {
    return importMockData(service, func, option)
  }
}
