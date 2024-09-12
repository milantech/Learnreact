import React,{Component} from "react";

class Welcome extends Component {
    render(){
        return  <div> Welcome to React!{this.props.name} <br/>  <p>{this.props.children}</p></div>
           
         
       
    }
}

export default Welcome