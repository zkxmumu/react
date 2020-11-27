import React from 'react'

import ReactDOM from 'react-dom'
import "./assets/js/rem"
import "./assets/css/reset.css"

import App from "./App"

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
    , document.getElementById('root'))
