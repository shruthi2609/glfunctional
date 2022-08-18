import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchUsers=createAsyncThunk('/CRUD using Toolkit/fetchUsers',async ()=>{
try{
    const result=await axios.get('https://jsonplaceholder.typicode.com/users')
   
    return result.data
}
catch(e){
    console.log(e)
}
})
const initialValue={
    usersData:[],
    loading:true
}
const userSlice=createSlice({
    name:'user',
    initialState:{
        value:initialValue
    },
    reducers:{
        addUser:(state,action)=>{
            console.log('action is triggered',action)
            state.value.usersData.push(action.payload)
        },
        removeUser:(state,action)=>{
            state.value.usersData=state.value.usersData.filter((item)=>item.id!==action.payload.userid)
        },
        updateUser:(state,action)=>{
            console.log(action)
           const userData=state.value.usersData.find((item)=>item.id==action.payload.userid)
          
           if(userData){
            userData.email=action.payload.newemail
           }
          
        }
    },
    extraReducers:{
        [fetchUsers.pending]:(state,action)=>{
            console.log("pending",action)
            state.loading=true
        },
        [fetchUsers.fulfilled]:(state,action)=>{
            console.log('fullfiled',action)
            state.loading=false
            state.value.usersData=[...state.value.usersData,...action.payload]
            
        },
        [fetchUsers.rejected]:(state,action)=>{
            console.log('fullfiled',action)
            state.loading=false
        }
    }
})
export const {addUser,removeUser,updateUser}=userSlice.actions
export default userSlice.reducer;