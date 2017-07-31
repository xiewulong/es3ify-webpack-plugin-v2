# Webpack plugin for es5 to es3 on final output

用于将es5最终输出es3的webpack插件

## 目录

<details>

* [安装](#install)
* [使用](#useage)

</details>

## Install

安装

```bash
$ npm i [-S|-D] es3ify-webpack-plugin-v2
```

## Useage

使用

```js
const es3ifyWebpackPlugin = require('es3ify-webpack-plugin-v2');

// webpack config ...
plugins: [
  new es3ifyWebpackPlugin(),
],
// webpack config ...
```

## License

MIT - [xiewulong](https://github.com/xiewulong)
