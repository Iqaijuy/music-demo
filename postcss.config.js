module.exports = {
  plugins:{
    'postcss-pxtorem':{
      // 能够把所有元素的px单位转成rem
      // rootValue：转换px的基准值
      // 例如一个元素宽是75px，转换成rem之后就是2rem
      rootValue: 37.5,
      propList:['*']
    }
  }
}
// postcss技术：webpack插件（转化/降级css代码）
// postcss-pxtorem插件：把px都转换成rem
// 公式：量出宽度 / 当前基准html的font-size 得出rem