'use client'
import { useState, useEffect } from "react"
import Overlay from "./Overlay"
import Login from "./Login"
import Signup from "./Signup"

export default function Overlays(){
    let [page, setPage] = useState('')
    useEffect(()=>{
        window.addEventListener('overlay', e=>handler(e))
        return ()=>window.removeEventListener('overlay', e=>handler(e))
    },[])
    let handler = e => {
        setPage(e.detail.page)
    }

    
    return(
        <Overlay id="overlays" className={`${page==''?'hidden':'block'}`}>
            {page=='/login' && <Login control={setPage}/>}
            {page=='/signup' && <Signup control={setPage}/>}
        </Overlay>
    )
}