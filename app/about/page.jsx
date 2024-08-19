"use client";
import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <ParallaxProvider>
            <div className="relative w-full h-[33vh] md:h-screen bg-cover bg-center flex flex-col justify-end" style={{ backgroundImage: "url('image3.jpeg')" }}>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <Parallax speed={-10}>
                    <div className="relative z-10 p-6 md:p-16 text-center w-full md:w-3/5 text-white mx-auto">
                        <h1 className="text-2xl md:text-3xl">About Us</h1>
                        <p className="mt-2 text-xs md:text-base">
                            About Environmental conservation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </Parallax>
            </div>

            

            <div>
                <h1 className="flex justify-center p-6 md:p-10 text-lg md:text-xl">Our Partners</h1>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 p-6 md:p-10">
                    <img src="/nema.png" alt="partner 1" className="max-w-[100px] md:max-w-[150px] h-auto" />
                    <img src="/linkedin.png" alt="partner 3" className="max-w-[100px] md:max-w-[150px] h-auto" />
                    <img src="/un.png" alt="partner 2" className="max-w-[100px] md:max-w-[150px] h-auto" />
                </div>
            </div>

            <div className="relative h-full md:h-screen bg-cover bg-center flex flex-wrap justify-center items-center gap-6 md:gap-12 p-6 md:p-0" style={{ backgroundImage: "url('image2.jpeg')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <Parallax speed={-15}>
                    <div className="p-6 md:p-8 bg-gradient-to-t from-black/40 to-black text-center flex flex-col justify-center items-center h-48 md:h-52 w-48 md:w-60 rounded-xl md:rounded-3xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:h-56 md:hover:h-80 cursor-pointer group">
                        <h1 className="text-white text-lg md:text-xl font-bold p-4 md:p-6">Mission</h1>
                        <p className="text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            To empower individuals and organizations with the knowledge, skills, and passion needed to protect and sustain our natural environment for current and future generations.
                        </p>
                    </div>
                </Parallax>
                <Parallax speed={-10}>
                    <div className="p-6 md:p-8 bg-gradient-to-t from-black/40 to-black text-center flex flex-col justify-center items-center h-48 md:h-52 w-48 md:w-60 rounded-xl md:rounded-3xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:h-56 md:hover:h-80 cursor-pointer group">
                        <h1 className="text-white text-lg md:text-xl font-bold p-4 md:p-6">Vision</h1>
                        <p className="text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            To create a world where every individual understands their role in environmental stewardship.
                        </p>
                    </div>
                </Parallax>
                <Parallax speed={-5}>
                    <div className="p-6 md:p-8 bg-gradient-to-t from-black/40 to-black text-center flex flex-col justify-center items-center h-48 md:h-52 w-48 md:w-60 rounded-xl md:rounded-3xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:h-56 md:hover:h-80 cursor-pointer group">
                        <h1 className="text-white text-lg md:text-xl font-bold p-4 md:p-6">Values</h1>
                        <p className="text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            Integrity, Collaboration, and Innovation in environmental practices.
                        </p>
                    </div>
                </Parallax>
            </div>
            
            {/* Our Team Section */}
            <div>
                <div className="bg-black p-8 md:p-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {[...Array(4)].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-b from-black/40 to-gray-700 h-60 md:h-72 w-44 md:w-56 rounded-xl flex flex-col items-center space-y-4 md:space-y-8 p-4 md:p-6"
                        >
                            <img src="instructor1.jpeg" alt="instructor picture" className="rounded-full h-12 md:h-14 w-12 md:w-14" />
                            <p className="text-gray-400 text-center text-sm md:text-base">their rank. name</p>
                            <div className="m-2 md:m-6">
                                <p className="text-gray-300 text-center text-xs md:text-sm">short text from them under 50 words</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ParallaxProvider>
    );
}