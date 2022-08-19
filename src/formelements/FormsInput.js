import {useState} from 'react'
function FormsInput(){
    const [selectedValue,setValue]=useState('C')
    const [selectedCheck,setCheck]=useState(true)
    const [attending,setAttending]=useState('')
    const handleChange=(e)=>{
        console.log(e)
    }
    const handleCheckBox=(e)=>{
        console.log(e)
        setCheck(!selectedCheck)
        setAttending(e.target.name)
    }

    return(
        <div>
            
            <select onChange={(e)=>handleChange(e)}>
                <option value='C'>C</option>
                <option value='HTML'>HTML</option>
                <option value='Python'>Python</option>
                <option value='React'>React</option>
            </select>
           Are you attending the workshop? yes <input type='checkbox' checked={selectedCheck} onChange={(e)=>handleCheckBox(e)} name='attending'></input>
           maybe <input type='checkbox' checked={selectedCheck} onChange={(e)=>handleCheckBox(e)} name='not attending'></input>

        </div>
    )
}
export default FormsInput