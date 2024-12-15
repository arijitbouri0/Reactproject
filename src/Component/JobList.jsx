import React, { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai"; // View icon
import { FiShare2 } from "react-icons/fi"; // Share icon
import { FiMoreVertical } from "react-icons/fi"; // More options icon
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const JobList = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="border shadow-sm overflow-hidden mb-4 relative">
            <div className="p-6 space-y-4">
                <p className="text-2xl text-gray-600">💼 Job</p>
                <div className="flex items-center space-x-8 justify-between mb-2">
                    <h2 className="text-2xl font-semibold">Softwere Developer</h2>
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
                <div className="text-gray-700 mb-4 flex items-center space-x-6">
                    {/* Date Section */}
                    <div className="flex items-center gap-x-1">
                        <FaCalendarAlt className="text-lg" />
                        <span>Innovaccer Analytics Private Ltd.</span>
                    </div>

                    {/* Location Section */}
                    <div className="flex items-center gap-x-1">
                        <FaMapMarkerAlt className="text-lg" />
                        <span>Noida, India</span>
                    </div>

                </div>
                <div className="w-full flex ">
                    <button className="border-2 border-black w-full p-3 rounded-full hover:border-white text-green-400 font-semibold transition-all duration-300">
                        Apply on Timejobs
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src='https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CWBwL2ATZoQLF3tZrOjPrjB0Gqooog2tO6M8EvbWD3ETxPXKhIbKvg-C5YlKJ~ZL3OjVpQwvZP6yMbkYPDezj8N6Gk78TUo3MPMtWCUifFh8i-wdUUzbhFomvLeP2ARNSq0GNQbfp8Vkef8ym1le2elxwuyFKYkfGZQxmcGP0T-i6hlTL5pqRwzrw~nfLjbfz681o5ab3mAUNwuISjNJzJ~G5xkr1ZXkZh-tO3k~Xxa7-6hKpHLD3kCtpLUKawZMxDfcJsaNub7Bkz9r2NpRhRn-jv~RYGzQfd7tMOPFeYOW-6rgKmmFo-eBRgHQ9oAu8ieetttIGgLVn1MMEBjN2Q__' alt="Sidhartha Goyal" className="w-10 h-10 rounded-full mr-2" />
                        <p className="text-gray-800">Sidhartha Goyal</p>
                    </div>
                    <div className="flex items-center gap-x-4">
                        {/* Views Section */}
                        <div className="text-gray-600 flex items-center gap-x-1">
                            <AiOutlineEye className="text-lg" />
                            <span className="text-sm">1.4k views</span>
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

export default JobList;