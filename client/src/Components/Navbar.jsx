import React, { useState } from 'react';
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Skill",
        path: "#skill",
    },
    {
        title: "Services",
        path: "#services",
    },
    {
        title: "Awards",
        path: "#awards",
    },
    {
        title: "Testimonials",
        path: "#testimonials",
    },
    {
        title: "News & Blogs",
        path: "#news&Blogs",
    },
    {
        title: "Media & Publication",
        path: "#media&Publication",
    },
    {
        title: "Contact",
        path: "#contact",
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbar] = useState(false);

    const handleClick = () => {
        setNavbar(!navbarOpen);
    };

    return (
        <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-70 backdrop-blur-lg shadow-custom-blur'>
            <div className='flex flex-wrap items-center xl:justify-around mx-auto px-4 py-5'>
                <a href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                    R
                </a>

                <div className='absolute right-0 px-3 py-2 block xl:hidden'>
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
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;



