import ViewUsers from "./CRUD using Toolkit/CRUD Components/ViewUsers"
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import AddUser from "./CRUD using Toolkit/CRUD Components/AddUser"
import UpdateUser from "./CRUD using Toolkit/CRUD Components/UpdateUser"
function App()
{
    return(
        <div>
            <BrowserRouter>
                <Link to='/'>View Contacts</Link>
                <Link to='/add'>Add Contact</Link>
                <Link to='/update'>Update Contact</Link>
                <Routes>
                    <Route path='/' element={<ViewUsers></ViewUsers>}></Route>
                    <Route path='/add' element={<AddUser></AddUser>}></Route>
                    <Route path='/update' element={<UpdateUser></UpdateUser>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App