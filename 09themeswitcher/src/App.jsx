import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemecontextProvider } from './context/Theme'
import Card from './components/Card'
import ThemeBtn from './components/Themebtn'

function App() {

  const [Thememode,setThememode] = useState("light")

  const LightMode=()=>{
    setThememode("light")
  }
  const DarkMode=()=>{
    setThememode("dark")
  }

  //changing theme
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(Thememode)
},[Thememode])
  

  return (

<ThemecontextProvider value={{Thememode,LightMode,DarkMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                     <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Card/>
                    </div>
                </div>
            </div>

</ThemecontextProvider>
  )
}

export default App
