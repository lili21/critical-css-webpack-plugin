const path = require('path')
const critical = require('critical')

class CriticalCssWebpackPlugin {
  constructor (options) {
    this.options = Object.assign({
      src: 'index.html',
      inline: true,
      width: 375,
      height: 565,
      target: 'index.html',
      extract: true
    }, options)
  }

  emit (compilation, callback) {
    const css = Object.keys(compilation.assets)
      .filter(function (filename) { return /\.css$/.test(filename) })
      .map(function (filename) { return path.join(compilation.outputOptions.path, filename) })

    critical.generate(Object.assign({ css, base: compilation.outputOptions.path }, this.options), (err) => {
      callback(err)
    })
  }

  apply (compiler) {
    compiler.hooks.afterEmit.tapAsync('CriticalCssWebpackPlugin', (compilation, callback) => {
      this.emit(compilation, callback)
    })
  }
}

module.exports = CriticalCssWebpackPlugin
