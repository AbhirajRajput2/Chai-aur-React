import React from 'react'
import { useContext,createContext } from 'react'

export const todocontext =createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecompleted:(id)=>{}
})

export const usetodo=()=>{
    return useContext(todocontext)
}

export const Todoprovider=todocontext.Provider