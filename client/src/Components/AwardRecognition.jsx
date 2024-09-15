// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import "swiper/css/autoplay"; // Import the autoplay CSS
// import { FreeMode, Pagination, Autoplay } from "swiper/modules"; // Import the Autoplay module
// import { RxArrowTopRight } from "react-icons/rx";

// // Data for AwardRecognition
// const AwardRecognitionData = [
//     {
//         name: "Kumar 1",
//         review:
//             "Exceptional service and innovative solutions. The team delivers on time with outstanding quality. Highly recommend for all your IT needs!",
//         imagePath: "/pic-Rupesh.jpg",
//     },
//     {
//         name: "Kumar 2",
//         review:
//             "Exceptional service and innovative solutions. The team delivers on time with outstanding quality. Highly recommend for all your IT needs!",
//         imagePath: "/pic-Rupesh.jpg",
//     },
//     {
//         name: "Kumar 3",
//         review:
//             "Exceptional service and innovative solutions. The team delivers on time with outstanding quality. Highly recommend for all your IT needs! Exceptional service and innovative solutions. The team delivers on time with outstanding quality. Highly recommend for all your IT needs!",
//         imagePath: "/pic-Rupesh.jpg",
//     },
//     {
//         name: "Kumar 4",
//         review:
//             "Exceptional service and innovative solutions. The team delivers on time with outstanding quality. Highly recommend for all your IT needs!",
//         imagePath: "/pic-Rupesh.jpg",
//     },
//     {
//         name: "Kumar 5",
//         review:
//             "Exceptional service and innovative solutions. The team delivers on time with outstanding quality. Highly recommend for all your IT needs!",
//         imagePath: "/pic-Rupesh.jpg",
//     },
//     {
//         name: "Kumar 6",
//         review:
//             "Exceptional service and innovative solutions. The team delivers on time with outstanding quality. Highly recommend for all your IT needs!",
//         imagePath: "/pic-Rupesh.jpg",
//     },
// ];

// const AwardRecognition = () => {
//     return (
//         <div className="flex items-center justify-center flex-col h-[600px] bg-[#2D0F40]" id="AwardRecognition">

//             {/* AwardRecognition heaader section */}
//             <div className="w-3/4 mb-5">
//                 <h2 className="textlinearGradient text-4xl font-bold mb-4">
//                     My Client's Reviews
//                 </h2>
//                 <a className="text-white">
//                     About Clients Reviews  About Clients Reviews  About Clients Reviews  About Clients Reviews
//                 </a>
//             </div>


//             {/* Swiper container for sliding AwardRecognitions */}
//             <Swiper
//                 breakpoints={{
//                     490: {
//                         slidesPerView: 2, // Number of slides per view on small screens
//                         spaceBetween: 15, // Space between slides on small screens
//                     },
//                     700: {
//                         slidesPerView: 3, // Number of slides per view on larger screens
//                         spaceBetween: 15, // Space between slides on larger screens
//                     },
//                 }}
//                 freeMode={true} // Enables free mode for continuous scrolling
//                 pagination={{
//                     clickable: true, // Makes pagination bullets clickable
//                 }}
//                 autoplay={{
//                     delay: 3000, // Time in ms before moving to the next slide
//                     disableOnInteraction: false, // Allows autoplay to continue after user interactions
//                 }}
//                 modules={[FreeMode, Pagination, Autoplay]} // Swiper modules used
//                 className="max-w-[90%] lg:max-w-[80%]">
//                 {AwardRecognitionData.map((item) => (
//                     <SwiperSlide key={item.name}>
//                         {/* Individual AwardRecognition slide */}
//                         <div className="bg-[#50097d] relative m-2 flex flex-col gap-6 mb-20 group shadow-lg text-white rounded-xl px-3 py-2 h-[320px] overflow-hidden cursor-pointer">
//                             {/* Decorative background effect */}
//                             <div className="absolute top-0 right-0 mt-0 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-[#ad5cdf] to-transparent rounded-full h-72 w-72 blur-3xl transform -translate-y-1/2 translate-x-1/2 rounded-bl-full group-hover:bg-[#9903f7]" />
//                             {/* Overlay to darken background */}
//                             <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
//                             <div className="relative p-2 w-full h-full">
//                                 {/* Header and image section */}
//                                 <div className="flex justify-between items-start">
//                                     <h1 className="text-xl lg:text-2xl font-semibold text-purple-400">{item.name}</h1>
//                                     {/* Image with hover effect */}
//                                     <img src={item.imagePath} alt="User" className="absolute -top-2 -right-4 h-24 rounded-bl-full group-hover:opacity-75 transition-opacity duration-300" />
//                                 </div>
//                                 {/* Review section */}
//                                 <div className="mt-10 h-2/3 overflow-hidden relative">
//                                     <p className="lg:text-[18px] animate-marquee">{item.review}</p>
//                                 </div>
//                                 {/* Arrow icon with hover effects */}
//                                 <RxArrowTopRight className="absolute bottom-0 left-2 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default AwardRecognition;




import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { awardsData } from "../Data/AwardsData"

const AwardRecognition = () => {
    const navigate = useNavigate();

    const handleReadMore = (item) => {
        navigate('/awards', { state: item });
    };

    return (
        <div className="p-20 flex items-center justify-center flex-col h-auto bg-[#2D0F40]" id="awardRecognition"
        data-aos="flip-down"
        data-aos-duration="1000">

            {/* Awards and Recognition header section */}
            <div className="w-3/4 mb-5">
                <h2 className="textlinearGradient text-4xl font-bold mb-4">
                    Awards and Recognitions
                </h2>
                <a className="text-white">
                    Explore the awards, recognitions, and certifications that highlight professional excellence and commitment to development.
                </a>
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
                            <img src={item.imagePath} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-75 transition-opacity duration-300" />
                            {/* Title and Description */}
                            <div className="relative w-full">
                                <h1 className="text-xl lg:text-2xl font-semibold text-purple-400">{item.title}</h1>
                                <p className="mt-2 lg:text-[18px]">
                                    {`${item.description.substring(0, 50)}...`}
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
