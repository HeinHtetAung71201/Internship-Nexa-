import React, { useState } from 'react'

function Event() {
    const [text,setText]= useState("");
    const handleChange=(e)=>{
        setText(e.target.value);
    }
  return (
    <div>
        <input type="text" onChange={handleChange} />
        <p>Text : {text}</p>
    </div>
  )
}

export default Event