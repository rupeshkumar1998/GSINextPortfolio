// import React, { useEffect, useState } from 'react';

// const ScrollProgress = () => {
//     // State to store the current scroll position as a percentage
//     const [scroll, setScroll] = useState(0);

//     // Function to calculate and update the scroll progress
//     const onScroll = () => {
//         // Calculate the current scroll position and total scrollable height
//         const scrollPosition = window.scrollY;
//         const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         // Calculate the percentage of the page that has been scrolled
//         const scrolled = (scrollPosition / windowHeight) * 100;
//         // Update the scroll state
//         setScroll(scrolled);
//     };

//     // Function to scroll the page back to the top smoothly
//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     // Effect to add and remove the scroll event listener
//     useEffect(() => {
//         window.addEventListener('scroll', onScroll);
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     return (
//         // Container for the scroll progress icon
//         <div 
//             className="fixed bottom-8 right-8 z-50 cursor-pointer"
//             onClick={scrollToTop} // Attach click event to scroll to top
//         >
//             <svg 
//                 width="50" 
//                 height="50" 
//                 className="transform hover:scale-110 transition-transform duration-300 ease-in-out"
//             >

//               {/* Background circle */}
//               <circle
//                     cx="25"
//                     cy="25"
//                     r="20"
//                     stroke="#1a1a1a"
//                     strokeWidth="5"
//                     fill="none"
//                     strokeDasharray="126"
//                     strokeDashoffset="0"
//                 />
                
//                 {/* Foreground circle that indicates scroll progress */}
//                 <circle
//                     cx="25"
//                     cy="25"
//                     r="20"
//                     stroke="#ffffff" // White color for the progress path
//                     strokeWidth="5"
//                     fill="none"
//                     strokeDasharray="126"
//                     strokeDashoffset={126 - (scroll / 100) * 126} // Adjust based on scroll state
//                     className="transition-stroke duration-300 ease-in-out"
//                 />
                
                

//                 {/* Triangle icon on the circle path */}
//                 <polygon
//                     points="25,5 20,15 30,15"
//                     fill="#ffffff"
//                     style={{ transform: `rotate(${(scroll / 100) * 360}deg)`, transformOrigin: 'center' }}
//                     className="transition-transform duration-300 ease-in-out"
//                 />

//                 {/* Upward arrow inside the circle */}
//                 <path
//                     d="M25 35 L25 15 M20 20 L25 15 L30 20" // Arrow path
//                     stroke="#ffffff"
//                     strokeWidth="2"
//                     fill="none"
//                     strokeLinecap="round"
//                 />
//             </svg>
//         </div>
//     );
// };

// export default ScrollProgress;


import React, { useEffect, useState } from 'react';
// import { FaCaretUp } from 'react-icons/fa'; 
import { FaArrowUpLong } from "react-icons/fa6";// Upward arrow icon
import { FiCircle, FiTriangle } from 'react-icons/fi'; // Circle and Triangle icons

const ScrollProgress = () => {
    // State to store the current scroll position as a percentage
    const [scroll, setScroll] = useState(0);

    // Function to calculate and update the scroll progress
    const onScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollPosition / windowHeight) * 100;
        setScroll(scrolled);
    };

    // Function to scroll the page back to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({ top: 0});
    };

    // Effect to add and remove the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div 
            className="fixed bottom-5 right-3 z-50 cursor-pointer flex items-center justify-center opacity-70"
            onClick={scrollToTop} // Attach click event to scroll to top
        >
            <div 
                className="relative w-12 h-12 flex items-center justify-center"
                style={{
                    background: `conic-gradient(#8641f6 ${scroll}%, #2D0F40 ${scroll}%)`,
                    borderRadius: '50%',
                }}
            >
                {/* Triangle icon on the circle path */}
                {/* <FiTriangle
                    className="absolute text-white"
                    size={12}
                    style={{
                        transform: `rotate(${(scroll / 100) * 360}deg) translate(-50%, -80%)`,
                    }}
                /> */}

                {/* Upward arrow inside the circle */}
                <FaArrowUpLong
                    className="text-[#ffffff] hover:animate-bounceArrow"
                    size={20} 
                />
            </div>
        </div>
    );
};

export default ScrollProgress;

