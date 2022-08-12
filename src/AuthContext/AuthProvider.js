import { useState } from "react";
import AuthContext from "./AuthContext";
import MainPage from "./MainPage";
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
    return(
        <div>
        Username<input type='text' onChange={(e)=>handleChange(e,"username")}></input>
        Password<input type='text' onChange={(e)=>handleChange(e,"password")}></input>
        <button onClick={handleLogin}>login</button>
        <AuthContext.Provider value={{loginStatus:loginValue}}>
            <MainPage></MainPage>
        </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider