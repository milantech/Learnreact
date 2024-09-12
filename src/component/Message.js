import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            msg:"Welcome msg"
        }
    }

    changeMsg(){
        this.setState({
            msg : "Thank you for coming!"
        })
    }

    render(){
        return(
            <div>
            
            <h1>Sample message {this.state.msg}</h1>
            <button onClick={()=>this.changeMsg()}>Check</button>
            </div>
        ) 
    }
}

export default Message;