'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Trainings() {
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const coursesPerPage = 12;

    const trainings = [...new Array(24)].map((_, i) => ({
        id: i,
        title: `Training ${i + 1}`,
        price: 1000 + i * 500,
        category: i % 2 === 0 ? 'Energy' : 'Water',
        description: 'This one-day training is designed to give delegates an introduction to energy management principles and practical skills.',
        image: '/energy.png'
    }));

    const toggleCategory = (category) => {
        setSelectedCategories(prevSelectedCategories =>
            prevSelectedCategories.includes(category)
                ? prevSelectedCategories.filter(c => c !== category)
                : [...prevSelectedCategories, category]
        );
    };

    const filteredTrainings = trainings.filter(training => {
        const priceCondition = selectedPrice ? training.price <= selectedPrice : true;
        const categoryCondition = selectedCategories.length > 0
            ? selectedCategories.includes(training.category)
            : true;
        return priceCondition && categoryCondition;
    });

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentTrainings = filteredTrainings.slice(indexOfFirstCourse, indexOfLastCourse);

    const totalPages = Math.ceil(filteredTrainings.length / coursesPerPage);

    return (
        <div className="flex flex-col md:flex-row mx-4 mt-12 space-y-8 md:space-y-0">
            {/* Sidebar for filters */}
            <div className="hidden md:block w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-md sticky top-24">
                <h6 className="font-semibold text-lg mb-4">Filters</h6>
                <div className="mb-6">
                    <h6 className="font-semibold text-md mb-2">Price</h6>
                    <input
                        type="range"
                        min="1000"
                        max="6000"
                        step="500"
                        value={selectedPrice || 6000}
                        onChange={(e) => setSelectedPrice(Number(e.target.value))}
                        className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-700">
                        <span>Ksh 1000</span>
                        <span>Ksh {selectedPrice || 6000}</span>
                    </div>
                </div>
                <div>
                    <h6 className="font-semibold text-md mb-2">Categories</h6>
                    <div className="flex flex-col">
                        <label className="flex items-center mb-2 cursor-pointer">
                            <input
                                type="checkbox"
                                value="Energy"
                                checked={selectedCategories.includes('Energy')}
                                onChange={() => toggleCategory('Energy')}
                                className="mr-2"
                            />
                            <span className="text-gray-700">Energy</span>
                        </label>
                        <label className="flex items-center mb-2 cursor-pointer">
                            <input
                                type="checkbox"
                                value="Water"
                                checked={selectedCategories.includes('Water')}
                                onChange={() => toggleCategory('Water')}
                                className="mr-2"
                            />
                            <span className="text-gray-700">Water</span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Filter Toggle Button for Mobile */}
            <div className="block md:hidden">
                <button
                    onClick={() => setIsFilterOpen(true)}
                    className="flex items-center text-black px-4 py-2 transition-all"
                >
                    {/* Funnel Filter Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-.293.707l-4 4A1 1 0 019 23V12.414L3.293 6.707A1 1 0 013 6V4z" />
                    </svg>
                </button>
            </div>

            {/* Training cards */}
            <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {currentTrainings.map(training => (
                        <div key={training.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                            <img src={training.image} alt={training.title} className="h-48 w-full object-cover" />
                            <div className="p-4">
                                <h5 className="font-semibold text-center mb-2 text-lg text-gray-800">{training.title}</h5>
                                <p className="text-sm text-gray-600 leading-loose">
                                    {training.description.slice(0, 100) + '...'}
                                </p>
                                <div className="flex flex-col md:flex-row gap-y-2 md:justify-between items-center mt-4">
                                    <div className="text-gray-800 font-bold text-lg">Ksh {training.price}</div>
                                    <Link href="/training">
                                        <button className="bg-blue-500 text-white text-sm rounded-full px-4 py-2 hover:bg-blue-600 transition-all">Check it out</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Pagination */}
                {filteredTrainings.length > coursesPerPage && (
                    <div className="flex justify-center items-center space-x-4 mt-8">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Previous
                        </button>
                        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            {/* Filter Modal */}
            {isFilterOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="relative bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsFilterOpen(false)}
                            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                        >
                            {/* Close (X) Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h6 className="font-semibold text-lg mb-4">Filters</h6>
                        <div className="mb-6">
                            <h6 className="font-semibold text-md mb-2">Price</h6>
                            <input
                                type="range"
                                min="1000"
                                max="6000"
                                step="500"
                                value={selectedPrice || 6000}
                                onChange={(e) => setSelectedPrice(Number(e.target.value))}
                                className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="flex justify-between text-sm text-gray-700">
                                <span>Ksh 1000</span>
                                <span>Ksh {selectedPrice || 6000}</span>
                            </div>
                        </div>
                        <div>
                            <h6 className="font-semibold text-md mb-2">Categories</h6>
                            <div className="flex flex-col">
                                <label className="flex items-center mb-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value="Energy"
                                        checked={selectedCategories.includes('Energy')}
                                        onChange={() => toggleCategory('Energy')}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">Energy</span>
                                </label>
                                <label className="flex items-center mb-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value="Water"
                                        checked={selectedCategories.includes('Water')}
                                        onChange={() => toggleCategory('Water')}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-700">Water</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={() => setIsFilterOpen(false)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
