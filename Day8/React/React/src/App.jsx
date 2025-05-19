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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greet/>
      <State/> */}
      {/* <StatePrictical/> */}
     {/* <UseEffect/> */}
      {/* <Compostition/> */}
      <UseRef/>
    </>
  )
}

export default App
