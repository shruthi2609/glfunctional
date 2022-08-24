import FormsInput from "./formelements/FormsInput"
import FormComponentJoi from "./Joi Browser Eg/FormComponent"
import LoginToken from "./jwt tokens/LoginToken"
import FormComponent from "./UseForm Example/FormComponent"
import ParentForm from "./Using Ref/ParentForm"
import SampleRefComponent from "./Using Ref/SampleRefComponent"
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import DashBoardToken from "./jwt tokens/DashBoard"

function App()
{
    return(
       <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginToken></LoginToken>}></Route>
            <Route path='/dashboard' element={<DashBoardToken></DashBoardToken>}></Route>
        </Routes>
        </BrowserRouter>
       </div>
    )
}
export default App