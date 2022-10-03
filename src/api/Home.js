//封装要发起的请求
import request from '@/utils/request'//把网络请求工具拿过来（相当于一台车）

//封装网络请求方法（工具人）
// 推荐歌单
export const recommendMusic = params => request({
  url:'/personalized',
  params
})

// 获取最新音乐
export const hotMusic = params =>request({
  url:'/personalized/newsong',
  params
})