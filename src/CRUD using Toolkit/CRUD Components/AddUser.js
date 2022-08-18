import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../userSlice"
const AddUser=()=>{
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()
    const createUser=()=>{
        dispatch(addUser({username:uname,email:email}))
    }
    const handleChange=(e,key)=>{
        if(key==='uname'){
            setUname(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
    }
    return(
        <div>
            <form>
                Username:<input type='text' onChange={(e)=>handleChange(e,'uname')}></input>
                Email:<input type='text' onChange={(e)=>handleChange(e,'email')} ></input>
            </form>
            <button onClick={createUser}>add contact</button>
        </div>
    )
}
export default AddUser