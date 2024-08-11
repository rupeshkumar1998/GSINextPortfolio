import React, { useState, useRef } from 'react'
import { navLinks } from './Navbar';


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
        className="flex items-center justify-center w-16 h-10 bg-white rounded-full focus:outline-none "
      >
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="block w-6 h-1 bg-purple-800 mb-1 transition-transform duration-500"></span>
          <span className="block w-6 h-1 bg-purple-800 mb-1 transition-transform duration-500"></span>
          <span className="block w-6 h-1 bg-purple-800 transition-transform duration-500"></span>
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
            {navLinks.map((item, index) => {
              const angle = (index / navLinks.length) * (2 * Math.PI);
              const x = Math.cos(angle) * 100;
              const y = Math.sin(angle) * 100;

              return (
                <a
                  key={index}
                  href={item.path}
                  className={`absolute flex items-center justify-center w-12 h-12 bg-white rounded-full transition-transform duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    transitionDelay: `${isOpen ? index * 50 : 0}ms`,
                  }}
                >
                  <span className="text-purple-600 text-xl">{item.icon}</span>
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
