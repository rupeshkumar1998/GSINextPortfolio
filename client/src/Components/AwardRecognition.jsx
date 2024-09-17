import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import axios from 'axios';
// import { awardsData } from "../Data/AwardsData"

const AwardRecognition = () => {
    const navigate = useNavigate();

    const [awardsData, setAwardsData] = useState([]);  // State for fetched data


     // Fetch awards data from the API
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/awardRecognition/getall');
                setAwardsData(response.data.awardRecognitions);
                // setFilteredAwards(response.data.awardRecognitions);  // Set initial filtered data
            } catch (error) {
                // console.error("Error fetching awards data:", error);
            }
        };

        fetchData();
    }, []);


    const handleReadMore = (item) => {
        navigate('/awards', { state: item });
    };

    const handleViewMore = () => {
        navigate('/awards');
    };

    return (
        <div className="p-20 flex items-center justify-center flex-col h-auto bg-[#2D0F40]" id="awardRecognition"
            data-aos="flip-down"
            data-aos-duration="1000">

            {/* Awards and Recognition header section */}
            {/* <div className="w-3/4 mb-5">
                <div>
                    <h2 className="textlinearGradient text-4xl font-bold mb-4">
                        Awards and Recognitions
                    </h2>
                    <a className="text-white">
                        Explore the awards, recognitions, and certifications that highlight professional excellence and commitment to development.
                    </a>
                </div>
                <div>
                    <span
                    onClick={() => handleViewMore()}
                    className="text-blue-400 ml-2 cursor-pointer hover:underline">
                    view more
                </span>
                </div>

            </div> */}


            <div className="container mx-auto px-4">
                <div className="grid grid-cols-[90%] md:grid-cols-[70%,10%] gap-4 justify-center">
                    <div className="p-4">
                        <h2 className="textlinearGradient text-4xl font-bold mb-4">
                            Awards and Recognitions
                        </h2>
                        <a className="text-white">
                            Explore the awards, recognitions, and certifications that highlight professional excellence and commitment to development.
                        </a>
                    </div>
                    <div className="p-4 text-right mt-auto">
                        <span
                            onClick={handleViewMore}
                            className="text-blue-400 ml-2 cursor-pointer hover:text-purple-600">
                            view more
                        </span>
                    </div>
                </div>
            </div>

            {/* Swiper container for sliding AwardRecognitions */}
            <Swiper
                breakpoints={{
                    490: {
                        slidesPerView: 2, // Number of slides per view on small screens
                        spaceBetween: 15, // Space between slides on small screens
                    },
                    700: {
                        slidesPerView: 3, // Number of slides per view on larger screens
                        spaceBetween: 15, // Space between slides on larger screens
                    },
                }}
                freeMode={true} // Enables free mode for continuous scrolling
                pagination={{
                    clickable: true, // Makes pagination bullets clickable
                }}
                autoplay={{
                    delay: 3000, // Time in ms before moving to the next slide
                    disableOnInteraction: false, // Allows autoplay to continue after user interactions
                }}
                modules={[FreeMode, Pagination, Autoplay]} // Swiper modules used
                className="max-w-[90%] lg:max-w-[80%]">
                {awardsData.map((item, index) => (
                    <SwiperSlide key={item.title}>
                        {/* Individual AwardRecognition slide */}
                        <div className="bg-[#50097d] relative m-2 flex flex-col gap-4 group shadow-lg text-white rounded-xl p-4 h-auto cursor-pointer">
                            {/* Image of the Award */}
                            <img src={item.svg.url} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-75 transition-opacity duration-300" />
                            {/* Title and Description */}
                            <div className="relative w-full">
                                <h1 className="text-xl lg:text-2xl font-semibold text-purple-400">{item.title}</h1>
                                <p className="mt-2 lg:text-[18px]">
                                    {`${item.content.substring(0, 50)}...`}
                                    <span
                                        onClick={() => handleReadMore(item)}
                                        className="text-blue-400 ml-2 cursor-pointer hover:underline">
                                        Read More
                                    </span>
                                </p>
                                {/* Arrow icon with hover effects */}
                                {/* <RxArrowTopRight className="absolute bottom-0 left-2 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" /> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default AwardRecognition;
