// // import React from 'react';
// // import {navLinks} from './Navbar';

// // const Footer = ({}) => {
// //     const displayedLinks = navLinks.filter(link =>
// //         link.title.includes("Home") ||
// //         link.title.includes("Services") ||
// //         link.title.includes("Contact")
// //     );

// //     return (
// //         <div className='h-32 bg-[#0F0715]'>
// //             <div className='h-32 bg-[#2D0F40]'>
// //                 <ul>
// //                     {displayedLinks.map((link, index) => (
// //                         <li key={index}>
// //                             <a href={link.path}>
// //                                 <span className='text-white font-medium'>
// //                                     {link.title}
// //                                 </span>
// //                             </a>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Footer;





// import React from 'react';
// import {navLinks} from './Navbar';
// import { FaArrowUp } from 'react-icons/fa'; // For the scroll-up arrow icon

// const Footer = () => {

//     const displayedLinks = navLinks.filter(link =>
//                 link.title.includes("Home") ||
//                 link.title.includes("Services") ||
//                 link.title.includes("Contact")
//             );

//     return (
//         <footer className='bg-[#0F0715] py-6'>
//             {/* Logo Section */}
//             <div className='flex justify-center mb-4'>
//                 {/* <img src="/" alt="Logo" className='h-12' /> */}
//                 <a  className='text-3xl md:text-5xl text-white font-extrabold hover:text-purple-500'>
//                     GSI Group
//                 </a>
//             </div>

//             {/* Navigation Links */}
//             <div className='flex justify-center space-x-6 mb-4'>
//                 {displayedLinks.map((link, index) => (
//                     <a
//                         key={index}
//                         href={link.path}
//                         className='text-white font-semibold hover:text-purple-500 transition duration-500'
//                     >
//                         {link.title}.
//                     </a>
//                 ))}
//             </div>

//             {/* Copyright Section */}
//             <div className='flex justify-center'>
//                 <p className='text-gray-500 text-sm'>
//                     © 2024 All Rights Reserved by{' Rupesh & GSI Next Portfolio Team '}
//                     <a className='text-purple-500 hover:underline'>
//                         GSI Next
//                     </a>
//                 </p>
//             </div>

//             {/* Scroll-up Arrow */}
//             {/* <div className='flex justify-center mt-8 z-30'>
//                 <a href="#top" className='text-purple-500 border-2 border-purple-500 p-2 rounded-full hover:bg-purple-500 hover:text-white transition duration-300'>
//                     <FaArrowUp />
//                 </a>
//             </div> */}
//         </footer>
//     );
// };

// export default Footer;



// import React from 'react';
// import {navLinks} from './Navbar';

// const Footer = ({}) => {
//     const displayedLinks = navLinks.filter(link =>
//         link.title.includes("Home") ||
//         link.title.includes("Services") ||
//         link.title.includes("Contact")
//     );

//     return (
//         <div className='h-32 bg-[#0F0715]'>
//             <div className='h-32 bg-[#2D0F40]'>
//                 <ul>
//                     {displayedLinks.map((link, index) => (
//                         <li key={index}>
//                             <a href={link.path}>
//                                 <span className='text-white font-medium'>
//                                     {link.title}
//                                 </span>
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Footer;





import React from 'react';
import {navLinks} from './Navbar';
import { FaArrowUp } from 'react-icons/fa'; // For the scroll-up arrow icon

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
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold">Stay Updated</h4>
            <div className="flex mt-2">
              <input type="email" placeholder="Enter Email Address" className="p-2 rounded text-black w-full md:w-auto"/>
              <button className="ml-2 bg-orange-400 px-4 py-2 rounded">Subscribe</button>
            </div>
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

            {/* Scroll-up Arrow */}
            {/* <div className='flex justify-center mt-8 z-30'>
                <a href="#top" className='text-purple-500 border-2 border-purple-500 p-2 rounded-full hover:bg-purple-500 hover:text-white transition duration-300'>
                    <FaArrowUp />
                </a>
            </div> */}
        </footer>
    );
};

export default Footer;
