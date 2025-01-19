import React, { useState } from "react";
import JRSDemo from "./JRSDemoModal"; // JRS Modal
import WifiHotspotDemo from "./WifiHotspotDemoModal"; // Wifi Hotspot Modal
import JRSICON from "../../assets/images/JRS SYSTEM/JRS ICON.gif";
import OMADAICON from "../../assets/images/WIFI HOTSPOT VOUCHER/WIFI COVER.jpg";

export default function Portfolio() {
  const [isJRSModalOpen, setIsJRSModalOpen] = useState(false); // State for JRS modal
  const [isWifiModalOpen, setIsWifiModalOpen] = useState(false); // State for Wifi modal

  const projects = [
    {
      gif: JRSICON,
      title: "Job Request System",
      onClick: () => setIsJRSModalOpen(true), // Open JRS modal
    },
    {
      gif: OMADAICON,
      title: "Wifi Hotspot Voucher",
      onClick: () => setIsWifiModalOpen(true), // Open Wifi modal
    },
  ];

  return (
    <div className="bg-customBlack text-customWhite min-h-screen p-10">
      {/* Portfolio Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-customOrange inline-block">
          Portfolio
        </h1>
        <p className="mt-10 text-lg">My Last Projects :</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            onClick={project.onClick} // Add click event for modal
          >
            <img
              src={project.gif}
              alt={project.title}
              className="w-full h-48 object-cover cursor-pointer"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      <JRSDemo
        isOpen={isJRSModalOpen}
        onClose={() => setIsJRSModalOpen(false)}
      />
      <WifiHotspotDemo
        isOpen={isWifiModalOpen}
        onClose={() => setIsWifiModalOpen(false)}
      />
    </div>
  );
}

// import JRSICON from "../../assets/images/JRS SYSTEM/JRS ICON.gif";
// import OMADAICON from "../../assets/images/WIFI HOTSPOT VOUCHER/WIFI COVER.jpg";

// export default function Portfolio() {
//   const projects = [
//     {
//       gif: JRSICON, // Local GIF for the first project
//       title: "Job Request System",
//     },
//     {
//       gif: OMADAICON, // Local image for the second project
//       title: "Wifi Hotspot Voucher",
//     },
//   ];

//   return (
//     <div className="bg-customBlack text-customWhite min-h-screen p-10">
//       {/* Portfolio Header */}
//       <div className="mb-10">
//         <h1 className="text-4xl font-bold border-b-4 border-customOrange inline-block">
//           Portfolio
//         </h1>
//         <p className="mt-10 text-lg">My Last Projects :</p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
//           >
//             <img
//               src={project.gif} // Use the imported GIF or image
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{project.title}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
