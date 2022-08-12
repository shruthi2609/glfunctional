import ConsumerOne from "./ConsumerOne"
import ConsumerTwo from "./ConsumerTwo"
import SimpleContext from "./ContextCreationEg"
function ContextProviderEg(){
    const conValue='new value'
    return(
        <div>
    <SimpleContext.Provider value={conValue}>
        <ConsumerOne></ConsumerOne>
        <ConsumerTwo></ConsumerTwo>
    </SimpleContext.Provider>
    </div>
    )
}
export default ContextProviderEg