import React, { useState } from "react";
import JRSDEMO from "../../assets/images/JRS SYSTEM/jrs demo.gif"; // Import the GIF

export default function JRSDemo({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl relative">
        {/* Close Button */}
        <button
          className="absolute top-[-20px] right-[-20px] text-3xl font-bold text-white bg-customOrange rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold text-customBlack">
            Job Request System
          </h2>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p className="mb-4 text-gray-700">
            This web app system simplifies the process of handling job requests.
            It allows users to easily submit, track, and manage their requests.
            This demo provides a clear overview of how the system works and its
            key features.
          </p>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 border-4 border-customOrange border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Display the GIF */}
          <img
            src={JRSDEMO}
            alt="Job Request System Demo"
            className={`w-full rounded-lg shadow-md ${
              isLoading ? "hidden" : "block"
            }`}
            onLoad={() => setIsLoading(false)} // Hide spinner when GIF is loaded
          />
        </div>
      </div>
    </div>
  );
}
