'use client'
import { createContext } from "react";

export let Context = createContext();

export default function ContextProvider({ children }) {
    return(
        <Context.Provider value={{}}>
        {children}
        </Context.Provider>
    )
}