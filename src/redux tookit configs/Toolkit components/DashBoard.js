import { useSelector } from "react-redux"
const DashBoard=()=>{
   const result= useSelector((state)=>state.userinfo.state)
return(
    <div>
        {console.log(result)}
        
        <h1>DashBoard Component</h1>
        <p>{result.email} {result.designation}</p>
    </div>

)
}
export default DashBoard