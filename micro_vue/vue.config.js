const path = require("path");
const { defineConfig } = require('@vue/cli-service')
const APP_NAME = require('./package.json').name;

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // 监听端口
    port: 8001,
    // 关闭主机检查，使微应用可以被 fetch
    // disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: `${APP_NAME}-[name]`,
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: "umd",
      // 按需加载相关，设置为 webpackJsonp_微应用名称 即可
      // jsonpFunction: `webpackJsonp_${APP_NAME}`,
    },
  },
})