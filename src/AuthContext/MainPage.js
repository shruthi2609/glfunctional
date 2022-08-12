import AuthContext from "./AuthContext"
import { useContext } from "react"
const MainPage=()=>{
    const {loginStatus,handleLogout}=useContext(AuthContext)
    return(
        <div>
            {
                loginStatus?<h1>Main Page</h1>:<h1>Please login</h1>
            }
            
        </div>
    )
}
export default MainPage