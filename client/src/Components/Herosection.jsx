
import React from 'react';
// import { TextRevealCardPreview } from './Text';

import {TextRevealCardPreview} from './Text';

const App = () => {
    const data = {
        Video: "https://www.w3schools.com/howto/rain.mp4",  // Make sure this is a direct video link
        ProfilePic: "./logo.png",
        
    };

    return <Profiler {...data} />;
};

const Profiler = ({ Video, ProfilePic,  }) => {
    return (
        <div className="relative w-full h-96 overflow-hidden flex items-center justify-center">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={Video}
                autoPlay
                loop
                muted
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-55 transition-opacity duration-[500ms]"></div>
            <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center mb-4">
                    <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-52 lg:h-52 border-4 border-b-4 border-t-0 border-purple-500 rounded-full animate-spin-slow"></div>
                    <img
                        className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-60 lg:h-60 rounded-full object-contain"
                        src={ProfilePic}
                        alt="Profile"
                    />
                </div>
                <h1 className="text-white text-4xl">{<TextRevealCardPreview />}</h1>
            </div>
        </div>
    );
}

export default App;