'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Trainings() {
    const [activeCard, setActiveCard] = useState(null);
    const [selectedNotification, setSelectedNotification] = useState(null);

    const notifications = [
        { id: 1, title: 'Notification 1', message: 'Detailed message for Notification 1' },
        { id: 2, title: 'Notification 2', message: 'Detailed message for Notification 2' },
        { id: 3, title: 'Notification 3', message: 'Detailed message for Notification 3' },
    ];
    
    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-gray-500 text-sm md:text-xl mr-10">Account / John Doe</h1>
            </div>
            <div className="relative flex flex-col md:flex-row gap-8">
                {/* Profile Section (Sticky) */}
                <div className="flex flex-col justify-center items-center text-center space-y-4 w-full md:w-1/5 sticky top-0 bg-white z-10">
                    <img src="/instructor1.jpeg" alt="profile picture" className="rounded-full h-20 w-20 object-cover" />
                    <p className="cursor-pointer text-blue-500 hover:underline">Edit</p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-y-8 w-full md:w-4/5">
                    {/* Badge Section */}
                    <div className="relative flex justify-start items-center gap-10">
                        {/* Badge Images */}
                        <div className="relative justify-start">
                            <img src="/Badge.png" alt="badge" className="h-40 w-40 object-contain" />
                            <img src="/Badge.png" alt="badge" className="h-40 w-40 absolute top-0 left-8 object-contain" />
                            <img src="/Badge.png" alt="badge" className="h-40 w-40 absolute top-0 left-16 object-contain" />
                            <img src="/Badge.png" alt="badge" className="h-40 w-40 absolute top-0 left-24 object-contain" />
                        </div>
                        {/* Badge Text */}
                        <div className="flex ml-16 space-x-4">
                            <p className="font-bold text-2xl">4</p>
                            <p className="text-lg">Badges earned</p>
                        </div>
                    </div>

                    {/* Course Section */}
                    <div>
                        <h2 className="text-gray-400 text-lg">My courses</h2>
                    </div>
                    <div className="flex overflow-x-auto space-x-6 py-4">
                        {/* Course Cards */}
                        {Array(3).fill().map((_, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg p-4 text-center transition-transform transform hover:scale-105"
                            >
                                <img src="energy.png" alt="course" className="h-36 mx-auto rounded-lg" />
                                <p className="w-full mt-4 text-base text-gray-700">Introduction to Energy Management</p>
                                <div className="flex justify-center items-center gap-2 mt-3">
                                    <h1 className="text-green-700 text-lg">60%</h1>
                                    <h2 className="text-sm text-gray-600">Complete</h2>
                                </div>
                                <Link href="/mytraining">
                                    <button className="mt-4 bg-green-500 text-white text-sm font-medium py-2 px-4 rounded-lg transition hover:bg-green-600">
                                        Continue
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Notifications and Inbox */}
                    <div className="mt-10">
                        <h2 className="text-gray-600 text-lg">Notifications and Inbox</h2>
                    </div>
                    <div className="flex flex-col md:flex-row my-4 h-auto md:h-64 border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                        {/* Sidebar for Notifications */}
                        <div className="bg-gray-100 w-full md:w-1/4 p-4">
                            <ul className="space-y-4">
                                {notifications.map(notification => (
                                    <li
                                        key={notification.id}
                                        className={`cursor-pointer px-4 py-2 rounded-md transition-all duration-300 ease-in-out 
                                        ${selectedNotification === notification.id ? 'bg-white shadow-md font-medium' : 'text-gray-500 hover:bg-gray-200'}`}
                                        onClick={() => setSelectedNotification(notification.id)}
                                    >
                                        {notification.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Message Display Area */}
                        <div className="flex-1 p-6 bg-white">
                            {selectedNotification ? (
                                <div className="text-gray-600">
                                    <h3 className="text-lg font-medium mb-2">
                                        {notifications.find(notification => notification.id === selectedNotification)?.title}
                                    </h3>
                                    <p>{notifications.find(notification => notification.id === selectedNotification)?.message}</p>
                                </div>
                            ) : (
                                <div className="text-gray-500 flex justify-center items-center h-full">
                                    <p>Select a notification to see the message.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
