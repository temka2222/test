"use client";
import { Children, createContext, useState } from "react"
export const DarkContext=createContext({ })
export const DarkProvider=({children})=>{
    const [dark,setDark]=useState<boolean>(false)
    const[movie,setMovie]=useState<boolean|null>(null)
    return(
        <DarkContext.Provider value={{dark,setDark,movie,setMovie}}> 
            {children}
        </DarkContext.Provider> 
    )

}   
