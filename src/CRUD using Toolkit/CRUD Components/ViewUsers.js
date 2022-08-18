import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../userSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
const ViewUsers=()=>{
    const dispatch=useDispatch()
    
    const {loading,usersData}=useSelector((state)=>state.user.value)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
    return(
        <div>
            <h1>List of users</h1>
           
            {
                usersData.map((item)=>(
                    <div>
                        <h1>{item.username}</h1>
                        <p>{item.email}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default ViewUsers