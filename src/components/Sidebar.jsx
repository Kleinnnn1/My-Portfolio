import React, { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaListUl, FaFolder, FaEnvelope } from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [nextPath, setNextPath] = useState(null);
  const [isSliding, setIsSliding] = useState(false);

  const handleNavigation = (path) => {
    if (path !== currentPath) {
      setNextPath(path);
      setIsSliding(true);
      setTimeout(() => {
        setCurrentPath(path);
        setNextPath(null);
        setIsSliding(false);
        navigate(path);
      }, 500);
    }
  };

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Services", path: "/services", icon: <FaListUl /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaFolder /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-customDark text-white w-20 md:w-64 flex flex-col justify-between p-4 md:p-6 h-screen fixed transition-all duration-300">
        {/* Menu */}
        <ul className="space-y-4 flex flex-col justify-center items-center md:items-start flex-1">
          {menuItems.map((item) => (
            <li key={item.name} className="w-full">
              <button
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center px-2 py-2 rounded-lg w-full text-lg cursor-pointer transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-customOrange"
                    : "hover:bg-gray-700"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="ml-3 hidden md:inline">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-customBlack ml-20 md:ml-64 overflow-hidden relative h-screen">
        {/* Current Page */}
        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${
            isSliding ? "translate-x-full" : "translate-x-0"
          } overflow-y-auto h-full`}
        >
          <Outlet key={currentPath} />
        </div>

        {/* Next Page */}
        {nextPath && (
          <div
            className={`absolute inset-0 transform transition-transform duration-500 ${
              isSliding ? "translate-x-0" : "-translate-x-full"
            } overflow-y-auto h-full`}
          >
            <Outlet key={nextPath} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;


// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaHome, FaUser, FaListUl, FaFolder, FaEnvelope } from "react-icons/fa";

// function Sidebar() {
//   const menuItems = [
//     { name: "Home", path: "/", icon: <FaHome /> },
//     { name: "About", path: "/about", icon: <FaUser /> },
//     { name: "Services", path: "/services", icon: <FaListUl /> },
//     { name: "Portfolio", path: "/portfolio", icon: <FaFolder /> },
//     { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
//   ];

//   return (
//     <div className="flex">
//       {/* Sidebar Section */}
//       <div className="bg-customDark text-white w-64 flex flex-col justify-between p-6 h-screen fixed">
//         {/* Logo */}
//         <div className="relative text-center mb-8">
//           {/* Left Bracket */}
//           <div className="absolute top-0 left-0 flex flex-col items-start">
//             <div className="bg-customOrange h-1 w-5"></div>
//             <div className="bg-customOrange h-5 w-1"></div>
//           </div>

//           {/* Name */}
//           <div className="text-4xl font-bold">
//             <span className="font-serif text-white">K</span>
//             <span className="font-sans text-gray-100">enn</span>
//           </div>

//           {/* Right Bracket */}
//           <div className="absolute top-4 right-0 flex flex-col items-end">
//             <div className="bg-customOrange h-5 w-1"></div>
//             <div className="bg-customOrange h-1 w-5"></div>
//           </div>
//         </div>

//         {/* Menu */}
//         <ul className="space-y-4 flex flex-col justify-center items-center flex-1">
//           {menuItems.map((item) => (
//             <li key={item.name} className="w-full">
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 rounded-lg w-full text-lg cursor-pointer transition-all duration-300 ${
//                     isActive
//                       ? "text-customOrange bg-gray-800 shadow-md"
//                       : "hover:bg-gray-700"
//                   }`
//                 }
//               >
//                 <span className="mr-3 text-xl">{item.icon}</span>
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex-1 bg-gray-100 ml-64 overflow-y-auto h-screen">
//         <Outlet /> {/* Nested routes will render here */}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
