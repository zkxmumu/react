import React from 'react'
import "../../assets/css/login.css"
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            userInfo: {
                username: '',
                password: ''
            }
        }
    }
    getName(e) {
        console.log(e.target.value, '事件')
        let { userInfo } = this.state
        userInfo.username = e.target.value
        this.setState({
            userInfo
        })
    }
    getPass(e) {
        
        let { userInfo } = this.state
        userInfo.password = e.target.value
        this.setState({
            userInfo
        })
    }
    login(){
        console.log(this.state.userInfo,'表单体')
    }
    render() {
        return (<div>
            姓名：<input type='text' onChange={this.getName.bind(this)}></input>
            <br></br>
            密码：<input type='text' onChange={this.getPass.bind(this)}></input>
            <br></br>
            <button onClick={this.login.bind(this)}>登录</button>
        </div>)
    }
}
export default Login