import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count,setcount]=useState(0);
    useEffect(()=>{
        console.log("Component rendered or count changed");
    },[count]);//useEffect(effect, list)
  return (
    <div>
        <p>Counts{count}</p>
        <button onClick={()=>setcount(count+1)}>Increase</button>
    </div>
  )
}

export default UseEffect