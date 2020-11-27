import React from 'react'
import "../../assets/css/index.css"
import axios from "axios"
import { getSearch, Search } from "../../util/axios"

class Ssearch extends React.Component {
    constructor() {
        super()
        this.state = {
            searchList: [],
            searchinput: []
        }
    }
    componentDidMount() {
        axios.all([getSearch({ limit: 15 })]).then(axios.spread((getSearch) => {
            if (getSearch.code == 200) {
                console.log(getSearch, "getSearch");
                this.setState({
                    searchList: getSearch.result.hots,
                })
            }

        }))
    }
    ininput(e) {
        let a = document.getElementById('shuru')
        a.value = e
    }

    change(e) {
        // console.log(Search,"search");
        console.log(e);
        if (e.keyCode == 13) {
            Search({
                keywords: document.getElementById('shuru').value
            })
                .then(res => {
                    console.log(res,'resres');
                    this.setState({
                        searchinput: res.result.songs
                    })
                })
        }

    }

    render() {
        const { searchList , searchinput} = this.state
        return (<div className='searchcss'>
            <div className='searchtop'>
                <i className='icon'></i>
                <input type='search' name='search' id='shuru' onKeyDown={this.change.bind(this)} className='inputcss' placeholder='搜索歌曲，歌手，专辑' ></input>
            </div>
            <div className={searchinput.length==0?'searchbottom ':'searchbottom show'} >
                <h3 className='title'>热门搜索</h3>
                <ul className='list'>
                    {searchList.map((item, index) => {
                        return <li className='item' key={index}>
                            <a className='link' href="#" onClick={this.ininput.bind(this, item.first)}>
                                {item.first}
                            </a>
                        </li>
                    })}
                </ul>
            </div>
            <div className={searchinput.length!=0?'':'lastsearch show'} >
                <h2>搜索:</h2>
                <i className='icon1'></i>
                <ul className='searchul'>
                    {searchinput.map((item, index) => {
                    return <li key={item.id}>
                            <p>{item.name}</p>
                        </li>
                    })}

                </ul>
            </div>
        </div>)
    }
}
export default Ssearch