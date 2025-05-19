import React, { useState } from 'react'

function UseRef() {
    const [name,setName]= useState("");
  return (
    <>
    <input value={name} onChange={e=>setName(e.target.value)} />
    <div>My Name is {name}</div>
    </>
    )
}

export default UseRef