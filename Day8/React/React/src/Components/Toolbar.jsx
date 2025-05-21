import React, { useContext } from 'react'

function Toolbar() {
    // consuming the useContext
    const{theme,setTheme}= useContext(themeContext);
  return (
    <div style={{background: theme === "dark" ? '#333' : '#eee'}}>
        <button onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Toggle Theme (currently {theme})
        </button>
        
    </div>
  )
}

export default Toolbar