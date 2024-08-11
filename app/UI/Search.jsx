'use client'
import { useState } from "react"
export default function Search(){
    let [search, setSearch] = useState('');
    return(
        <div className="flex items-center bg-white rounded-full p-1 h-full w-full">
            <input className="bg-white h-full pl-2 rounded-full w-full" type="search" name="" id="" />
            <div className="icon-[weui--search-outlined] text-gray-500 w-8 h-8 lg:w-8 2xl:w-8 lg:h-8 2xl:h-8 mr-4"/>
        </div>
    )
}