import React from "react";
class ClassConsumer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                Class Consumer
                <div>
           <button onClick={()=>this.props.logout()}>logout</button>
            
        </div>
            </div>
        )
    }
}export default ClassConsumer