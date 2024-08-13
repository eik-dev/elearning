'use client'
import Image from 'next/image'; 
import Link from 'next/link';

export function ContactUs() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 rounded-full shadow-md w-3/5">
                <img 
                        src="/hand.png" 
                        alt="profile picture" 
                        className="h-20 w-20 object-cover rounded-l-full border-l-4 border-transparent" 
                />
                <div className="flex items-center mb-4 md:mb-0">
                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Got a Question about our services</h2>
                        <p className="text-sm text-gray-600">Get in touch Today with our customer care personel</p>
                    </div>
                </div>
                <Link href="/account" className="bg-button text-white py-2 px-4 rounded-full hover:bg-hover">
                    Contact us
                </Link>
            </div>
        </div>
    );
}