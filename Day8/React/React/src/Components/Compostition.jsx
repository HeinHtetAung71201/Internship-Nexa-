
import React from 'react'

//child component
function Button({label,event}){
    return <button onClick={event} >{label}</button>
}
//parent component
function Compostition() {
    const handleClick=()=>{
        alert("Clicked");
    }
  return (
   <div>
        <h1>Compostion</h1>
        {/* //composition */}
        <Button label="Click me" event={handleClick} className=""/>
        <Button label="Submit" event={handleClick}/>
   </div>
  )
}

export default Compostition