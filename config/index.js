'use strict'
const path = require('path')
console.log(process.env)
module.exports = {
  dev: {
    // 定义静态资源根目录的子目录static
    assetsSubDirectory: 'static',
    //静态资源的公开路径
    assetsPublicPath:'/',
    //代理表，用来建一个虚拟api服务器来代理本机的请求，只用于开发模式
    proxyTable: {
      "/dev-api": {
        //设置调用的接口域名和端口
        target: "http://42.193.18.31:8180",
        //可跨域
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api": ""//用/dev-api代替[target]
        }
      }
    },

    //主机
    host: 'localhost', 
    //域名
    port: 8080, 
    //是否在浏览器中自动打开
    autoOpenBrowser: false,
    //是否查询错误
    errorOverlay: true,
    //是否通知错误
    notifyOnErrors: true,
    poll: false, 
    /**
     * Source Maps
     */
    //开发工具,不每个模块使用 eval() 执行，并且 SourceMap 转换为 DataUrl 后添加到 eval() 中。
    // "低开销"是因为它没有生成列映射(column map)，只是映射行数，作用是当js抛出异常时，显示报错的是第几行
    devtool: 'cheap-module-eval-source-map',
    //是否缓存破坏    
    cacheBusting: true,
    //记录压缩的代码，用来找到源码位置
    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: process.env.NODE_ENV === "production" ? process.env.VUE_APP_NGINX_BASE : "/",

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
