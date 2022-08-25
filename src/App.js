import LoginCookies from './cookies and jwt/LoginCookies'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import DashboardCookies from './cookies and jwt/DashboardCookies'
import LoginComponent from './cookies and jwt/LoginComponent'


function App()
{
    return(
       <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
            <Route path='/dashboard' element={<DashboardCookies></DashboardCookies>}></Route>
        </Routes>
        </BrowserRouter>
       </div>
    )
}
export default App