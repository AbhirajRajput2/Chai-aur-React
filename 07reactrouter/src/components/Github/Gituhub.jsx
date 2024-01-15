import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    
    // useEffect(()=>{

    //     fetch('https://api.github.com/users/AbhirajRajput2')
    //     .then((res)=> res.json())
    //     .then((res)=>setdata(res))

    // },[])

    return (
        <div className="w-screen flex gap-4 px-56">
              <img src={data.avatar_url} alt="Git picture" width={300} />
            <h1>Github Followers:{data.followers}</h1>
        </div>
    );
}

export default Github;

export const githubInfoLoader=async()=>{
    let res = await fetch('https://api.github.com/users/AbhirajRajput2')
    return res.json()
}