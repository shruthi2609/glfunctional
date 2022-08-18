import React from "react"
import ReactDOM  from "react-dom"
import { Provider } from "react-redux"
import App from './App'
import { configureStore } from "@reduxjs/toolkit"
import userReducer from './CRUD using Toolkit/userSlice'
const store=configureStore({
    reducer:{
        user:userReducer
    }
})

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
    <App></App>
    </Provider>
)
