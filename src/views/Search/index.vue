<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- 热门搜索 -->
    <van-search v-model="searchValue" placeholder="请输入搜索关键字" shape="round"></van-search>
    <div class="search_wrap" v-if="resultList.length === 0">
      <p class="hot_title">热门搜索</p>
      <!-- 关键字 -->
      <ul class="hot_name_wrap">
        <li class="hot_item" v-for="(obj, index) in hotList" :key="index" @click="btn(obj.first)">{{obj.first}}</li>
      </ul>

      <!-- 历史记录 -->
      <p class="hot_title">历史搜索</p>
      <ul class="hot_name_wrap" v-if="historyList.length !== 0">
        <li class="hot_item" v-for="(obj, index) in historyList" :key="index" @click="btn(obj)">{{obj}}</li>
      </ul>
    </div>
    
    <!-- 搜索结果 -->
    <div v-else>

      <SongItem v-for="obj in resultList" :key="obj.id"
        :name = "obj.name"
        :author="obj.ar[0].name+'   '+obj.name"
        :id = 'obj.id'
      ></SongItem>
      <!-- <van-cell-group >
        <van-cell :title="obj.name"  :label="obj.ar[0].name+'   '+obj.name" 
          v-for="obj in resultList" :key="obj.id">
          <template #right-icon>
            <van-icon name="play-circle-o" class="search-icon"></van-icon>
          </template>
        </van-cell>
      </van-cell-group> -->
    </div>


  </div>
</template>

<script>
import { hotSearchAPI,searchResultAPI } from "@/api"
import SongItem from "@/components/SongItem.vue";
export default {
    data() {
        return {
            searchValue: "",
            hotList: [],
            resultList: [],
            historyList: [],
            tempHistoryList: [],
            timer: null, //保存定时器
        };
    },
    async created() {
        const res = await hotSearchAPI();
        console.log(res);
        this.hotList = res.data.result.hots;
    },
    methods: {
        async btn(str) {
            this.searchValue = str; //点击关键字给输入框显示
            const res = await searchResultAPI({
                type: 1,
                keywords: str,
            });
            console.log(res);
            this.resultList = res.data.result.songs;
            setTimeout(() => {
                clearTimeout(this.timer);
            });
        }
    },
    watch: {
        searchValue(val) {
            clearTimeout(this.timer); // 防止输入框空值，还显示请求回来的数据-保证最后那次网络请求定时器关闭
            if (val.length === 0)
                return this.resultList = []; //若输入框没有输入
            this.timer = setTimeout(async () => {
                //搜索框里的值改变（点击/键盘输入），立即执行
                console.log(this.searchValue);
                const res = await searchResultAPI({
                    type: 1,
                    keywords: val,
                });
                console.log(res);
                this.resultList = res.data.result.songs;
                this.tempHistoryList.push(val);
                this.historyList = Array.from(new Set(this.tempHistoryList));
                // console.log(this.historyList)
            }, 300);
        }
    },
    components: { SongItem }
}
</script>

<style scoped>
  /* 覆盖vant组件样式，除了使用less文件外，还可以直接找到类名，直接覆盖 */
  /* deep控制scoped加入的随机属性，放到选择器前面，确保能够选中组件内的标签类名 */
  /deep/ .van-field__control{
    font-size: 14px !important;
  }

  /* 搜索容器的样式 */
  .search_wrap{
    padding: 0.166667rem;
  }

  /* 热门搜索文字标题样式 */
  .hot_title{
    font-size: 0.32rem;
    color: #666;
  }

  /* 热门搜索的关键字 */
  .hot_name_wrap{
    margin: 0.266667rem 0;
  }
  .hot_item{
    display: inline-block;
    height: 0.853333rem;
    margin-right: 0.213333rem;
    margin-bottom: 0.213333rem;
    padding: 0 0.373333rem;
    font-size: 0.373333rem;
    line-height: 0.853333rem;
    color: #333;
    border-color: #d3d4da;
    border-radius: 0.853333rem;
    border: 1px solid #d3d4da;
  }
</style>