import { useRef } from "react";
function SampleRefComponent(){
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
               Username:<input type='text' ref={fnameref}></input>
               Password:<input type='text' ref={passwordref}></input>
               <button onClick={(e)=>handleLogin(e)}>login</button>

            </form>
        </div>
    )
}
export default SampleRefComponent