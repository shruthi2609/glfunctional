import axios from 'axios'
import {useNavigate} from 'react-router-dom'
axios.defaults.withCredentials=true // add this is important
function DashBoardCookies(){
    const navigate=useNavigate()

    const updateMethod=()=>{
        axios.post('http://localhost:3001/createadmin',{
            "fname":"peter",
            "email":"peter@gmail.com",
            "phone":9283928388000,
            "password":"peter@1234"
        },{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    }

    const logoutMethod=()=>{
       localStorage.removeItem('accesstoken')
       navigate('/')
    }
    return(
        <div>
            <button onClick={updateMethod}>create admin</button>
            <button>delete</button>
            <button onClick={logoutMethod}>logout</button>
        </div>

    )
}
export default DashBoardCookies