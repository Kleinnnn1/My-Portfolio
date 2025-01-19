import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function ContactMe() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const contacts = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      description: "+63 9091104535",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "kennbalino@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      description: (
        <a
          href="https://github.com/Kleinnnn1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-customOrange hover:underline"
        >
          github.com/Kleinnnn1
        </a>
      ), // GitHub URL
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      description: (
        <a
          href="https://www.linkedin.com/in/kenneth-jhun-n-balino"
          target="_blank"
          rel="noopener noreferrer"
          className="text-customOrange hover:underline"
        >
          linkedin.com/in/kenneth-jhun-n-balino
        </a>
      ), // LinkedIn URL
    },
  ];

  return (
    <div className="bg-customBlack flex-col items-center justify-center min-h-screen p-10 text-customWhite">
      {/* Contact Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-customOrange inline-block">
          Contact
        </h1>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {contacts.map((contact, index) => (
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
              {contact.icon}
            </div>
            <h3 className="text-xl font-bold text-customWhite mb-2">
              {contact.title}
            </h3>
            <p className="text-gray-300">{contact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
