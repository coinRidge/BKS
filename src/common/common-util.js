import baseConstant from './baseConstant'
import supportingData from './supportingData'
import _ from 'lodash'

function getScodesSource () {
  if (typeof BKS === 'undefined') {
    BKS = {}
  }
  if (!BKS.Scodes) {
    BKS.Scodes = {}
  }
  if (!BKS.Scodes.isMerge) {
    var dbSource = BKS.Scodes._codetable || {}
    var uiSource = supportingData || {}
    for (var p in uiSource) {
      dbSource[p] = uiSource[p]
    }
    BKS.Scodes.isMerge = true

    if (!BKS.Scodes.isMultiLang) {
      for (var i in dbSource) {
        var arr = dbSource[i]
        if (baseConstant.mulLang.indexOf(i) !== -1 && arr instanceof Array) {
          arr.forEach(function (item) {
            item[1] = Resource.getLabel(i + '_' + item[0].toString().toUpperCase())
          })
        }
      }
      BKS.Scodes.isMultiLang = true
    }
  }
  return BKS.Scodes._codetable || {}
}

function getScodesMap (codeType) {
  var source = getScodesSource()
  if (!BKS.Scodes['M_' + codeType]) {
    var returnMap = {}
    var origArray = source[codeType]
    if (origArray) {
      for (var i = 0; i < origArray.length; i++) {
        var obj = {}
        obj.code = origArray[i][0]
        obj.label = origArray[i][1]
        returnMap[obj.code] = obj
      }
    }
    BKS.Scodes['M_' + codeType] = returnMap
  }
  return BKS.Scodes['M_' + codeType]
}

function getHaulierName (code) {
  if (code) {
    const data = getHaulierScodes().filter(item => item.code === code)
    if (data && data.length === 1) {
      return data[0].label
    }
  }
  return ''
}

function getHaulierScodes () {
  const codeType = 'haulier'
  var source = getScodesSource()
  if (!BKS.Scodes['A_' + codeType]) {
    var returnArray = []
    var origArray = source[codeType]
    var receivers = getUserReceivers()
    if (origArray) {
      for (var i = 0; i < origArray.length; i++) {
        var obj = {}
        obj.code = origArray[i][0]
        obj.label = origArray[i][1]
        if (_.find(receivers,
          function (receiver) {
            return obj.code === receiver.carrier
          })) {
          returnArray.push(obj)
        }
      }
    }
    BKS.Scodes['A_' + codeType] = returnArray
  }
  return BKS.Scodes['A_' + codeType]
}

function getScodesName (type, code) {
  if (type && code) {
    const data = getScodesArray(type).filter(item => item.code === code)
    if (data && data.length === 1) {
      return data[0].label
    }
  }
  return ''
}

function getScodesArray (codeType) {
  var source = getScodesSource()
  if (!BKS.Scodes['A_' + codeType]) {
    var returnArray = []
    var origArray = source[codeType]
    if (origArray) {
      for (var i = 0; i < origArray.length; i++) {
        var obj = {}
        obj.code = origArray[i][0]
        obj.label = origArray[i][1]
        returnArray.push(obj)
      }
    }
    BKS.Scodes['A_' + codeType] = returnArray
  }
  return BKS.Scodes['A_' + codeType]
}

function getUserReceivers () {
  var source = getScodesSource()
  var user = getUser()
  if (!source['userReceivers']) {
    var offices = getUserOfficeArray()
    var receivers = source['receivers']
    source['userReceivers'] = _.filter(receivers,
      function (receiver) {
        return _.find(offices,
          function (office) {
            return receiver.officeCode === office.code && (user.internal || receiver.externalAvailable)
          })
      })
  }
  return source['userReceivers']
}

