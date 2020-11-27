import React from 'react'

import "../assets/css/index.css"
import Home from "../views/home/home"
import Rank from "../views/rank/rank"
import Search from "../views/search/search"
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'

import img1 from "../assets/img/title.png"
class Index extends React.Component {
    render() {
        return (<div className='appcss'>
            <div className='top'>
                <img src={img1} />
                <span>下载App</span>
            </div>
            <div className='navbar'>
                <NavLink to='/index/home' activeClassName='active'>推荐音乐</NavLink>
                <NavLink to='/index/rank' activeClassName='active'>排行榜</NavLink>
                <NavLink to='/index/search' activeClassName='active'>搜索</NavLink>
            </div>

            <Switch>
                <Route path='/index/home' component={Home}></Route>
                <Route path='/index/rank' component={Rank}></Route>
                <Route path='/index/search' component={Search}></Route>
                <Redirect to='/index/home'></Redirect>
            </Switch>
        </div >)
    }
}
export default Index