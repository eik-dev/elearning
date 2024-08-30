"use client";
import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const instructors = [
    {
        name: "Ms. Jane AB",
        field: "PhD. Environmental Science",
        rank: "Lead Instructor",
        image: "/people/woman1.jpg",
    },
    {
        name: "Mr. John Doe",
        field: "PhD. Marine Biology",
        rank: "Senior Instructor",
        image: "/people/man2.jpg",
    },
    {
        name: "Dr. Sarah Smith",
        field: "PhD. Conservation Biology",
        rank: "Assistant Professor",
        image: "/people/woman2.png",
    },
    {
        name: "Mr. Mark Brown",
        field: "PhD. Environmental Policy",
        rank: "Assistant Professor",
        image: "/people/man1.png",
    },
];

export default function AboutUs() {
    return (
        <ParallaxProvider>
            <div className="relative w-full h-[33vh] md:h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: "url('image3.jpeg')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                <Parallax speed={-20}>
                    <div className="z-10 p-6 md:p-16 text-center w-full md:w-3/5 text-white mx-auto">
                        <h1 className="text-[80px] md:text-3xl font-bold">WHO WE ARE</h1>
                        <p className="mt-2 text-xs md:text-base">
                            About Environmental conservation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                        <button className="mt-4 bg-secondary text-white px-4 py-2 rounded-2xl hover:bg-hover transition duration-200">
                            Explore
                        </button>
                    </div>
                </Parallax>
            </div>
            <div>
                <h1 className="flex justify-center mt-8 mb-4 text-lg md:text-xl">Our Partners</h1>
                <div className="flex flex-wrap justify-center items-center mb-8 space-x-6">
                    <img src="/nema.png" alt="partner 1" className="max-w-[100px] md:max-w-[150px] h-auto" />
                    <img src="/linkedin.png" alt="partner 3" className="max-w-[100px] md:max-w-[150px] h-auto" />
                    <img src="/un.png" alt="partner 2" className="max-w-[100px] md:max-w-[150px] h-auto" />
                </div>
            </div>
            <div className="flex flex-col items-center mb-8">
                <h2 className="text-xl font-bold mb-4 mt-10">OUR INSTRUCTORS</h2>
                <p className="text-center mb-6">Meet our experienced instructors who are passionate about environmental education and sustainability.</p>
                <div className="flex flex-wrap justify-center space-x-6">
                    {instructors.map((instructor, index) => (
                        <div key={index} className="flex flex-col items-left mb-4">
                            <img src={instructor.image} className="h-60 w-44 rounded-md object-cover mb-2" alt={instructor.name} />
                            <h3 className="font-semibold">{instructor.name}</h3>
                            <p>{instructor.field}</p>
                            <p>{instructor.rank}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full max-w-md p-4 mx-auto">
                <h2 className="text-xl font-bold mb-4 text-center">FAQs</h2>
                {["What courses do you offer?", "How can I enroll?", "Do you provide certificates?"].map((question, idx) => (
                    <Disclosure key={idx}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full p-4 mb-2 text-gray-900 bg-gray-100 rounded-lg">
                                    <span>{question}</span>
                                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5`} />
                                </Disclosure.Button>
                                <Disclosure.Panel className="p-4 text-gray-600 bg-gray-50 rounded-lg mb-2">
                                    {idx === 0 && "We offer various environmental science courses focusing on conservation, policy, and marine biology."}
                                    {idx === 1 && "You can enroll by visiting our enrollment page and completing the registration form."}
                                    {idx === 2 && "Yes, we provide certificates upon completion of our courses."}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </ParallaxProvider>
    );
}
