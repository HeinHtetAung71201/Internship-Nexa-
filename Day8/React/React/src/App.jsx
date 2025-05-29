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
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { About } from './ReactRouter/About'
import { Contact } from './ReactRouter/Contact'
import { Home } from './ReactRouter/Home'
import { Layout } from './ReactRouter/Layout'
import { Male } from './ReactRouter/Male'
import { Female } from './ReactRouter/Female'

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
    {/* <MyContext.P rovider value="fkdfj test kdjf">
      <Header />
    </MyContext.Provider> */}

    {/* <Container>
      <Title/>
      <InputBox/>
      <Record/>
    </Container> */}



    {/* React Router */}
    {/* Basic Syntax */}
    {/* <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
          <Route path='/' element={Home}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter> */}

    {/* Nested Router */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter> */}

    <BrowserRouter>
      <div>
        <nav>
         <Link to={"/"}>Home</Link>
         <Link to={"/male"}>Male</Link>
         <Link to={"/female"}>Female</Link>
        </nav>
        <div style={{background: 'cyan', padding: 20}}>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/male' element={<Male/>}></Route>
            <Route path='/female' element={<Female/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
</>
  )
}

export default App
