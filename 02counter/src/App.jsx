import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(15)

  const Addvalue=()=>{
    if(counter<20){
    setcounter(counter+1)

    //interview question
    // setcounter(counter+1)
    // setcounter(counter+1)
    // setcounter(counter+1)
    // setcounter(counter+1) This will update value only one time because fiber take task in bacthes so when it will realize that all task are same it will command it single time

    //So to update it 4 times do
    // setcounter((prevcounter) => prevcounter + 1);
    // setcounter((prevcounter) => prevcounter + 1);
    // setcounter((prevcounter) => prevcounter + 1);
    // setcounter((prevcounter) => prevcounter + 1); here prevcounter acces the previous value first so fiber first provide prevalue then proced to next so it is not taking it as batch but working as individual
    }
    else{
      alert("Value can't be more than 20")

    }

    // counter=counter+1 
    // setcounter(counter) can also do
  }

  const Removevalue=()=>{
    if(counter>0){

      setcounter(counter-1)
        //interview question
    // setcounter(counter-1)
    // setcounter(counter-1)
    // setcounter(counter-1)
    // setcounter(counter-1) This will update value only one time because fiber take task in bacthes so when it will realize that all task are same it will command it single time

    //So to update it 4 times do
    // setcounter((prevcounter) => prevcounter - 1);
    // setcounter((prevcounter) => prevcounter - 1);
    // setcounter((prevcounter) => prevcounter - 1);
    // setcounter((prevcounter) => prevcounter - 1);here prevcounter acces the previous value first so fiber first provide prevalue then proced to next so it is not taking it as batch but working as individual

    }
    else{
      alert("Value can't be negative")
    }


    // counter=counter-1 
    // setcounter(counter) can also do 
  }

  return (
    <>
    <h1>Current value: {counter}</h1>
    <button onClick={Addvalue}>Add value: {counter}</button>
    <button onClick={Removevalue}>Remove value: {counter}</button>
    </>
  )
}

export default App

// 1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
// 2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
// 3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
// 4. But some values depends on network call so if we update a value it might get update immediately via a network call.
// 5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
// 6. The current algo used by the React is called the React Fibre algo.
// 7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
// 8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
// 9.In UI it is not necessary for every update to be applied immediately. */