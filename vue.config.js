const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
        scss: {
          additionalData: `
                @import "@/scss/style.scss";
            `,
        },
    },
  },

  devServer: {
    proxy: "https://jsonkeeper.com/"
  }
})
