import path from 'path'
import critical from 'critical'

export default function CriticalCssWebpackPlugin(options = {}) {
  this.options = Object.assign({
    src: 'index.html',
    dest: 'index.html',
    inline: true,
    minify: true,
    extract: true,
    width: 375,
    height: 565,
    penthouse: {
      blockJSRequests: false
    }
  }, options)
}

CriticalCssWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin('after-emit', (compilation, callback) => {
    const base = compilation.outputOptions.path

    const css = Object.keys(compilation.assets)
      .filter(filename => /\.css$/.test(filename))
      .map(filename => path.join(base, filename))
    
    critical.generate(Object.assign({ base }, this.options), callback)
  })
}
