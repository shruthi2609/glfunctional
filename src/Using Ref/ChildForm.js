import React from "react"
const ChildForm=React.forwardRef((props,ref)=>{
    const [fnameref,passwordref]=ref
    return(
        <div>
            Username:<input type='text' ref={fnameref}></input>
            Password:<input type='text' ref={passwordref}></input>
        </div>
    )
})
export default ChildForm