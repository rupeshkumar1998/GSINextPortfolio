import React from 'react';
import { FiDownload } from "react-icons/fi";
import HeroSection from './HeroSection';
import banner from "../assets/Banner.png"


const PortfolioPage = () => {
    return (
        <>
      
        
        <div className="text-white bg-[#050709] p-8 sm:px-10  md:px-20 lg:px-32 shadow:top-right ">
            {<HeroSection />}
            <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 '>
                <div className="max-w-4xl mx-auto py-16 px-4 md:w-1/2 ">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">I am XYZ Kumar</h1>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r p-6 from-purple-700  via-purple-400 via-purple-300 via-purple-200 to-white text-transparent bg-clip-text">
                        Web Developer <br/> <span className='p-52'>&</span> <br/> <span className='p-10 '>UX Designer</span>
                    </h2>
                    <p className="mb:text-sm text-lg max-w-lg mb-8 ">
                        A passionate web developer specializing in creating dynamic and beautiful applications. With a strong foundation in both front-end and back-end technologies, I strive to build websites that are not only visually appealing but also user-friendly and high functional.
                    </p>
                    <button className="bg-slate-900 border-2 border-white hover:border-purple-900 flex items-center hover:bg-purple-100 transition duration-300 text-purple-700 font-bold py-2 px-4  gap-2 rounded-full">
                        Download CV <FiDownload className='mt-1' />
                    </button>
                </div>

                <div className=' lg:w-1/2 flex justify-center  items-center '>
                    <img className="transform scale-75"src={banner }/>
                </div>
            </div>

            {/* Experience Section */}
            <div className=" py-5 flex flex-wrap justify-around text-center space-y-4 lg:space-y-0 lg:space-x-28 ">
                <div className='flex space-x-2 items-center'>
                    <p className="text-5xl font-bold">2</p>
                    <p>Years of <br />   Experience</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <p className="text-5xl font-bold">5+</p>
                    <p>Projects <br/> Completed</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <p className="text-5xl font-bold">100</p>
                    <p>Happy <br/> Clients</p>
                </div>
            </div>  
        </div>
        </>
    );
}

export default PortfolioPage;
