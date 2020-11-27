import React from "react";
class Son extends React.Component {
  /* 
  父子组件嵌套的生命周期流程：
  父初始化=>父将要挂载=>父渲染=>子初始化=>子将要挂载=>子渲染=>子挂载完成=>父挂载完成
  */
  constructor() {
    super();
    console.log("======初始化儿子吱吱吱吱=======");
    this.state = {
      num: 100,
    };
  }
  componentWillMount() {
    console.log("======将要挂载儿子吱吱吱吱=======");
  }
  componentDidMount() {
    console.log("======挂载完成儿子吱吱吱吱=======");
  }
  componentWillUpdate() {
    console.log("======将要更新儿子吱吱吱吱=======");
  }
  componentDidUpdate() {
    console.log("======更新完成儿子吱吱吱吱=======");
  }
  shouldComponentUpdate(newProps,newState){
    console.log("======你是否将要更新儿子吱吱吱吱=======");
    if(newState.num%2===0){
        return true
    }else{
        return false
    }
  }
  componentWillReceiveProps(newProps){
    //组件是否将要接收属性
    console.log(newProps,'aaaaaa')
    //newProps是谁？ 父组件传递属性的时候，此属性发生变化的时候，我们可以在子组件中的componentWillReceiveProps()中接收到
  }
  render() {
    const { num } = this.state;
    console.log("======渲染儿子吱吱吱吱=======");
    return (
      <div>
        <h1>生命周期案例</h1>
        <h2>父组件的num值--{this.props.num}</h2>
      </div>
    );
  }
}
export default Son;
