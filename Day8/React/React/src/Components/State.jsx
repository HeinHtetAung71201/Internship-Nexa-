import React, { useState } from 'react'

function State() {
    //array destructuring caz of its return has two values
    const [count,setCount]=useState(0); //initialize the state variable count with the value of 0
    const increase= ()=>setCount(count+1);
  return (
    <div>
        <h1>Count :{count}</h1>
        console.log("hello");
        <button onClick={increase}>Click to Icrease</button>
    </div>
  )
}

export default State