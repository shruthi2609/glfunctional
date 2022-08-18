
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeUser } from "../userSlice";
const ViewUsers=()=>{
    const dispatch=useDispatch()
    const {loading,usersData}=useSelector((state)=>state.user.value)
    const handleDelete=(userid)=>{
        dispatch(removeUser({userid:userid}))
    }
    return(
        <div>
            {console.log('global state',usersData)}
            <h1>List of users</h1>
            {
                usersData.map((item)=>(
                    <div>
                        <h1>{item.username}</h1>
                        <p>{item.email}</p>
                        <button onClick={()=>handleDelete(item.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default ViewUsers