import { useState } from "react"
const WithDestructing=(props)=>{
    const [count,setCount]=useState(0)
    const [isloggedIn,setLogin]=useState(false)
  /*  const [state,setState]=useState({
        count:0,
        isLoggedIn:false
    })*/
    const increment=(e)=>{
        e.preventDefault()
       setCount(count+1)
    }
    const decrement=(e)=>{
        e.preventDefault()
        setCount(count-1)
    }
    return(
        <div>
            <h1>Counter component</h1>
            <button onClick={(e)=>increment(e)}>+</button>
            {count}
            <button onClick={(e)=>decrement(e)}>-</button>

        </div>
    )
}
export default WithDestructing