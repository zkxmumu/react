import React from 'react'

import Index from "./pages/index"
import Play from "./pages/play"
import List from "./pages/list"

import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
class App extends React.Component {
    render() {
        return (<div>
            <Switch>
                <Route path='/index' component={Index}></Route>
                <Route path='/list' component={List}></Route>
                <Route path='/play' component={Play}></Route>
                <Redirect to='/index'></Redirect>
            </Switch>
        </div>)
    }
}
export default App

// import React from 'react'
// import Login from "./components/Login/login"
// import Index from "./components/Life/index"
// // import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
// class App extends React.Component {
//     render() {
//         return (<div>
//             {/* <Switch>
//                 <Route path='/login' component={Login}></Route>
//                 <Redirect to='/login'></Redirect>
//             </Switch> */}
//             <Index></Index>
//         </div>)
//     }
// }
// export default App