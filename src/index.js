import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import loginReducer from './redux tookit configs/reducers/loginReducer'
const store=configureStore({
    reducer:{
        //fill it
        userinfo:loginReducer
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
</Provider>
);

