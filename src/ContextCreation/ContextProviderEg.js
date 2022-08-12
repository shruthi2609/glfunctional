import ConsumerOne from "./ConsumerOne"
import ConsumerTwo from "./ConsumerTwo"
import SimpleContext from "./ContextCreationEg"
import {useState} from 'react'
function ContextProviderEg(){
   const [conValue,setConValue]=useState('this is a old value')
   const changeValue=()=>{
    setConValue('this is a new value')
   }
    return(
        <div>
    <SimpleContext.Provider value={{value:conValue,handleValue:changeValue}}>
        <ConsumerOne></ConsumerOne>
        <ConsumerTwo></ConsumerTwo>
    </SimpleContext.Provider>
    </div>
    )
}
export default ContextProviderEg