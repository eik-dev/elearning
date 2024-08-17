'use client';
import React from 'react';
import Button from '../UI/buttonPrimary';
import Link from 'next/link';

export default function Trainings() {
    return (
        <div className="p-4 md:p-10 flex flex-col gap-10">
            <div className="md:flex md:flex-row flex-col gap-10">
                <div className="md:w-3/5 w-full">
                    <div className="mb-8">
                        <video
                            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-auto object-cover rounded-lg shadow-lg"
                            controls
                            src="/video.mp4"
                        />
                    </div>
                    <div className="space-y-6">
                        <h1 className="font-bold text-lg md:text-xl lg:text-2xl">Introduction</h1>
                        <p className="text-sm md:text-base">
                            The IEMA Environmental Sustainability Skills for the Workforce course is a one-day awareness course developed to upskill all workers with an elemental understanding of environmental sustainability principles. Relevant to any job role across all sectors this course will help to embed environmental cultural change into an organisation.
                            Those businesses seeking to refresh environmental management within their business and looking for true value from ISO 14001, achieve their environmental goals and actively change their culture will value the support this course delivers.
                            The course covers the main environmental risks and opportunities facing organisations; the importance of resource efficiency; the impacts of pollution, prevention, control and legislation; the impact of transport; and knowing how employees can support environmental sustainability.
                        </p>
                        <h2 className="font-semibold text-lg">Training Objectives</h2>
                        <p className="text-sm md:text-base">
                            This course aims to provide an understanding of terminology and definitions linked to carbon management. This course is an intensive workshop that focuses on the practical skills required to create a carbon footprint report and begin their route to NetZero.
                        </p>
                        <h2 className="font-semibold text-lg">Training Content</h2>
                        <div className="ml-6">
                            <ul className="custom-bullets">
                                <li>Understand carbon emissions terminology</li>
                                <li>Understand what a carbon footprint is and be familiar with the Greenhouse Gas Accounting Protocol</li>
                                <li>Measure your business carbon footprint</li>
                                <li>Create a carbon reduction plan</li>
                            </ul>

                            <style jsx>{`
                                .custom-bullets {
                                    list-style-type: circle;
                                    padding-left: 20px;
                                }
                                .custom-bullets li {
                                    color: black;
                                }
                            `}</style>
                        </div>
                    </div>
                </div>

                {/* Training Info Card */}
                <div className="md:w-2/5 w-full flex justify-center text-center">
                    <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
                        <h1 className="text-lg md:text-xl font-bold mx-8 mt-6">Environmental Sustainability
                        Skills for the Workforce</h1>
                        <img src="/Badge.png" alt="badge" className="w-32 md:w-40 mx-auto mt-4" />
                        <h2 className="text-sm md:text-base mt-4">Ksh 3000 ex VAT</h2>
                        <div className="m-5 space-x-0 md:space-x-6 space-y-4 md:space-y-0 flex flex-col justify-center md:flex-row">
                            <Button href="/account" variant="secondary">
                                Add to Wishlist
                            </Button>
                            <Button href="/about" variant="primary">
                                Buy Training
                            </Button>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h2 className="font-bold text-sm md:text-base">Dates and Venues</h2>
                            <p className="text-sm md:text-base">23rd August to 8th September</p>
                            <p className="font-bold text-sm md:text-base">Virtual</p>
                        </div>
                        <p className="mt-6 text-sm md:text-base">Other Trainings you may be interested in</p>
                        <div className="mt-4 text-right flex flex-col space-y-4 text-sm md:text-base">
                            <Link href="">Green Energy and Zero Emission</Link>
                            <Link href="">Green Energy and Zero Emission</Link>
                            <Link href="">Green Energy and Zero Emission</Link>
                            <Link href="">Green Energy and Zero Emission</Link>
                            <Link href="">Green Energy and Zero Emission</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instructor Info Card */}
            <div className="mt-10 md:mt-6 bg-white shadow-lg rounded-xl md:rounded-full p-6 w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <img src="/instructor1.jpeg" alt="Instructor" className="w-24 h-24 rounded-full" />
                <div className="text-center md:text-left">
                    <h2 className="font-bold text-lg">Instructor Name</h2>
                    <p className="text-sm md:text-base">email@example.com</p>
                </div>
            </div>
        </div>
    );
}
