import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black text-white">
      <h1 className="text-5xl font-extrabold text-pink-500 mb-6">
        Welcome to EmpowerHer
      </h1>

      {/* Large Text Box */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-3/4 max-w-2xl">
        <p className="text-lg text-gray-300 text-center">
          EmpowerHer is an AI-powered mentorship platform designed to support
          women in tech by connecting them with experienced mentors and providing
          resources for career growth.
        </p>
      </div>

      <div className="flex gap-6 mt-10">
        {/* Mentee Button */}
        <button
          className="bg-pink-500 text-white px-8 py-4 rounded-lg flex items-center gap-3 shadow-md hover:bg-pink-600 transition transform hover:scale-105"
          onClick={() => navigate("/mentee-signin")}
        >
 
          Mentee Login
        </button>

        {/* Mentor Button */}
        <button
          className="bg-blue-500 text-white px-8 py-4 rounded-lg flex items-center gap-3 shadow-md hover:bg-blue-600 transition transform hover:scale-105"
          onClick={() => navigate("/mentor-signin")}
        >
   
          Mentor Login
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
