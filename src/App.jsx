import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './portfolio'
import LocalTime from './time'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Portfolio/>
  
    </div>
  )
}

export default App
