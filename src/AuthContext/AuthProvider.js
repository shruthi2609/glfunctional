import { useState } from "react";
import AuthContext from "./AuthContext";
import ClassConsumer from "./ClassConsumer";
import ConsumerFun from "./ConsumerFun";
import MainPage from "./MainPage";
import FinalClassConsumer from "./FinalClassConsumer";
const AuthProvider=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [loginValue,setLogin]=useState(false)
    const handleChange=(e,key)=>{
        if(key==='username'){
            setUsername(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    const handleLogin=()=>{
        if(username==='admin'&&password==='admin'){
            setLogin(true)
        }
        else{
            setLogin(false)
        }
    }
    const handleLogout=()=>{
        setLogin(false)
    }
    return(
        <div>
        Username<input type='text' onChange={(e)=>handleChange(e,"username")}></input>
        Password<input type='text' onChange={(e)=>handleChange(e,"password")}></input>
        <button onClick={handleLogin}>login</button>
        <AuthContext.Provider value={{loginStatus:loginValue,handleLogout:handleLogout}}>
            <MainPage></MainPage> 
           <FinalClassConsumer></FinalClassConsumer>
        </AuthContext.Provider>
       
        </div>
    )
}
export default AuthProvider