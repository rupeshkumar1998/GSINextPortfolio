import React, { useEffect, useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
const ScrollProgress = () => {
    // Store the current scroll position as a percentage
    const [scroll, setScroll] = useState(0);

    // Function to calculate and update the scroll progress
    const onScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollPosition / windowHeight) * 100;
        setScroll(scrolled);
    };

    // Function to scroll the page back to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    // Effect to add and remove the scroll
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className="fixed bottom-5 right-3 z-50 cursor-pointer flex items-center justify-center opacity-70"
            onClick={scrollToTop} //Click event to scroll to top
        >
            <div
                className="relative w-12 h-12 flex items-center justify-center"
                style={{
                    background: `conic-gradient(#8641f6 ${scroll}%, #2D0F40 ${scroll}%)`,
                    borderRadius: '50%',
                }}
            >
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

