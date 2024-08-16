'use client';
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'}>
            <img 
                className="w-24 md:w-36 lg:w-44 xl:w-48 2xl:w-56" 
                src="/logo.png" 
                alt="eik" 
            />
        </Link>
    );
}