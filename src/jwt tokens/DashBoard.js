import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function DashBoardToken(){
    const navigate=useNavigate()
    const updateMethod=()=>{
        axios.post('http://localhost:3001/update',{},{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('accesstoken')
            }
        }).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    }
    const logoutMethod=()=>{
       localStorage.removeItem('accesstoken')
       navigate('/')
    }
    return(
        <div>
            <button onClick={updateMethod}>update</button>
            <button>delete</button>
            <button onClick={logoutMethod}>logout</button>
        </div>

    )
}
export default DashBoardToken