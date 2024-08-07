import React, { useState, useRef } from 'react';
// import { FaGithub, FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaWordpress, FaInstagram, FaDocker } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import '../App.css';

const icons = [
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
  { icon: <FaHome />, link: "#" },
];

const AnimatedButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef(null);
  const startAngleRef = useRef(0);
  const startRotationRef = useRef(0);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    startAngleRef.current = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    startRotationRef.current = rotation;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const currentAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const newRotation = startRotationRef.current + (currentAngle - startAngleRef.current) * (180 / Math.PI);
    setRotation(newRotation);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      <button
        onClick={toggleOpen}
        className="flex items-center justify-center w-16 h-16 bg-white rounded-full focus:outline-none "
      >
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="block w-8 h-1 bg-orange-500 mb-1 transition-transform duration-500"></span>
          <span className="block w-8 h-1 bg-orange-500 mb-1 transition-transform duration-500"></span>
          <span className="block w-8 h-1 bg-orange-500 transition-transform duration-500"></span>
        </div>
      </button>

      <div className=" absolute top-60 right-28">
        <div className="absolute">

          <div
            ref={containerRef}
            className={`absolute flex items-center justify-center w-40 h-40`}
            style={{ transform: `rotate(${rotation}deg)` }}
            onMouseDown={handleMouseDown}
          >
            {icons.map((item, index) => {
              const angle = (index / icons.length) * (2 * Math.PI);
              const x = Math.cos(angle) * 100;
              const y = Math.sin(angle) * 100;

              return (
                <a
                  key={index}
                  href={item.link}
                  className={`absolute flex items-center justify-center w-12 h-12 bg-white rounded-full transition-transform duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    transitionDelay: `${isOpen ? index * 50 : 0}ms`,
                  }}
                >
                  <span className="text-orange-500 text-xl">{item.icon}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedButton;
