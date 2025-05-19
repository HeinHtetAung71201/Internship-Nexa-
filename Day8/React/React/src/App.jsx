import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './Components/Greet'
import State from './Components/State'
import StatePrictical from './Components/StatePrictical'
import UseEffect from './Components/UseEffect'
import Compostition from './Components/Compostition'
import UseRef from './Components/UseRef'
import Event from './Components/Event'
import Person1Hof from './Components/Person1Hof'
import Person2Hof from './Components/Person2Hof'
import CRUD from './CRUD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greet/>
      <State/> */}
      {/* <StatePrictical/> */}
     {/* <UseEffect/> */}
      {/* <Compostition/> */}
      {/* <UseRef/> */}
      {/* <Event/> */}
      {/* <Person1Hof/>
      <Person2Hof/> */}
      <CRUD/>
    </>
  )
}

export default App
