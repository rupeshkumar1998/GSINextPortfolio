import React from 'react';

const NavLink = ({href, title }) => {
    return (
        <a href={href} className='block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:via-purple-700 after:to-purple-950 after:absolute after:left-0 after:-bottom-1.5 after:transition-all after:duration-700'>
            {title}
        </a>
    );
};

export default NavLink;
