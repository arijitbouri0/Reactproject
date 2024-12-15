import React, { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai"; // View icon
import { FiShare2 } from "react-icons/fi"; // Share icon
import { FiMoreVertical } from "react-icons/fi"; // More options icon

const PostCard = ({ category, title, description, author, views, imageUrl }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="border shadow-sm overflow-hidden mb-4 relative">
            <img src={imageUrl} alt={title} className="w-full h-[220px] object-cover" />
            <div className="p-6 space-y-4">
                <p className="text-2xl text-gray-600">{category}</p>
                <div className="flex items-center space-x-8 justify-between mb-2">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-center cursor-pointer bg-gray-100 w-7 h-7 rounded-sm rotate-90"
                        >
                            <FiMoreVertical className="text-lg text-gray-600" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                                <ul className="py-1">
                                    <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Edit</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Report</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={author.image} alt={author.name} className="w-10 h-10 rounded-full mr-2" />
                        <p className="text-gray-800">{author.name}</p>
                    </div>
                    <div className="flex items-center gap-x-4">
                        {/* Views Section */}
                        <div className="text-gray-600 flex items-center gap-x-1">
                            <AiOutlineEye className="text-lg" />
                            <span className="text-sm">{views} views</span>
                        </div>

                        {/* Share Button */}
                        <div className="flex items-center justify-center cursor-pointer bg-gray-100 w-7 h-7 rounded-sm">
                            <FiShare2 className="text-lg text-gray-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
