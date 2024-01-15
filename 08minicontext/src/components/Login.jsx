import React, { useContext, useState } from "react";
import UserContext from "../context/Usercontext";


function Login(){

    const [username,setusername] = useState("")
    const [password,setpassowrd] = useState("")

    const {setuser} = useContext(UserContext)

    const handlesubmit = (e)=>{
        e.preventDefault();
        setuser({username,password})
    }
  
    
    return(

<>
        <h2>Login Form</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"  name="username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        ("  ")
        <label htmlFor="password">Passoword</label>
        <input type="text"  id="password" name="password" value={password} onChange={(e)=>{setpassowrd(e.target.value)}}/>

        <button onClick={handlesubmit}>Submit</button>
</>
    );
}

export default Login;