'use client'

export default function Page({params}){
    return(
        <div>
            <h4>Training page</h4>
            <p>Current training: {params.id}</p>
        </div>
    )
}