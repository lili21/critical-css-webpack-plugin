Critical-Css-Webpack-Plugin
=======================
> webpack plugin for critical css, based on [critical](https://github.com/addyosmani/critical), with publicPath supportive.


Installation
----

```bash
$ yarn add critical-css-webpack-plugin --dev
```

Usage
-----

**webpack.config.js**

```javascript
const CriticalCssPlugin = require('critical-css-webpack-plugin')

...
plugins: [
  new CriticalCssPlugin()
]
...
```

Options
-------
> same as [critical options](https://github.com/addyosmani/critical#options)

**default options**

```javascript
{
  base: {webpack.output.path},
  src: 'index.html',
  target: 'index.html',
  inline: true,
  extract: true,
  width: 375,
  height: 565,
  css: [/* all css assets emit by webpack */]
}
```

You pass options to overwrite default value.

**webpack.config.js**

```javascript
...
plugins: [
  new CriticalCssPlugin({
    // your options
  })
]
...
```
