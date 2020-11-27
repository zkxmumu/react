import React from 'react'
import "../../assets/css/index.css"
import { Topst } from "../../util/axios"
import img from "../../assets/img/3.png"
import img1 from "../../assets/img/sq.png"
import img2 from "../../assets/img/playbtn.png"
class Rank extends React.Component {
    constructor() {
        super()
        this.state = {
            sonlist: []
        }
    }


    componentDidMount() {
        Topst()
            .then(res => {
                if (res.code == 200) {
                    console.log(res);
                    let a = res.playlist.tracks.filter((item, index) => {
                        return index < 10
                    })
                    this.setState({
                        sonlist: a
                    })
                }
            })
    }
to(num){
    if(num<=9){
        return '0'+num
    }else{
        return num
    }
}
    render() {
        const { sonlist } = this.state
        return (<div className='rankcss'>
            <div className='back'>
                <img className='imgcss' src={img}></img>
                <p>更新日期：2020-11-24</p>
            </div>
            <ul className='clearfix ull'>
                {
                    sonlist.map((item, index) => {
                        return <li key={index}>
                            <p className={index<3?'rankindex':'rankindexp'}>{this.to(index+1)}</p>
                            <p className='tit'>{item.name}</p>
                            <br></br>
                            <img className='iconsq' src={img1}></img>
                            {item.ar.map((item2, index) => {
                                return <p key={index} className='tit titlename '>{item2.name}</p>
                            })}
                            <img src={img2}></img>
                        </li>
                    })
                }

            </ul>
            <span >查看完整榜单</span>

            <div className='kong'></div>
        </div>)
    }
}
export default Rank