import AuthContext from "./AuthContext"
import { useContext } from "react"
import ClassConsumer from "./ClassConsumer"
const ConsumerFun=()=>{
    const {authStatus,handleLogout}=useContext(AuthContext)
    return(
        <ClassConsumer logout={handleLogout}></ClassConsumer>
    )
}
export default ConsumerFun