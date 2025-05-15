import React, { useState } from "react";
import HappyMeterForm from "../../assets/images/HAPPY METER/happy meter form.jfif";

export default function HappyMeterModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(true);

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
            Happy Meter Feedback Form
          </h2>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <p className="mb-4 text-gray-700">
            This project collects feedback in a structured and visually clear
            format using the Happy Meter. It helps evaluate customer satisfaction
            levels through a user-friendly form.
          </p>

          {/* Loading Spinner */}
          {isLoading && (
            <div className="flex justify-center items-center mb-4">
              <div className="w-8 h-8 border-4 border-customOrange border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Display Image */}
          <img
            src={HappyMeterForm}
            alt="Happy Meter Feedback Form"
            className={`w-full rounded-lg shadow-md ${
              isLoading ? "hidden" : "block"
            }`}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
