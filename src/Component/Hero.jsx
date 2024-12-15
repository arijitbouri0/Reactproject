import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Hero = () => {
  const [isGroupJoined, setIsGroupJoined] = useState(false);

  return (
    <div
      className="relative w-screen h-[500px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uu6XElJkvPqElyuSYafPRAa8sqHqx8xVa47gXo4Vvz2vHaK3fSjAQ~PcJRQITE2PMgfvBUTQ7qUnXvkWVxN~3nZxsdQ6JzVIaZGnlZbBalJ-NwEotEF7LTy3wLIp7bgS~x7bvic5QVrSeliN9gUeRi6be9egKnrnY22h1kRigezrkf5ISiSPeuS-H-Joyc91R5NU5Sz9uAcUrkRmASgZdd3BBLlFvv983LLvWt6WZljXEmKt4iNhcmSmyYicacBy~vP1nKmjEpYZAC~RXsfhHY-42Cyd5jDjpIAI1GNtPL~NGIjiR4zGfBs2f~PCYa~LGfy92N5qpYCgi~E9ILHHpQ__')",
      }}
    >
      {/* Back Button and Join Group Button for Small Screens */}
      <div className="absolute top-4 left-0 flex items-center justify-between w-full px-4 sm:hidden">
          <FaArrowLeft className="mr-2 text-white text-4xl" />
        <button
          onClick={() => setIsGroupJoined(!isGroupJoined)}
          className="border border-white text-white bg-transparent px-4 py-2 rounded-md"
        >
          {isGroupJoined ? "Leave Group" : "Join Group"}
        </button>
      </div>

      {/* Centered Text for Small and Large Screens */}
      <div className="absolute text-white text-center sm:text-left top-[50%] transform -translate-y-1/2 left-4 sm:top-[358px] sm:left-[200px]">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          <span className="bg-opacity-70 px-2 py-1 rounded-md">
            Computer Engineering
          </span>
        </h1>
        <p className="text-sm sm:text-lg font-semibold">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};

export default Hero;
