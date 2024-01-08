import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let cardcomponent={
    username:"Abhiraj",
    age:21
  }

  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className='bg-green-400 p-4 rounded-xl text-black mb-4'  >Abhiraj</h1>
  <Card username='Abhiraj' btntext='Click me' />
  <Card username='Hitesh'  btntext='Visit me' />

    </>
  )
}

export default App
