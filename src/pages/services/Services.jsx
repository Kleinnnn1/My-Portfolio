import { FaLaptopCode, FaDatabase, FaCogs } from "react-icons/fa";
import { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Building responsive and interactive websites using modern frameworks like React.js and Tailwind CSS.",
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description:
        "Creating scalable APIs and database solutions using technologies like Supabase and Django.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Solutions",
      description:
        "Designing tailored systems to automate and optimize business processes, such as my Job Request System project.",
    },
  ];

  return (
    <div className="bg-customBlack flex-col items-center justify-center min-h-screen p-10 text-customWhite">
      {/* Services Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-customOrange inline-block">
          Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-customDark p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 ${
              hoveredIndex === index ? "shadow-lg scale-105" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full transition-colors duration-300 ${
                hoveredIndex === index
                  ? "bg-customWhite text-customOrange"
                  : "bg-customOrange text-customWhite"
              }`}
            >
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-customWhite mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
