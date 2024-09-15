// import { useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import "swiper/css/autoplay";
// import { FreeMode, Pagination, Autoplay } from "swiper/modules";
// import { RxArrowTopRight } from "react-icons/rx";

// // Data for Awards and Recognitions
// const AwardRecognitionData = [
//     // Same data structure as before
//     {
//         title: "Best Developer Award 2023",
//         description:
//             "Recognized as the Best Developer for exceptional performance in web development projects.",
//         imagePath: "/pic-Rupesh.jpg",
//     },
//     {
//       title: "Best Developer Award 2024",
//       description:
//           "Recognized as the Best Developer for exceptional performance in web development projects.",
//       imagePath: "/award-best-developer-2023.jpg",
//   },
//   {
//     title: "Best Developer Award 2025",
//     description:
//         "Recognized as the Best Developer for exceptional performance in web development projects.",
//     imagePath: "/pic-Rupesh.jpg",
// },
// {
//   title: "Best Developer Award 2026",
//   description:
//       "Recognized as the Best Developer for exceptional performance in web development projects.",
//   imagePath: "/award-best-developer-2023.jpg",
// },
//     // Add other awards here...
// ];

// const AwardRecognition = () => {
//     const navigate = useNavigate();

//     const handleReadMore = (item) => {
//         navigate('/awards', { state: item });
//     };

//     return (
//         <div className="flex items-center justify-center flex-col h-auto bg-[#2D0F40]" id="AwardRecognition">

//             {/* Awards and Recognition header section */}
//             <div className="w-3/4 mb-5">
//                 <h2 className="textlinearGradient text-4xl font-bold mb-4">
//                     Awards and Recognitions
//                 </h2>
//                 <a className="text-white">
//                     Explore the awards, recognitions, and certifications that highlight professional excellence and commitment to development.
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
//                 {AwardRecognitionData.map((item, index) => (
//                     <SwiperSlide key={item.title}>
//                         {/* Individual AwardRecognition slide */}
//                         <div className="bg-[#50097d] relative m-2 flex flex-col gap-4 group shadow-lg text-white rounded-xl p-4 h-auto cursor-pointer">
//                             {/* Image of the Award */}
//                             <img src={item.imagePath} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-75 transition-opacity duration-300" />
//                             {/* Title and Description */}
//                             <div className="relative w-full">
//                                 <h1 className="text-xl lg:text-2xl font-semibold text-purple-400">{item.title}</h1>
//                                 <p className="mt-2 lg:text-[18px]">
//                                     {`${item.description.substring(0, 50)}...`}
//                                     <span
//                                         onClick={() => handleReadMore(item)}
//                                         className="text-blue-400 ml-2 cursor-pointer hover:underline">
//                                         Read More
//                                     </span>
//                                 </p>
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






import React from 'react'

const Dummy = () => {
  return (
    <div>Dummy</div>
  )
}

export default Dummy