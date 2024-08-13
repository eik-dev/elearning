'use client'
import Link from "next/link"
export default function Logo(){
    return <Link href={'/'}>
        <img className="md:w-36 2xl:w-44" src="/logo.png" alt="eik" />
    </Link>
}