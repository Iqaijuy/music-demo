<template>
    <van-cell-group>
      <van-cell :title="name"  :label="author+'   '+name" 
        @click="$router.push('/comment')"
      >
        <template #right-icon>
          <van-icon name="play-circle-o" class="search-icon" @touchstart = 'palyFn'></van-icon>
        </template>
      </van-cell>
    </van-cell-group>
</template>

<script>
export default {
  props:{
    name:String, //歌名
    author:String, //作者
    id: Number, //歌曲id
  },
  methods:{
    palyFn(){
      this.$router.push({
        path:'/play',
        query:{
          id:this.id
        }
      })
    },
  }
}
</script>

<style>
  .search-icon{
    font-size: 24px;
    line-height: inherit;
    vertical-align: middle;
  }
</style>