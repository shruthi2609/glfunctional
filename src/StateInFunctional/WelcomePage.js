import { useState } from "react"

const WelcomePage=(props)=>{
    const [username,setUsername]=useState("")
    const [inpUser,setInput]=useState("")
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUsername(inpUser)

    }
    return(
        <div>
            <h1>{username}</h1>
            USername:<input type='text' placeholder="enter username" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSubmit(e)}>submit</button>
        </div>
    )
}
export default WelcomePage