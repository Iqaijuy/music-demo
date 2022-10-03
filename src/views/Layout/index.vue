<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <van-nav-bar :title="activeTitle" fixed/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar  route @change="changeFn">
      <van-tabbar-item icon="home-o" name="首页" replace to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" name="搜索" replace to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeTitle: this.$route.meta.title//导航标题：拿到当前路由所在信息里meta里title使用
    }
  },
  methods:{
    changeFn(str){
      //console.log(str);
      this.activeTitle = str;//法一
    }
  },
  watch:{
    // 法二、侦听路由改变
    $route(){
      //路由改变时
      this.activeTitle = this.$route.meta.title
    }
  }
}
</script>

<style scoped>
  .main{
    padding-top: 46px;
    padding-bottom: 60px;
  }
</style>