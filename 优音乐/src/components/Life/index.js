import React from "react";
import Son from './indexson'
class Home extends React.Component {
  /* 
     React中的生命周期：
     组件一加载触发了前四个生命周期函数，其中两个即将被淘汰
     constructor()  初始化
     componentWillMount() 将要去挂载  。。。目前这版本就不再维护了
     render() 渲染
     componentDidMount() 挂载,执行异步操作，调取接口，获取数据之后，重新更新视图
     当数据发生变化的时候，逻辑流程
     首先判断是否存在shouldComponentUpdate,如果存在，看是否返回 true或者false，如果返回false生命周期结束，页面不会更新也不会重新渲染。如果返回了true，那么生命周期函数触发
     componentWillUpdate()  ====》将要更新 。。。目前这版本就不再维护了
     render() ===> 渲染
     componentDidUpdate() ===>更新完成

     用到比较多，经常使用的生命周期：
     componentDidMount(){} //挂载
     */
  constructor() {
    super();
    console.log("======初始化=======");
    this.state = {
      num: 100,
    };
  }
  componentWillMount() {
    console.log("======将要挂载=======");
  }
  componentDidMount() {
    console.log("======挂载完成=======");
  }
  componentWillUpdate() {
    console.log("======将要更新=======");
  }
  componentDidUpdate() {
    console.log("======更新完成=======");
  }
  shouldComponentUpdate(newProps,newState){
      //Returned undefined instead of a boolean value. Make sure to return true or false. 如果你要调用这个生命周期，那么你必须返回一个布尔类型，不是true就是false
      //如果返回false，代表你不修改，生命周期结束
      //可以进行一些筛选，有一些数据，我们并不想渲染页面，那么我们就可以剔除掉它
    console.log("======你是否将要更新=======");
    console.log(newState,'新的state属性')
    console.log(newProps,'新的props属性')
    // return true
    // return false
    //奇数不更新，偶数更新
    if(newState.num%2===0){
        return true
    }else{
        return false
    }
  }
  //封装一个修改数量的方法
  changeNum() {
    this.setState({
      num: this.state.num + 1,
    });
  }
  render() {
    const { num } = this.state;
    console.log("======渲染=======");
    return (
      <div>
        <h1>生命周期案例</h1>
        <div>
          <button onClick={() => this.changeNum()}>点击我修改数量</button>
        </div>
        <h2>当前数量是--{num}</h2>
        <hr/>
        <Son num={num}></Son>
      </div>
    );
  }
}
export default Home;
