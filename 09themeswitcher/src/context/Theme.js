import { createContext, useContext } from "react";

export const Themecontext = createContext({
    Thememode:"light",
    LightMode:()=>{},
    DarkMode:()=>{}
})

export const ThemecontextProvider= Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}

