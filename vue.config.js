const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      symlinks: false,
      fallback: {
        fs: false
      },
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    }
  }
})
