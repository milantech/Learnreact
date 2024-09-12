import React from "react";

const Greettwo = (props) => { 
    return (
        <div>
        <h1>Welcome {props.name}</h1>
        {props.children}
        </div>
    )
};

export default Greettwo