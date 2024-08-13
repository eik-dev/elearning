'use client';
import React, { useState } from 'react';

export default function Trainings() {
    const [selectedNotification, setSelectedNotification] = useState(null);
    const notifications = [
        { id: 1, title: "Notification 1", message: "Your next Training, 'Recycling and Repurposing,' starts tomorrow at 10 AM. Prepare your materials and check your email for the Zoom link. Don’t forget to complete the pre-course assessment to get the most out of your training. See you there!" },
        { id: 2, title: "Message", message: "Congratulations! You’ve successfully completed the 'Introduction to Energy Management' Training and earned your badge. It’s now added to your profile. Keep up the great work and explore more courses to continue expanding your skills and achievements." },
        { id: 3, title: "Notification 3", message: "'Mastering Remote Collaboration,' has just been added to your training catalog. Enhance your teamwork skills with this practical guide to effective online collaboration. Enroll now and start learning how to excel in remote work environments!" },
    ];

    return (
        <div>
            <div className="ml-10">
                <h1 className="text-gray-500">Account / John Doe</h1>
            </div>
            <div className="flex gap-x-8">
                {/* Profile Picture and Edit Section */}
                <div className="flex flex-col justify-center items-center text-center space-y-4 w-1/5 h-screen">
                    <img src="/instructor1.jpeg" alt="profile picture" className="rounded-full h-20 w-20 object-cover" />
                    <p className="cursor-pointer text-blue-500 hover:underline">Edit</p>
                </div>
                {/* Badge Section */}
                <div className="flex flex-col gap-y-8 w-4/5">
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
                        <h className="text-gray-400">My courses</h>
                    </div>
                    {/* My Courses */}
                    <div className="flex overflow-x-auto space-x-4 py-4">
                        {/* Course Cards */}
                        {Array(3).fill().map((_, index) => (
                            <div key={index} className="flex-shrink-0 w-64 space-y-2 border rounded-2xl shadow-md text-center">
                                <img src="energy.png" alt="course" className="h-36 mx-auto" />
                                <p className="w-52 text-center">Introduction to Energy Management</p>
                                <div className="flex justify-center gap-3">
                                    <h1 className="text-green-800">60%</h1>
                                    <h2>Complete</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Notification */}
                    <div className="mt-10">
                        <h1 className="text-gray-400">Notifications and Inbox</h1>
                    </div>
                    <div className="flex my-2 h-52">
                        {/* Sidebar for Notifications */}
                        <div className="flex flex-col space-y-6 w-40">
                            {notifications.map(notification => (
                                <h
                                    key={notification.id}
                                    className={`cursor-pointer ${selectedNotification === notification.id ? 'font-bold' : 'text-gray-500'}`}
                                    onClick={() => setSelectedNotification(notification.id)}
                                >
                                    {notification.title}
                                </h>
                            ))}
                        </div>
                        <div className="border-l border-gray-300 h-32 mx-4"></div>
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