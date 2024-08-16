'use client';
import Image from 'next/image'; 
import Link from 'next/link';

export function ContactUs() {
    return (
        <div className="flex justify-center py-6">
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 rounded-lg shadow-md w-4/5 md:w-3/5 p-6 overflow-hidden">
                <div className="flex flex-col items-start">
                    <h2 className="text-xl font-bold text-gray-800">Got a Question about our services?</h2>
                    <p className="text-md text-gray-600 mt-2">Get in touch today with our customer care personnel.</p>
                </div>
                <Link href="/account" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 mt-4 md:mt-0">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}