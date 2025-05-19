import React, { useState } from 'react'

function Person2Hof() {
    const [getAmt, setAmt]= useState(0);
    console.log(getAmt)
  const incAmt= ()=>{
    setAmt(getAmt+10);
  }
  return (
    <div>
        <p>Kohein is offering $10 : {getAmt}</p>
        <button onClick={incAmt}>Increase money</button>
    </div>
  )
}

export default Person2Hof