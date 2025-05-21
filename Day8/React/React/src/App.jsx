import { createContext, useEffect, useState } from 'react'
// import './App.css'
import Greet from './Components/Greet'
import State from './Components/State'
import StatePrictical from './Components/StatePrictical'
import UseEffect from './Components/UseEffect'
import Compostition from './Components/Compostition'
import UseRef from './Components/UseRef'
import Event from './Components/Event'
import Person1Hof from './Components/Person1Hof'
import Person2Hof from './Components/Person2Hof'
import CRUD from './Components/CRUD'
import FetchingAx from './Components/FetchingAx'
import Context from './Components/Context'
// import { Apps } from './Contexts/Apps'
import Header from './Components/Header'
import { MyContext } from './Contexts/myContext'
import { Container } from './ToDoList/Container'
import { Title } from './ToDoList/Title'
import { InputBox } from './ToDoList/InputBox'
import { Record } from './ToDoList/Record'

function App() {
 
  // const [count, setCount] = useState(0)
  return (
    <>
      {/* <Greet/>
      <StatePrictical/>
     <UseEffect/> 
      <Compostition/>
      <UseRef/> 
      <Event/>
       <Person1Hof/>
      <Person2Hof/>
      <CRUD/> */}
      {/* <State/> */}
      {/* <FetchingAx/> */}
      {/* <Context/> */}
      
    {/* <CRUD/> */}
    {/* <Apps/> */}
    {/* <MyContext.Provider value="fkdfj test kdjf">
      <Header />
    </MyContext.Provider> */}

    <Container>
      <Title/>
      <InputBox/>
      {/* <Record/> */}
    </Container>
    
</>
  )
}

export default App
