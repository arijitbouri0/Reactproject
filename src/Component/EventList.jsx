import React, { useState } from 'react';
import { AiOutlineEye } from "react-icons/ai"; // View icon
import { FiShare2 } from "react-icons/fi"; // Share icon
import { FiMoreVertical } from "react-icons/fi"; // More options icon
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EventList = ({ category, title, description, author, views, imageUrl }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="border shadow-sm overflow-hidden mb-4 relative">
            <img src='https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J2joF1-v0uNDxHlZbACSAWEKwqMPD00A752M-HwJiP71BMNbL8rcfwau8HeidmiTtl-BKHEauXNBriBseVR7ACKdbk-fDEeXx1ID9SjSi6JDwvKg97qlm91aArqRkBth3cFCHQ6zwC5tdDhSOWGvKC-0-efG8RuURWHKNUeoVXlJVRWLBEvuyAgNNMV6Gm8k3v4DGWWnG2Nl2I5bfoHcn5U8CR15uD6WMIS99yYL0q5N~Ry~MCplHgFX0lQw20~pB6W8HYrISTb-QEXfHAZLpfK39nuvXs-my-0RKOtJ7roR7fH2q1RElEjuzrAQnfYueCaJ~NiAXZvBnEIydSmz-Q__' alt={title} className="w-full h-[220px] object-cover" />
            <div className="p-6 space-y-4">
                <p className="text-2xl text-gray-600">📅 Meetup</p>
                <div className="flex items-center space-x-8 justify-between mb-2">
                    <h2 className="text-2xl font-semibold">Finance & Investment Elite Social Mixer @Lujiazui</h2>
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
                        <span>Fri, 12 Oct, 2018</span>
                    </div>

                    {/* Location Section */}
                    <div className="flex items-center gap-x-1">
                        <FaMapMarkerAlt className="text-lg" />
                        <span>Ahmedabad, India</span>
                    </div>

                </div>
                <div className="w-full flex ">
                    <button className="border-2 border-black w-full p-3 rounded-full hover:border-white text-orange-500 font-semibold transition-all duration-300">
                        Visit Website
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src='https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DGcfc6FPv5LdiNt9YRgIKVUk4J823chLWPkIsXHDeCf-IBr~Ntjg-6Sr9gTCzX2GB8yrTkLErb5xSWmFmpO9FYMD9kkrqK6aiBnPOFcIotulpfNHZRfWibffUL9FAQCwbFaGZK6IiBaOg7iikrmhIZffVD3ycdtL~DgJ-YXsxahoGc9si1gPM9khRPWYLzKlKj8h8yv1m-a0593KK0RGsixVnh5pp0gXIkK9O-sP700FUiBKGJHb4rNkVQSxHjZiJR9TzM1WHTG5U3bbLMHAenXGV7DcqzBi2CtDBTr7U29392C8v8t2USago1uJ-Y2nwo6Y2eEKOg4EWnEJe-aoDQ__' alt="Sidhartha Goyal" className="w-10 h-10 rounded-full mr-2" />
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

export default EventList;