import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <> 
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
        </nav>
        <hr></hr>
        <Outlet/> 
        {/* Nested components render here */}
    </>
  )
}
