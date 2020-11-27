import React from 'react'
import { recMusic, newSong, Banner } from "../../util/axios"
import img1 from "../../assets/img/sq.png"
import img2 from "../../assets/img/playbtn.png"
import img3 from "../../assets/img/1.png"
import Swiper from 'swiper/js/swiper'
import "swiper/css/swiper.min.css"
import "../../assets/css/index.css"
import axios from 'axios'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            homeList: [],
            songList: [],
            bannerList: []
        }
    }

    // componentDidMount() {

    //     recMusic({
    //         limit: 6
    //     })
    //         .then(res => {
    //             if (res.code == 200) {
    //                 console.log(res);
    //                 this.setState({
    //                     homeList: res.result
    //                 })

    //             }
    //         })
    //     newSong({
    //         limit: 10
    //     })
    //         .then(res => {

    //             if (res.code == 200) {
    //                 this.setState({
    //                     songList: res.result
    //                 })

    //             }
    //         })
    //     Banner()
    //         .then(res => {
    //             console.log(res);
    //             if (res.code == 200) {
    //                 this.setState({
    //                     bannerList: res.banners
    //                 })
    //                 new Swiper('.swiper-container', {
    //                     pagination: '.swiper-pagination',
    //                     paginationClickable: true,
    //                     autoplay: {
    //                         delay: 1000
    //                     }
    //                 })

    //             }
    //         })

    // }


    // 并发
    componentDidMount() {
        axios.all([recMusic({ limit: 6 }), newSong({ limit: 10 }), Banner()]).then(axios.spread((recMusic, newSong, Banner) => {
            if (recMusic.code == 200) {
                this.setState({
                    homeList: recMusic.result,
                })
            }
            if (newSong.code == 200) {
                this.setState({
                    songList: newSong.result,
                })
            }
            if (Banner.code == 200) {
                this.setState({
                    bannerList: Banner.banners,
                })
                new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplay: {
                        delay: 1000
                    }
                })
            }
        }))
    }
    toPlay(id){
        this.props.history.push(`/list?id=${id}`)
    }


    render() {
        const { homeList, songList, bannerList } = this.state
        return (<div className='homecss'>
            {/* 轮播图 */}
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {bannerList.map((item, index) => {
                        return <div className="swiper-slide" key={index}>
                            <img className='bannerimg' src={item.imageUrl}></img>
                        </div>
                    })}
                </div>

                <div className="swiper-pagination"></div>
            </div>

            {/* 推荐歌单 */}
            <h2 className='listsong'>推荐歌单</h2>
            <ul className='clearfix ul1'>
                {homeList.map(item => {
                    return (<li key={item.id} onClick={this.toPlay.bind(this,item.id)}> 
                        <p className='playcount'>{item.playCount}</p>
                        <img src={item.picUrl}></img>
                        <p>{item.name}</p>
                    </li>)
                })}
            </ul>


            {/* 最新歌曲  首页下半部分  */}
            <h2 className='listsong'>最新热歌</h2>
            <ul className='clearfix ull'>
                {songList.map(item => {
                    return <li key={item.id}>
                        <p className='tit'>{item.name}</p>
                        <img className='ic' src={img1}></img>
                        {item.song.artists.map(item => {
                            return <span key={item.id} className='tit'>{item.name}</span>
                        })}
                        <img className='img' src={img2}></img>
                    </li>
                })}
            </ul>

            <div className='last'>
                <img src={img3}></img>
                <div className='openapp'>打开APP，发现更多好音乐</div>
                <p className='banquan'>
                    网易公司版权所有31997-2020杭州乐读科技有限公司运营
                </p>
            </div>
        </div>)
    }
}
export default Home