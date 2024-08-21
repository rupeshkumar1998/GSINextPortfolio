import React from 'react';
import { FiDownload } from "react-icons/fi";
import NumberCounter from './NumberCounter';



const App = () => {
    const data = {
        name: "XYZ Roy",
        title: "Web Developer & UX Designer",
        description: "A passionate web developer specializing in creating dynamic and beautiful applications. With a strong foundation in both front-end and back-end technologies, I strive to build websites that are not only visually appealing but also user-friendly and highly functional.",
        experience: 9,
        projects: 10,
        clients: 20,
        ProfilePic: "https://i.pinimg.com/originals/cc/f3/90/ccf3901b977d6df9a3ca16ac42c34b69.png" ,
        cv: "https://docs.google.com/document/d/12MqDueS9YjGL2VMkB-dfdE9bxvtzu_7k/edit?usp=sharing&ouid=112524250623259942594&rtpof=true&sd=true" 
    };

    return <PortfolioPage {...data} />;
};





const PortfolioPage = ({ name, title, description, experience, projects, clients, ProfilePic, cv }) => {
    const firstLetter = name.charAt(0);
    
    return (        
        <>
        
        <div className="text-white bg-[#050709] p-8 sm:px-10  md:px-20 lg:px-32 shadow:top-right ">
        <div className="absolute inset-0 flex justify-center top-60 sm:top-40 md:top-92  lg:bottom-96 lg:top-72  items-center z-0 lg:">
                <span className="text-white opacity-10 text-[15rem] sm:text-[15rem] md:text-[20rem] font-semibold leading-none">
                    {firstLetter}
                </span>
            </div>


            
            <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 '>
                <div className="max-w-5xl mx-auto my-24 px-4 md:w-1/2 ">
                    <h1 className="text-4xl md:text-3xl font-semi bold mb-4">{`I am ${name}`}</h1>
                    <h2 className="text-5xl md:text-3xl  font-bold mb-6 bg-gradient-to-r p-6 from-purple-700 via-purple-400 via-purple-300 via-purple-200 to-white text-transparent bg-clip-text">
                        {title.split('&')[0].trim()} <br/> <span className='p-44 sm:p-28'>&</span> <br/> <span className='p-10 md:p-8'>{title.split('&')[1].trim()}</span>
                    </h2>
                    <p className="mb:text-sm text-lg max-w-lg mb-8 ">
                        {description}
                    </p>
                    
                    <div className='flex justify-center mt-12 lg:justify-start'>
                        <a 
                            href={cv} 
                            download="XYZ_Roy_CV.pdf" 
                            className="bg-slate-900 border-2 border-white hover:border-purple-900 flex items-center cursor-pointer hover:bg-purple-100 transition duration-300 text-purple-700 font-bold py-3 px-6 lg:py-3 lg:px-4 gap-2 rounded-full text-base lg:text-lg"
                        >
                            Download CV <FiDownload className='ml-2' />
                        </a>   
                    </div>
                    
                </div>
                

                <div className="lg:w-1/2 flex justify-center bottom-0 sm:bottom-0 md:bottom-0 lg:bottom-10 place-items-center relative">
                    <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-76 lg:h-76 border-4 border-b-4 border-t-0 border-purple-500 rounded-full animate-spin-slow z-0"></div>
                    <img
                        className="   w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full object-contain transform scale-100 relative z-10"
                        src={ProfilePic}
                        alt="Profile"
                    />
                </div>

                
            </div>

            {/* Experience Section */}
            <div className=" py-5 flex flex-wrap justify-around text-center space-y-4 lg:space-y-0 lg:space-x-28 ">
                <div className='flex space-x-2 items-center'>
                    <p className="text-5xl font-bold"><NumberCounter n={experience} /></p>
                    <p>Years of <br />   Experience</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <p className="text-5xl font-bold"><NumberCounter n={projects} />+</p>
                    <p>Projects <br/> Completed</p>
                </div>
                <div className='flex space-x-2 items-center'>
                    <p className="text-5xl font-bold"><NumberCounter n={clients} /></p>
                    <p>Happy <br/> Clients</p>
                </div>
            </div>  
        </div>
        </>
    );
}



export default App;






