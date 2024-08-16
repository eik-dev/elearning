"use client";
import React, { useState } from 'react';

export default function Trainings() {
    // State to keep track of the active card
    const [activeCard, setActiveCard] = useState(null);

    // Handler to toggle active card
    const handleCardClick = (card) => {
        setActiveCard(activeCard === card ? null : card);
    };
    
    return (
        <>
            <div
                className="relative w-full h-[33vh] md:h-screen bg-cover bg-center flex flex-col justify-end"
                style={{ backgroundImage: "url('image3.jpeg')" }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="relative z-10 p-16 text-center w-60% text-white">
                    <h1 className="text-3xl">About Us</h1>
                    <p className="mt-2">
                        About Environmental conservation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div>
                <h1 className="flex justify-center p-10 text-xl">Our Partners</h1>
                <div className="flex justify-center items-center space-x-14 p-10">
                    <img src="/nema.png" alt="partner 1" className="max-w-[150px] h-auto" />
                    <img src="/linkedin.png" alt="partner 3" className="w-auto min-h-[150px]" />
                    <img src="/un.png" alt="partner 2" className="max-w-[150px] h-auto" />
                </div>
            </div>
            <div>
                <div className="relative h-full md:h-screen bg-cover bg-center flex justify-center items-center space-x-12" style={{ backgroundImage: "url('image2.jpeg')" }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    {/* Mission Card */}
                    <div onClick={() => handleCardClick('mission')} className="p-8 bg-gradient-to-t from-black/40 to-black text-center flex flex-col justify-center h-52 w-60 rounded-3xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:h-80 cursor-pointer">
                        <h1 className="text-white text-xl font-bold p-6">Mission</h1>
                        <p className={`text-white transition-opacity duration-300 ease-in-out ${activeCard === 'mission' ? 'opacity-100' : 'opacity-0'}`}>
                            To empower individuals and organizations with the knowledge, skills, and passion needed to protect and sustain our natural environment for current and future generations.
                        </p>
                    </div>
                    {/* Vision Card */}
                    <div onClick={() => handleCardClick('vision')} className="p-8 flex flex-col justify-center items-center text-center h-52 w-60 rounded-2xl bg-gradient-to-t from-black/40 to-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:h-80 cursor-pointer">
                        <h1 className="text-white text-2xl font-bold">Vision</h1>
                        <p className={`text-white mt-2 transition-opacity duration-300 ease-in-out ${activeCard === 'vision' ? 'opacity-100' : 'opacity-0'}`}>
                            To create a world where every individual understands their role in environmental stewardship.
                        </p>
                    </div>
                    {/* Values Card */}
                    <div onClick={() => handleCardClick('values')} className="p-8 flex flex-col justify-center items-center text-center h-52 w-60 rounded-2xl bg-gradient-to-t from-black/40 to-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:h-80 cursor-pointer">
                        <h1 className="text-white text-2xl font-bold">Values</h1>
                        <p className={`text-white mt-2 transition-opacity duration-300 ease-in-out ${activeCard === 'values' ? 'opacity-100' : 'opacity-0'}`}>
                            Integrity, Collaboration, and Innovation in environmental practices.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-black p-16 flex justify-center items-center space-x-16">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="bg-gradient-to-b from-black/40 to-gray-700 h-72 w-56 rounded-xl flex flex-col items-center space-y-8">
                            <img src="instructor1.jpeg" alt="instructor picture" className="rounded-full h-14 w-14" />
                            <p className="text-gray-400 text-center">their rank. name</p>
                            <p className="text-gray-300 text-center text-10px">short text from them under 50 words</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}