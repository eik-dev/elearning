'use client'
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const toggleSearchBar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`flex items-center bg-white rounded-full p-1 h-full w-full transition-all duration-300 ${isExpanded ? 'w-64' : 'w-12'} `}>
            {isExpanded && (
                <input
                    className="bg-white h-full pl-2 rounded-full w-full"
                    type="search"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                />
            )}
            <div 
                className="icon-[weui--search-outlined] text-gray-500 w-8 h-8 lg:w-8 2xl:w-8 lg:h-8 2xl:h-8 mr-4 cursor-pointer"
                onClick={toggleSearchBar}
            />
        </div>
    );
}