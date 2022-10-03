<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 标题 -->
    <p class="title">推荐歌单</p>
    <div>
      <van-row gutter="10">
        <van-col span="8" v-for="obj in recommendList" :key="obj.id">
          <van-image 
            width="100%"
            height="100"
            :src="obj.picUrl"
            />
            <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>
    </div>

    <p class="title">最新音乐</p>
    <!-- 使用封装组件 -->
    <SongItem v-for="obj in hotList" :key="obj.id"
      :name= 'obj.name'
      :author = 'obj.song.artists[0].name'
      :id = 'obj.id'
    ></SongItem>

    <!-- <van-cell-group>
      <van-cell :title="obj.name"  :label="obj.song.artists[0].name+'   '+obj.name" 
        v-for="obj in hotList" :key="obj.id">
        <template #right-icon>
          <van-icon name="play-circle-o" class="search-icon"></van-icon>
        </template>
      </van-cell>
    </van-cell-group> -->
  </div>
</template>

<script>
  import {recommendMusicAPI,hotMusicAPI} from '@/api'
  import SongItem from '@/components/SongItem';
  export default {
    data(){
      return {
        recommendList:[], // 推荐歌单
        hotList:[], //最新音乐
      }
    },
    async created(){
      const res = await recommendMusicAPI({limit:6});
      //console.log(res);
      this.recommendList = res.data.result;

      const songRes = await hotMusicAPI({limit:20});
      //console.log(songRes);
      this.hotList = songRes.data.result;
    },
    components:{
    SongItem,
    SongItem
}
  }
</script>

<style scoped>
  .title{
    padding: 0.266667rem 0.24rem;
    margin:0 0 0.24rem 0;
    background-color: #eee;
    color: #333;
    font-size: 15px;
  }
  .song_name{
    height: 100%;
    font-size: 0.346667rem;
    padding: 0 0.08rem;
    margin-bottom: 0.266667rem;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* 对象作为伸缩盒子模型展示 */
    -webkit-box-orient: vertical;
    /* 设置或检索伸缩盒对象的子元素的排序方式 */
    -webkit-line-clamp:2 ;
    /* 显示的行数 */
    overflow: hidden;
    /* 隐藏超出的内容 */
  }
  /* .search-icon{
    font-size: 24px;
    line-height: inherit;
    vertical-align: middle;
  } */
</style>