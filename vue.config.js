const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const proMode = process.env.NODE_ENV === 'production'
const pro = proMode && !process.env.npm_config_qa

function resolve (dir) {
  return path.join(__dirname, dir)
}
let files = glob.sync('src/entries/*.js')
let entryKey = files.map(file => path.win32.basename(file, path.extname(file)))
console.log(entryKey)
if (proMode) {
  HtmlWebpackPlugin.prototype.injectAssetsIntoHtml = function (html, assets, assetTags) {
    var appRegExp = /(<div\sid="app"\s*><\/div>)/i
    const body = assetTags.body.map(this.createHtmlTag.bind(this))
    const head = assetTags.head.map(this.createHtmlTag.bind(this))
    if (body.length) {
      if (appRegExp.test(html)) {
        // Append assets to body element
        html = html.replace(appRegExp, match => match + body.join(''))
      } else {
        // Append scripts to the end of the file if no <body> element exists:
        html += body.join('')
      }
    }
    if (head.length) {
      if (appRegExp.test(html)) {
        // Append styles to head element
        html = html.replace(appRegExp, match => match + head.join(''))
      } else {
        // Append styles to the end of the file if no <head> element exists:
        html += head.join('')
      }
    }
    return html
  }
}
module.exports = {
  outputDir: pro ? resolve('../domestic-web/src/main/webapp/app/booking/vue/') : 'dist',
  baseUrl: proMode ? '/dmpod/app/booking/vue/' : '/',
  pages: {
    searchMessageConfig: {
      entry: 'src/entries/searchMessageConfig.js',
      template: proMode ? 'src/templates/searchMessageConfig.xhtml' : 'index.html',
      filename: proMode ? 'searchMessageConfig.xhtml' : 'searchMessageConfig.html'
    },
    editMessageConfig: {
      entry: 'src/entries/editMessageConfig.js',
      template: proMode ? 'src/templates/editMessageConfig.xhtml' : 'index.html',
      filename: proMode ? 'editMessageConfig.xhtml' : 'editMessageConfig.html'
    },
    searchMappingTable: {
      entry: 'src/entries/searchMappingTable.js',
      template: proMode ? 'src/templates/searchMappingTable.xhtml' : 'index.html',
      filename: proMode ? 'searchMappingTable.xhtml' : 'searchMappingTable.html'
    },
    editMappingTable: {
      entry: 'src/entries/editMappingTable.js',
      template: proMode ? 'src/templates/editMappingTable.xhtml' : 'index.html',
      filename: proMode ? 'editMappingTable.xhtml' : 'editMappingTable.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('static', resolve('static'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('img', resolve('static/image'))
      .set('baseComp', resolve('src/components/base'))

    if (proMode) {
      config.module.rule('fonts').use('url-loader').loader('url-loader').tap(options => {
        options.limit = 99999
        return options
      })
      entryKey.forEach(key => {
        config.plugins.delete(`prefetch-${key}`)
        config.plugins.delete(`preload-${key}`)
        config.plugin(`html-${key}`)
          .tap(args => {
            args[0].xhtml = true
            args[0].minify = false
            return args
          })
      })
    } else {
      config.plugin('copy')
        .tap(args => {
          args[0].push({
            from: resolve('static/dev')
          })
          return args
        })
    }
  }
}
