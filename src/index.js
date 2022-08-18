import React from "react"
import ReactDOM  from "react-dom"
import { Provider } from "react-redux"
import App from './App'
import store from './CRUD using Toolkit/store'
import {fetchUsers} from './CRUD using Toolkit/userSlice'
store.dispatch(fetchUsers())
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
    <App></App>
    </Provider>
)
