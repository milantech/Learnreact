import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      myname: "this is state for test",
    };
  }
  render() {
    return (
      <div>
        {" "}
        Welcome to React!{this.props.name} <br />{" "}
        <p>
          {this.props.children} | {this.state.myname}
        </p>
      </div>
    );
  }
}

export default Welcome;
