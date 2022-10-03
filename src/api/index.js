//统一的出口
import { recommendMusic,hotMusic } from "@/api/Home";
import { hotSearch,searchResult } from "@/api/Search";
import {getSongById, getLyricById} from "@/api/Play"
 

export const recommendMusicAPI = recommendMusic // 把网络请求方法拿出来导出
export const hotMusicAPI = hotMusic //把获取最新音乐的网络请求的方法拿出

export const hotSearchAPI = hotSearch //热搜
export const searchResultAPI = searchResult//搜索结果

export const getSongByIdAPI = getSongById //获得歌曲
export const getLyricByIdAPI = getLyricById //获得歌词