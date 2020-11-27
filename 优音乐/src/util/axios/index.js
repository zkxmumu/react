import http from "./axios"

//封装推荐歌单接口
export function recMusic(params){
    return http.get('/personalized',{
        params
    })
}
// 歌单详情
export function playDetail(params){
    return http.get('/playlist/detail',{
        params
    })
}

//封装推荐新音乐接口
export function newSong(){
    return http.get('/personalized/newsong')
    
}
// 轮播图
export function Banner(){
    return http.get('/banner')
}

// 热搜榜
export function Topst(){
    return http.get('/top/list?id=3778678')
}

// 歌曲
export function songDetail(params){
    return http.get('/song/detail',{
        params
    })
}
// 歌词
export function getLyric(params){
    return http.get('/lyric',{
        params
    })
}
// 播放
export function playUrl(params){
    return http.get('/song/url',{
        params
    })
}

// 热门搜索
export function getSearch(params){
    return http.get('/search/hot',{
        params
    })
}
// 搜索
export function Search(params){
    return http.get('/search',{
        params
    })
}

