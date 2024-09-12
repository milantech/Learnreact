import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }

    increamentCounter(){
        // this.setState({
        //     count:this.state.count+1
        // },()=>{
        //     console.log(this.state.count,"LN15")
        // })
        // console.log(this.state.count,"LN16")
        this.setState((x)=>({
            count:x.count + 1
        }),()=>{
            console.log(this.state.count,"LN21")
        })
      
    }

    incrementFive(){
        this.increamentCounter()
        this.increamentCounter()
        this.increamentCounter()
        this.increamentCounter()
        this.increamentCounter()
        this.increamentCounter()
        this.increamentCounter()
        this.increamentCounter()
    }
  render() {
    return (
      <div>
        count {this.state.count}
        <button onClick={()=>this.increamentCounter()}>Check counter</button>
        <button onClick={()=>this.incrementFive()}>Increment Five</button>
      </div>
    )
  }
}

export default Counter
