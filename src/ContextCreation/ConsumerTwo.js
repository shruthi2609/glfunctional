import SimpleContext from "./ContextCreationEg"
import { useContext } from "react"
const ConsumerTwo=()=>{
    const {value,handleValue}=useContext(SimpleContext)
    return(
        <div>
            <h1>Consumer Two {value}</h1>
        </div>
    )
}
export default ConsumerTwo