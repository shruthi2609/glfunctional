import { createContext } from "react";
const AuthContext=createContext({loginStatus:null,handleLogout:()=>{}})
export default AuthContext