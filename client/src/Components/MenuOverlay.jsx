// import React from 'react';
// import NavLink from './NavLink';

// const MenuOverlay = ({ links }) => {
//     return (
//         <ul className='flex flex-col py-4 items-center md:hidden'>
//             {links.map((link, index) => (
//                 <li key={index}>
//                     <NavLink href={link.path} title={link.title} />
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default MenuOverlay;


import React from 'react';

const MenuOverlay = ({ links }) => {
    return (
        // <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center'>
        <div className='fixed top-20 left-0 w-screen h-screen bg-black bg-opacity-80 '>
            <ul className='space-y-3 left-10 flex flex-col '>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.path} className='text-white text-sm hover:text-emerald-300'>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuOverlay;

