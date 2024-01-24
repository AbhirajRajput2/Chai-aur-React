import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Addtodo/>
  <Todos/>
    </>
  )
}

export default App
