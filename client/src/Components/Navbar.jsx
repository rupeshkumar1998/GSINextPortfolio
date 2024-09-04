import React, { useState, useEffect } from 'react';
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import AnimatedButton from "./AnimatedButton";
import '../App.css';
import { FaHome,FaUser,FaLaptopCode,FaTrophy,FaTools ,FaCommentDots,FaNewspaper,FaPhotoVideo,FaEnvelopeOpen} from "react-icons/fa";
import { GoProjectTemplate } from "react-icons/go";
// import Footer from './Footer';

export const navLinks = [
    { title: "Home", path: "/#home",icon: <FaHome/> },
    { title: "About", path: "/about" ,icon: <FaUser/>},
    // { title: "Projects", path: "/#projects",icon: <GoProjectTemplate/> },
    // { title: "Skill", path: "/#skill",icon: <FaLaptopCode/> },
    { title: "Services", path: "/#services", icon: <FaTools /> },
    { title: "Award & Recognition", path: "/#awardRecognition",icon: <FaTrophy/> },
    { title: "Testimonials", path: "/#testimonials",icon: <FaCommentDots/> },
    { title: "News & Blogs", path: "/#news&Blogs",icon: <FaNewspaper/> },
    { title: "Media & Publication", path: "/#media&Publication",icon: <FaPhotoVideo  /> },
    { title: "Contact", path: "/#contact",icon: <FaEnvelopeOpen /> }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    // const [showNavbar, seShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
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
                <div className=''>
                <a href={"/"} className='text-2xl md:text-4xl  text-white font-bold'>
                    GSI
                </a>
                </div>
                
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
            {navbarOpen && <MenuOverlay links={navLinks}/>}
            {/* {navbarOpen ? <MenuOverlay links={navLinks}/>:null} */}

            {/* footer wrok */}
            
        </nav>
       
    );
};

export default Navbar;
