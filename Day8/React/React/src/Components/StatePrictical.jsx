import React, { useState } from 'react'

function StatePrictical() {
    //state variables for form inputs
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const [submitted,setSubmitted]=useState("");
    //form submit handler
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted("submit");
    }
  return (
    <div>
         <h2>User Registration Form</h2>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>

      <div>
        <h2>Submitted Data</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Submitted: {submitted}</p>
      </div>
    </form>
    </div>
  )
}

export default StatePrictical