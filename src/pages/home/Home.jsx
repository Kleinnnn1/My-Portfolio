import { useNavigate } from "react-router-dom";
import Image from "../../assets/images/Image.png";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // To handle typing/erasing state
  const typingSpeed = 100; // Typing speed in milliseconds
  const pauseTime = 1000; // Pause after typing/erasing

  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    const titles = ["Frontend Web Developer", "Backend Web Developer"];
    let typingTimeout;

    if (isTyping) {
      if (currentTitle.length < titles[currentIndex].length) {
        typingTimeout = setTimeout(() => {
          setCurrentTitle(
            titles[currentIndex].slice(0, currentTitle.length + 1)
          );
        }, typingSpeed);
      } else {
        typingTimeout = setTimeout(() => setIsTyping(false), pauseTime);
      }
    } else {
      if (currentTitle.length > 0) {
        typingTimeout = setTimeout(() => {
          setCurrentTitle(
            titles[currentIndex].slice(0, currentTitle.length - 1)
          );
        }, typingSpeed);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [currentTitle, isTyping, currentIndex, typingSpeed, pauseTime]);

  return (
    <div className="bg-customBlack flex flex-col md:flex-row justify-between items-center min-h-screen p-10">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-3xl text-customWhite font-bold border-customOrange inline-block">
          Hello, my name is <br />
          <span className="text-customOrange font-bold font-serif">
            Kenneth Jhun N. Balino
          </span>
        </h1>
        <br />
        <p className="text-2xl mt-2 text-customWhite">
          I'm a{" "}
          <span className="text-customOrange font-bold">{currentTitle}</span>
        </p>
        <br />
        <p className="text-lg mt-2 text-customWhite">
          I specialize in designing and developing modern, scalable, and
          user-friendly web applications that address real-world challenges,
          enhance user experiences, and drive operational efficiency through
          innovative and practical solutions.
        </p>
        <br />
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative">
        {/* Left Bracket */}
        <div className="absolute -top-10 left-0 flex flex-col items-start">
          <div className="bg-customOrange h-1 w-10"></div>
          <div className="bg-customOrange h-10 w-1"></div>
        </div>

        {/* Image */}
        <img
          src={Image}
          alt="Kenneth Jhun N. Balino"
          className="rounded-lg shadow-lg w-full max-w-sm"
        />

        {/* Right Bracket */}
        <div className="absolute top-80 right-0 flex flex-col items-end">
          <div className="bg-customOrange h-10 w-1"></div>
          <div className="bg-customOrange h-1 w-10"></div>
        </div>
      </div>
    </div>
  );
}
