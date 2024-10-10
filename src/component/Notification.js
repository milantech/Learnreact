import {Component} from 'react'
class Notification extends Component {
    constructor(){
        super()
        this.state = {
            data:0
        }

        
    }
    clickBtn(){
        this.setState({data:this.state.data+1})
    }
    render(){
        return( <div> {this.state.data}<br/>
            <button onClick={()=>this.clickBtn()}>change button</button>
            <h1>Notification</h1>
            </div>)
    }
}

export default Notification