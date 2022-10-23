const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,


  devServer: {
    proxy: {
      '/api': {
        target: "http://123.60.69.8:8099/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
})
