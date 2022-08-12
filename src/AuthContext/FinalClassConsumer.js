import React from "react";
import AuthContext from "./AuthContext";
class FinalClassConsumer extends React.Component{
    constructor(props){
        super(props)
    }
    static contextType=AuthContext
    render(){
        console.log('render of class',this.context)
        return(
            <div>
                Class Consumer
                <button onClick={()=>this.context.handleLogout()}>logout</button>
            </div>
        )
    }
}export default FinalClassConsumer