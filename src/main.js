/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
// 用相对路径不好，
// 原因：文件如果以后改变位置，路径代码也要改变
// 解决：绝对路径， vue脚手架内置的webpack定义了一些路径变量
// “@” 路径中的 @ 代表的是src绝对路径 //D:\code\music\music-demo\src
import "@/mobile/flexible"//自动适应宽度，改变HTML的font-size
import "@/styles/reset.css"// 初始化标签默认样式
import router from '@/router'//导入路由对象

// 全局注册vant组件（按需自动引入）
import {NavBar,Tabbar, TabbarItem, Col, Row, Image as VanImage, Cell,CellGroup,Icon,Search} from 'vant'
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);//Image可能与HTML5内置的标签重名
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
