import React, { useState, useEffect } from 'react';
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import AnimatedButton from "./AnimatedButton";
import '../App.css';

export const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Skill", path: "#skill" },
    { title: "Services", path: "#services" },
    { title: "Awards", path: "#awards" },
    { title: "Testimonials", path: "#testimonials" },
    { title: "News & Blogs", path: "#news&Blogs" },
    { title: "Media & Publication", path: "#media&Publication" },
    { title: "Contact", path: "#contact" }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    // const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleClick = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className={`fixed mx-auto top-0 left-0 right-0 z-10 transition-transform duration-500 ease-in-out transform ${scrolled ? 'translate-y-0 bounce' : '-translate-y-full'} ${scrolled ? 'bg-black bg-opacity-70' : 'bg-transparent'} backdrop-blur-lg shadow-custom-blur`}>
            <div className='flex flex-wrap items-center xl:justify-around mx-auto px-4 py-5'>
                <a href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    R
                </a>
                <div className='absolute right-0 px-3 py-2 block md:hidden'>
                    <button onClick={handleClick} className="flex flex-col justify-center items-center">
                        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navbarOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${navbarOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${navbarOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} ></span>
                    </button>
                </div>
                <div className='menu hidden xl:block xl:w-auto' id="navbar">
                    <ul className='flex p-4 xl:p-0 xl:flex-row xl:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='hidden md:block xl:hidden absolute right-0 px-3 py-2'>
                    <AnimatedButton />
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
};

export default Navbar;