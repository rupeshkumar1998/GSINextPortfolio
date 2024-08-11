import React from 'react';
import '../App.css'; 

const MenuOverlay = ({ links }) => {
    return (
        <div className='fixed top-20 left-0 h-auto  w-auto rounded-3xl bg-[#0F0715] bg-opacity-50 md:hidden flex justify-start z-50 '>
            <div className='h-auto w-auto  bg-[#2D0F40] shadow-lg flex flex-col pt-10 rounded-r-3xl overflow-scroll no-scrollbar'>
                <ul className='space-y-1   pl-3'>
                    {links.map((link, index) => (
                        <li key={index} className="relative group">

                            {/* Overlay Bottom */}
                            {/* <div className="overlayTop"></div> */}



                            <a
                                href={link.path}
                                className='relative flex items-center p-3 '
                            >

                                {link.icon && (
                                    <span className="text-white group-hover:text-white mr-3 z-10">
                                        {link.icon}
                                    </span>
                                )}
                                <span className='text-white group-hover:text-white font-medium z-10'>
                                    {link.title}

                                </span><span className="overlayBottom"/>
                                <span className="overlayTop"/>

                            </a>
                            {/* Overlay Top */}
                            {/* <div className="overlayBottom"></div> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MenuOverlay;
