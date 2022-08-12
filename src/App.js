
import AuthProvider from "./AuthContext/AuthProvider"
import ContextProviderEg from "./ContextCreation/ContextProviderEg"
function App()
{
    return(
        <div>
       {/** <ContextProviderEg></ContextProviderEg>*/}
       <AuthProvider></AuthProvider>
        </div>
    )
}
export default App