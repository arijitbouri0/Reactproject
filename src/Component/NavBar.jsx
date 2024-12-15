
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AuthModal } from "./AuthModel";

const NavBar = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-4 py-2 bg-white border-b shadow-md">
        {/* Logo Section */}
        <div className="text-xl font-semibold flex items-center gap-2">
          <span className="text-green-500">ATG</span>
          <span className="text-gray-800">.W</span>
          <img
            className="w-5 h-5"
            src="https://play-lh.googleusercontent.com/7jE8m2fGwULMJjMKJPsuoClFdtuiM-ve41ZtilKAVjfRgzyOcLEVXsmn7Gu9s74b5VXN"
            alt="icon"
          />
          <span className="text-gray-800">RLD</span>
        </div>

        {/* Search Bar */}
        <div className="relative hidden sm:block w-full max-w-[360px]">
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="w-full border rounded-full bg-gray-200 py-2 px-10 text-sm outline-none shadow-sm focus:ring focus:ring-blue-200"
          />
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <FiSearch />
          </div>
        </div>

        {/* Search Icon for Mobile */}
        <div className="sm:hidden flex items-center text-gray-400 text-xl">
          <FiSearch />
        </div>

        {/* User Section */}
        <div
          className="flex items-center gap-1 mx-4 text-sm sm:text-base"
          onClick={() => setIsAuthOpen(true)}
        >
          <div className="hidden sm:flex items-center gap-1">
            <span className="text-black font-medium">Create account</span>
            <span className="text-blue-500">It's free</span>
          </div>
          <div className="sm:hidden flex flex-col items-center text-center text-blue-500">
            <span>Create</span>
            <span>Account</span>
          </div>
          <span className="text-black">▾</span>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default NavBar;

