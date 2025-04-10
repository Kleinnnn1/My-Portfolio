import { useState, useEffect } from "react";
import { FaReact, FaDatabase, FaJs } from "react-icons/fa";
import { SiSupabase, SiMysql, SiDjango, SiTailwindcss } from "react-icons/si";

export default function AboutMe() {
  const [skillProgress, setSkillProgress] = useState([]);

  useEffect(() => {
    const skills = [
      {
        name: "React.js",
        percentage: 75,
        icon: <FaReact className="text-blue-500" />,
      },
      {
        name: "Supabase",
        percentage: 70,
        icon: <SiSupabase className="text-green-500" />,
      },
      {
        name: "Tailwind CSS",
        percentage: 65,
        icon: <SiTailwindcss className="text-blue-400" />,
      },
      {
        name: "PostgreSQL",
        percentage: 60,
        icon: <FaDatabase className="text-indigo-600" />,
      },

      {
        name: "MySQL",
        percentage: 50,
        icon: <SiMysql className="text-blue-700" />,
      },
      {
        name: "JavaScript",
        percentage: 40,
        icon: <FaJs className="text-yellow-400" />,
      },
      {
        name: "Django",
        percentage: 15,
        icon: <SiDjango className="text-green-700" />,
      },
    ];

    // Initialize progress to 0 for each skill
    setSkillProgress(skills.map(() => 0));

    // Start animation
    skills.forEach((skill, index) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress < skill.percentage) {
          currentProgress++;
          setSkillProgress((prev) => {
            const updatedProgress = [...prev];
            updatedProgress[index] = currentProgress;
            return updatedProgress;
          });
        } else {
          clearInterval(interval);
        }
      }, 20); // Adjust speed here (20ms per increment)
    });
  }, []);

  return (
    <div className="bg-customBlack text-customWhite min-h-screen p-10">
      {/* About Me Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-customOrange inline-block">
          About Me
        </h1>
      </div>

      {/* Introduction and Skills Section */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Introduction */}
        <div className="md:w-1/2 pr-6">
          <h2 className="text-3xl font-bold mb-4">
            I'm <span className="text-customWhite">Kenn a</span>
            <span className="text-customOrange"> Web Developer</span>
          </h2>
          <p className="text-xl leading-relaxed mb-6">
            I am a passionate Full Stack Web Developer with expertise in
            creating efficient, scalable, and user-friendly web applications. My
            goal is to solve real-world problems through modern and innovative
            solutions.
          </p>
          <br />
          <br />
          <div className="grid grid-cols-2 gap-4 text-lg p-1">
            <div className="border-b border-gray-700 pb-1">
              <p>
                <strong>Birthday:</strong> June 1, 2002
              </p>
            </div>
            <div className="border-b border-gray-700 pb-1">
              <p>
                <strong>Age:</strong> 23
              </p>
            </div>
            <div className="border-b border-gray-700 pb-1">
              <p>
                <strong>Email:</strong>{" "}
                <span className="text-base"> kennbalino@gmail.com</span>
              </p>
            </div>
            <div className="border-b border-gray-700 pb-1">
              <p>
                <strong>Degree:</strong>{" "}
                <span className="text-base">BS Information Technology</span>
              </p>
            </div>
            <div className="border-b border-gray-700 pb-1">
              <p>
                <strong>Phone:</strong> 09091104535
              </p>
            </div>
            <div className="border-b border-gray-700 pb-1">
              <p>
                <strong>City:</strong> Cagayan De Oro
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Skills */}
        <div className="md:w-1/2 mt-10 md:mt-0 pl-6">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="space-y-6">
            {/* Skills List */}
            {[
              {
                name: "React.js",
                percentage: 75,
                icon: <FaReact className="text-blue-500" />,
              },
              {
                name: "Supabase",
                percentage: 70,
                icon: <SiSupabase className="text-green-500" />,
              },
              {
                name: "Tailwind CSS",
                percentage: 65,
                icon: <SiTailwindcss className="text-blue-300" />,
              },
              {
                name: "PostgreSQL",
                percentage: 60,
                icon: <FaDatabase className="text-indigo-600" />,
              },

              {
                name: "MySQL",
                percentage: 50,
                icon: <SiMysql className="text-blue-700" />,
              },
              {
                name: "JavaScript",
                percentage: 40,
                icon: <FaJs className="text-yellow-400" />,
              },
              {
                name: "Django",
                percentage: 15,
                icon: <SiDjango className="text-green-700" />,
              },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center">
                    {skill.icon}
                    <p className="text-lg ml-2">{skill.name}</p>
                  </div>
                  <p className="text-lg font-medium">{skillProgress[index]}%</p>
                </div>
                <div className="bg-gray-700 w-full h-2 rounded">
                  <div
                    className="bg-customOrange h-2 rounded transition-all"
                    style={{ width: `${skillProgress[index]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education and Experience Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education Section */}
        <div className="bg-customDark p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-customWhite">
            Education
          </h2>
          <div className="relative">
            {[
              {
                year: "2021 - 2025",
                title: "Bachelor in Information Technology",
                school:
                  "University of Science and Technology of Southern Philippines",
                description:
                  "Currently a 4th-year student focusing on web and application development, seeking an internship opportunity in an IT company to gain hands-on experience and further develop skills in creating scalable solutions using modern frameworks.",
              },
              {
                year: "2018 - 2020",
                title: "Senior High Diploma",
                school: "Central Mindanao University",
                description:
                  "Completed the STEM strand, gaining a strong foundation in science, technology, and mathematics.",
              },
            ].map((education, index, array) => (
              <div key={index} className="relative pl-8 mb-10">
                {/* Dot */}
                <span className="absolute left-0 top-0 w-6 h-6 bg-customOrange rounded-full"></span>
                {/* Content */}
                <div className="ml-8">
                  <p className="text-lg font-medium text-customWhite">
                    {education.year}
                  </p>
                  <h3 className="text-lg font-bold text-customWhite">
                    {education.title}
                  </h3>
                  <p className="text-md italic text-gray-300">
                    {education.school}
                  </p>
                  <p className="text-sm mt-2 text-gray-300">
                    {education.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-customDark p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-customWhite">
            Experience
          </h2>
          <div className="relative">
            {[
              {
                year: "2024",
                title: "Private Freelance",
                description:
                  "Designed and deployed a public guest Wi-Fi system for gym clients, providing access through unique codes with a one-hour usage limit per code.",
              },
              {
                year: "2024 - 2025",
                title: "Fullstack Web Developer",
                description:
                  "Developed and implemented a web application to transform the traditional job request process at USTP-CDO into a fully digital workflow, significantly reducing processing time, minimizing manual errors, and improving overall operational efficiency.",
              },
            ].map((education, index, array) => (
              <div key={index} className="relative pl-8 mb-10">
                {/* Dot */}
                <span className="absolute left-0 top-0 w-6 h-6 bg-customOrange rounded-full"></span>
                {/* Content */}
                <div className="ml-8">
                  <p className="text-lg font-medium text-customWhite">
                    {education.year}
                  </p>
                  <h3 className="text-lg font-bold text-customWhite">
                    {education.title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-300">
                    {education.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
