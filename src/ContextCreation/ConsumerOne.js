import SimpleContext from "./ContextCreationEg"
import { useContext } from "react"
const ConsumerOne=()=>{
    const {value,handleValue}=useContext(SimpleContext)
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={handleValue}>change</button>
        </div>
    )
}
export default ConsumerOne