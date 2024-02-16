import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/auth'
import authSlice, { logout } from './store/authSlice'
import {Header,Footer} from './components'
import './App.css'

function App() {

    const [loading,setloading]=useState(true)
    const dispatch=useDispatch();

    useEffect(()=>{
      authservice.getCurrentUser()
      .then(
        (userData)=>{
          if(userData){
            dispatch(login({userData}))
          }
          else{
            dispatch(logout())
          }
        }
      )
      .finally(()=>setloading(false))

    },[])
  
    return !loading? 
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header/>
        <main>
          ToDo;
        </main>
        <Footer/>
      </div>
    </div>
    :null
}

export default App
