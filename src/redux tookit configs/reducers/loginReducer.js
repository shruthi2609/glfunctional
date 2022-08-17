import { createSlice } from "@reduxjs/toolkit";
const initialValue={email:'dummy',designation:'admin',username:'dummy'}

const userSlice=createSlice({
name:'userinfo',

initialState:{
    value:initialValue
},

reducers:{
    login:(state,action)=>{
        console.log('login')
    },
    logout:(state)=>{
        console.log('logout')
    }
}
})

export default userSlice.reducer
