import React from 'react';
import { navLinks } from './Navbar';

const Footer = () => {
    const displayedLinks = navLinks.filter(link =>
        link.title.includes("Home") ||
        link.title.includes("Services") ||
        link.title.includes("Contact")
    );
    return (
        <footer className='p-6 md:p-10 bg-black text-white'>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-2xl">GSI Next</h3>
                    <p className="text-sm">Building the Future Together</p>
                </div>
            </div>
            {/* Navigation Links */}
            <div className='flex justify-center space-x-6 mb-4'>
                {displayedLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.path}
                        className='text-white font-semibold hover:text-purple-500 transition duration-500'
                    >
                        {link.title}.
                    </a>
                ))}
            </div>
            {/* Copyright Section */}
            <div className='flex justify-center'>
                <p className='text-gray-500 text-sm'>
                    © 2024 All Rights Reserved by{' Rupesh & GSI Next Portfolio Team '}
                    <a className='text-purple-500 hover:underline'>
                        GSI Next
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