function getUserOffice () {
  var userOffice = []
  var curUser = getUser()
  if (curUser != null) {
    var source = getScodesSource()
    var allOffices = source.BKS_offices || []
    if (curUser.canAccessAllOffice) {
      userOffice = allOffices
    } else if (curUser.offices) {
      for (var i = 0; i < curUser.offices.length; i++) {
        for (var j = 0; j < allOffices.length; j++) {
          var office = allOffices[j]
          if (office[0] === curUser.offices[i]) {
            userOffice.push(office)
          }
        }
      }
    }
  }
  return userOffice
}

function getOfficeName (code) {
  if (code) {
    const data = getUserOfficeArray().filter(item => item.code === code)
    if (data && data.length === 1) {
      return data[0].label
    }
  }
  return ''
}

function getUserOfficeArray () {
  if (!BKS.Scodes['A_userOffices']) {
    var returnArray = []
    var origArray = getUserOffice()
    if (origArray) {
      for (var i = 0; i < origArray.length; i++) {
        var obj = {}
        obj.code = origArray[i][0]
        obj.label = origArray[i][1]
        returnArray.push(obj)
      }
    }
    BKS.Scodes['A_userOffices'] = returnArray
  }
  return BKS.Scodes['A_userOffices']
}

function getUser () {
  var baUserStr = (BA_USER || '{}').replace(/'/g, '"')
  var user = JSON.parse(baUserStr)
  user.fax = user.officeFax2
  user.phone = user.officePhone2
  if (user.userType === 'Internal') {
    user.customerRefNoPrefix = ''
    user.internal = true
  } else {
    user.internal = false
  }
  return user
};

function getApplicationContext () {
  var baUser = getUser()
  return {
    userId: baUser.userId
  }
}

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2]); return null
}

function isGranted (code) {
  const user = getUser()
  const allPermissions = user.allPermissions
  if (_.isEmpty(allPermissions)) return false
  for (var i of allPermissions) {
    if (i === code) return true
  }
}

function checkDuplicateKey (list, key, message, vm) {
  let flag = true
  let set = new Set()
  _.forEach(list, item => {
    if (set.has(item[key]) && flag) {
      vm.$message.error(Resource.getMessage(message))
      flag = false
    } else {
      set.add(item[key])
    }
  })
  return !flag
}

function getCookieValue (key) {
  var strCookie = document.cookie
  var arrCookie = strCookie.split(';')
  for (var i = 0; i < arrCookie.length; i++) {
    var keyValue = arrCookie[i]
    var index = keyValue.indexOf('=')
    if (key === keyValue.substring(0, index).trim()) {
      return keyValue.substring(index + 1)
    }
  }
  return ''
};
function getCookie (Name) {
  var search = Name + '='
  var returnvalue = ''

  if (document.cookie.length > 0) {
    let offset = document.cookie.indexOf(search)
    // if cookie exists
    if (offset !== -1) {
      offset += search.length
      // set index of beginning of value
      let end = document.cookie.indexOf(';', offset)
      // set index of end of cookie value
      if (end === -1) {
        end = document.cookie.length
      }

      returnvalue = unescape(document.cookie.substring(offset, end))
    }
  }
  return returnvalue
}

function TimeLeft (frmEnv) {
  var lastAccessTime = getCookie(frmEnv + '_lastAccessTime')
  return new Date().getTime() - lastAccessTime
}

function isSessionTimeOut () {
  var lastAccessTime = getCookieValue(environmentID + '_' + 'lastAccessTime')
  if (_.isEmpty(lastAccessTime)) {
    return false
  }
  var interval = TimeLeft(environmentID) / (60 * 1000) // convert millisecond to minute
  var preDefTime = STOTime
  if (!STOTime) {
    preDefTime = '30'
  }
  return interval > parseInt(preDefTime, 10)
}

export default {
  getScodesArray,
  getUserOfficeArray,
  getApplicationContext,
  getUser,
  getHaulierScodes,
  getHaulierName,
  getQueryString,
  isGranted,
  getScodesName,
  getOfficeName,
  getScodesMap,
  checkDuplicateKey,
  isSessionTimeOut,
  getCookieValue
}
