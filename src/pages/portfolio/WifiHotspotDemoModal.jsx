import React from "react";
import Pic1 from "../../assets/images/WIFI HOTSPOT VOUCHER/WIFI PORTAL MOBILE.png";

export default function WifiHotspotDemo({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-10/12 max-w-sm relative">
        {/* Close Button */}
        <button
          className="absolute top-[-20px] right-[-20px] text-3xl font-bold text-white bg-customOrange rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80 transition"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold text-customBlack">
            Public Guest Gym Wifi
          </h2>
        </div>

        {/* Modal Content */}
        <div className="p-3">
          <p className="mb-2 text-sm text-gray-700 text-center">
            The Wifi allows users to access the internet using codes, each valid
            for one hour. Below is a screenshot of the wifi portal.
          </p>
          {/* Center the Image */}
          <div className="flex justify-center items-center">
            <img
              src={Pic1}
              alt="Wifi Hotspot Manager Screenshot 1"
              className="w-auto max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
