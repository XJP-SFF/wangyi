const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit:37.5
})


module.exports = {
    lintOnSave:false,
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    postcss
                ]
            }
        }
    },
    devServer: {
        open: true,//默认自动打开浏览器
        proxy: {
          '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
              "^/api": ''
            }
          },
        }
    }
}