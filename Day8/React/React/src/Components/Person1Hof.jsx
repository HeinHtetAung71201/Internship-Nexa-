import React, { useState } from 'react'

function Person1Hof() {
  
  return (
    <div>
        <p>Jimmy is offering $10 : {getAmt}</p>
        <button onClick={incAmt}>Increase money</button>
    </div>
  )
}

export default Person1Hof