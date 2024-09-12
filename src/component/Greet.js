import React from "react";
import { useState } from "react";



function Greet(){
    const [data,setData] = useState(0)
    function btnClick(){
       // alert('adsfasdf')
        setData(data+1)
     }
    return (
        <div>
        <h1> hello {data}</h1>
        <br/>
        <button onClick={btnClick}>New btn with use state click</button>
        <button onClick={()=>btnClick()}>btn click</button>
        </div>
    )
}

export default Greet;