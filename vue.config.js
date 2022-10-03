// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  lintOnSave:false,
  css:{
    loaderOptions:{
      less:{
        //若less-loader版本小于6.0，请移出lessOptions这一级，直接配置选项
        //lessOptions:{
          modifyVars:{
            //直接覆盖变量
            // 'text-color':'#111',
            // 'border-color':'#eee',
            //'cell-font-size':'24px',

            // 或者可以通过less文件覆盖（文件路径为绝对路径）
            hack:`true;@import '/src/styles/cover.less'`
          }
        //}
      }
    }
  }
}