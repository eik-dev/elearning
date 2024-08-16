'use client';
import React, { useState } from 'react';

export default function Trainings() {
    // State to manage the active card and notification
    const [activeCard, setActiveCard] = useState(null);
    const [selectedNotification, setSelectedNotification] = useState(null);

    // Dummy notifications data
    const notifications = [
        { id: 1, title: 'Notification 1', message: 'Detailed message for Notification 1' },
        { id: 2, title: 'Notification 2', message: 'Detailed message for Notification 2' },
        { id: 3, title: 'Notification 3', message: 'Detailed message for Notification 3' },
    ];

    // Handler to toggle active card
    const handleCardClick = (card) => {
        setActiveCard(activeCard === card ? null : card);
    };

    // Handler to select a notification
    const handleNotificationClick = (notification) => {
        setSelectedNotification(notification);
    };

    // Handler to close the notification modal
    const handleBack = () => {
        setSelectedNotification(null);
    };
    
    return (
        <div className="p-4">
            <div className="mb-4">
                <h1 className="text-gray-500 text-lg md:text-xl">Account / John Doe</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Profile Picture and Edit Section */}
                <div className="flex flex-col justify-center items-center text-center space-y-4 w-full md:w-1/5">
                    <img src="/instructor1.jpeg" alt="profile picture" className="rounded-full h-20 w-20 object-cover" />
                    <p className="cursor-pointer text-blue-500 hover:underline">Edit</p>
                </div>
                {/* Badge Section */}
                <div className="flex flex-col gap-y-8 w-full md:w-4/5">
                    <div className="relative flex justify-start items-center gap-10">
                        {/* Badge Images */}
                        <div className="relative justify-start">
                            <img src="/Badge.png" alt="" className="h-40 w-40 object-contain" />
                            <img src="/Badge.png" alt="" className="h-40 w-40 absolute top-0 left-8 object-contain" />
                            <img src="/Badge.png" alt="" className="h-40 w-40 absolute top-0 left-16 object-contain" />
                            <img src="/Badge.png" alt="" className="h-40 w-40 absolute top-0 left-24 object-contain" />
                        </div>
                        {/* Badge Text */}
                        <div className="flex ml-16 space-x-4">
                            <p className="font-bold text-2xl">4</p>
                            <p className="text-lg">Badges earned</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-gray-400 text-lg">My courses</h2>
                    </div>
                    {/* My Courses */}
                    <div className="flex overflow-x-auto space-x-4 py-4">
                        {/* Course Cards */}
                        {Array(3).fill().map((_, index) => (
                            <div key={index} className="flex-shrink-0 w-64 space-y-2 border rounded-2xl shadow-md text-center">
                                <img src="energy.png" alt="course" className="h-36 mx-auto" />
                                <p className="w-52 text-center text-sm md:text-base">Introduction to Energy Management</p>
                                <div className="flex justify-center gap-3">
                                    <h1 className="text-green-800">60%</h1>
                                    <h2 className="text-sm md:text-base">Complete</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Notification */}
                    <div className="mt-10">
                        <h2 className="text-gray-400 text-lg">Notifications and Inbox</h2>
                    </div>
                    <div className="flex flex-col md:flex-row my-2 h-auto md:h-52">
                        {/* Sidebar for Notifications */}
                        <div className="flex flex-col space-y-6 w-full md:w-40">
                            {notifications.map(notification => (
                                <h3
                                    key={notification.id}
                                    className={`cursor-pointer ${selectedNotification === notification.id ? 'font-bold' : 'text-gray-500'}`}
                                    onClick={() => setSelectedNotification(notification.id)}
                                >
                                    {notification.title}
                                </h3>
                            ))}
                        </div>
                        <div className="border-l border-gray-300 h-32 mx-4 md:hidden"></div>
                        {/* Message Display Area */}
                        <div className="flex-1">
                            {selectedNotification ? (
                                <p className="text-gray-500">
                                    {
                                        notifications.find(notification => notification.id === selectedNotification)?.message
                                    }
                                </p>
                            ) : (
                                <p className="text-gray-500">Select a notification to see the message.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}