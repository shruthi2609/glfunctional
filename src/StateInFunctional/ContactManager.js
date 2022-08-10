import { useState } from "react";
import './ContactManager.css'
const ContactManager=(props)=>{
    const [contact,setContact]=useState(props.data)
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const getClassName=(item)=>{
        if(item.address==='IND'){
            return "country-ind"
        }
        else{
            return "country-us"
        }
    }
    const handleChange=(e,key)=>{
        if(key==='uname'){
            setUsername(e.target.value)
        }
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='phone'){
            setPhone(e.target.value)
        }
        if(key==='address'){
            setAddress(e.target.value)
        }
    }
    const handleCreate=(e)=>{
        e.preventDefault()
        const obj={
            id:Date.now(),
            fname:username,
            email:email,
            phone:phone,
            address:address
        }
        setContact([...contact,obj])
    }
    const deleteItem=(itemid)=>{
       const result= contact.filter((item)=>item.id!==itemid)
       setContact(result)

    }
    return(
        <div>
            {console.log(contact)}
            <h1>Contact Manager</h1>
        <form>
            Username:<input type='text' onChange={(e)=>handleChange(e,"uname")}></input>
            Email:<input type='text' onChange={(e)=>handleChange(e,"email")}></input>
            Phone:<input type='text' onChange={(e)=>handleChange(e,"phone")}></input>
            Address:<input type='text' onChange={(e)=>handleChange(e,"address")}></input>
            <button onClick={(e)=>handleCreate(e)}>create contact</button>
        </form>
            {
                contact.map((item)=>(
                    <div >
                        <h1 className={getClassName(item)}>{item.fname}</h1>
                        <p>{item.phone}</p>
                        <p>{item.email}</p>
                        <p>{item.address}</p>
                        <button onClick={()=>deleteItem(item.id)}>delete</button>
                        <button>update</button>
                    </div>
                ))
            }
        </div>
    )

}
export default ContactManager