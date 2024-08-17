'use client'
import { useState } from "react";
import Link from "next/link"
import { usePathname, useParams } from "next/navigation";
import Logo from "@/app/UI/Logo";
import { hide, show, toggle, isVisible } from "@/app/lib/controlls";
import { overlayE } from "@/app/lib/trigger";
import useUser from "@/app/lib/hooks/useUser";
import Overlay from "./Overlay";
import Search from "./Search";

let pages = [
    {
        href:'/',
        text:'Home',
        icons: 'icon-[hugeicons--home-01]'
    },
    {
        href:'/about',
        text:'About Us',
        icons: 'icon-[mdi--about-circle-outline]'
    },
    {
        href:'/trainings',
        text:'Trainings',
        icons: 'icon-[fluent--document-edit-16-regular]'
    },
    {
        href:'/account',
        text:'Account',
        icons: 'icon-[codicon--account]'
    }
]

export function MobileTopMenu(){
    return(
        <div className="block md:hidden">
            <div className="flex justify-between items-center px-3 py-3  mb-1">
                <Logo/>
                <button onClick={e=>show('mobile_side_menu')} className="icon-[solar--hamburger-menu-outline] w-8 h-8"/>
            </div>
        </div>
    )
}
export function MobileSideMenu(){
    let [overlay, setOverlay] = useState('');
    const { isLogged, isLoading,error, user, logout, stateChange } = useUser();
    let pathname = usePathname();
    return(
        <>
        <div id="mobile_side_menu" className="block bg-white fixed z-40 top-0 md:top-24 right-0 w-[60vw] translate-x-[60vw] pt-4 h-[100vh] px-2">
            <div className="flex justify-between items-center mb-6">
                <Logo/>
                <button onClick={e=>hide('mobile_side_menu')} className="w-full text-right pr-4 mt-2 absolute"><span className="icon-[material-symbols-light--close] w-8 h-8"/></button>
            </div>
            {
                isLogged && !error && !isLoading &&
                <div className="">
                </div>
            }
            <div className="px-5">
                {
                    pages.map((page,i) => (
                        <Link href={page.href} key={i} className={`flex gap-3 items-center my-6 ${pathname===(page.href)?'text-white bg-secondary rounded-lg px-2 py-3':'text-LightGray'} `}>
                            <div className={`${page.icons} w-7 h-7 `}/>
                            <span className="truncate text-sm font-bold text-center">{page.text}</span>
                        </Link>
                    ))
                }
            </div>
            <div className="flex border-t-[1px] border-Grey p-2 absolute bottom-20 w-full">
            {
                (isLogged && !error && !isLoading) ?
                <button onClick={e=>logout()} className="text-Error font-semibold flex items-center"><span className="icon-[material-symbols-light--logout] w-7 h-7"/>Logout</button>
                :
                <>
                    <button className="bg-primary w-1/2 font-semibold block py-2 rounded-full text-white" onClick={e=>overlayE('/login')}>Log In</button>
                </>
                
            }
            </div>
        </div>
        <Overlay className={`${overlay==''?'hidden':'block'}`} >
            {
            }
        </Overlay>
        </>
    )
}

export function TopMenu() {
    const pathname = usePathname();
    const { isLogged, isLoading, error } = useUser();
    const [overlay, setOverlay] = useState(''); // Initialize overlay state

    const handleOverlayToggle = (overlayType) => {
        setOverlay(overlayType); // Set overlay type when toggled
    };

    return (
        <header className="hidden md:block bg-primary-dark z-30 top-0">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="flex justify-between items-center gap-8 w-1/2 bg-primaryLight">
                    <Logo />
                    <div className="flex gap-8">
                        {pages.map((page, i) => (
                            <Link key={i} className={`text-sm ${pathname === page.href ? 'text-primary' : 'text-gray-700'} hover:text-secondary font-semibold`} href={page.href}>
                                {page.text}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Search />
                    {isLogged && !error && !isLoading ? (
                        <div>
                            {/* User Avatar or Profile Component */}
                        </div>
                    ) : (
                        <button className="lg:w-7 2xl:w-9 lg:h-7 2xl:h-9 icon-[carbon--user-avatar] text-gray-700" />
                    )}
                </div>
            </div>
            <Overlay className={`${overlay === '' ? 'hidden' : 'block'}`} />
        </header>
    );
}