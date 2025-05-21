import React, { useContext } from 'react'
import Title from './Title'
import { MyContext } from '../Contexts/myContext'
function Header() {
  const name = useContext(MyContext)
  // console.log(name, "fdkjf")
  return (
    <Title/>
  )
}

export default Header