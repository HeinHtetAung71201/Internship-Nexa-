import React, { createContext, useState } from 'react'
import Toolbar from './Toolbar';

function Context() {
    const themeContext= createContext('light');
    //themeContext has two components on it
    //themeContex.provider and 
    // themeContext.Consumer
    // providing value
    const [theme,setTheme]= useState('light')
  return (
    <div>
        <themeContext.Provider value={{theme,setTheme}}>
            console.log("hello");
           <Toolbar/>
        </themeContext.Provider>
    </div>
  )
}

export default Context