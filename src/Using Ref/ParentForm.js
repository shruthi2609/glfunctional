import { useRef } from "react";
import ChildForm from "./ChildForm";
function ParentForm(){
    const fnameref=useRef()
    const passwordref=useRef()
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(fnameref)
        console.log(passwordref)
    }
    return(
        <div>
            <h1>Simple Ref in functional component</h1>
            <form>
               <ChildForm ref={[fnameref,passwordref]}></ChildForm>
               <button onClick={(e)=>handleLogin(e)}>login</button>

            </form>
        </div>
    )
}
export default ParentForm