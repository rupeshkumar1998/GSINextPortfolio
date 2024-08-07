// import React, { useState } from "react";
// import { GoArrowUpRight } from "react-icons/go";

// const Services = ({ services = [] }) => {
//   const [clickedService, setClickedService] = useState(null);

//   const handleServiceClick = (index) => {
//     setClickedService(clickedService === index ? null : index);
//   };

//   const minimumServices = Array.from({ length: Math.max(4, services.length) }, (_, i) => services[i] || `Service${i + 1}`);

//   return (
//     <div className="text-white bg-[#050709] p-4 sm:px-10 md:px-20 lg:px-40">
//       <h1 className="text-3xl font-bold text-center py-5 bg-gradient-to-l from-[#8750F7] to-white bg-clip-text text-transparent">
//         My Services
//       </h1>
//       <p className="text-center text-sm mb-10">
//         About Our Services About Our Services About Our Services About Our
//         Services About Our Services About Our Services
//       </p>
//       <div className="flex flex-col gap-4">
//         {minimumServices.map((service, index) => (
//           <div
//             key={index}
//             className={`group flex flex-col sm:flex-row items-center justify-between bg-[#050709] p-4 rounded-md cursor-pointer transition-all duration-300 ${clickedService === index ? 'bg-gradient-to-l from-[#2a1454] to-[#8750f7]' : 'hover:bg-gradient-to-l hover:from-[#2a1454] hover:to-[#8750f7]'}`}
//             onClick={() => handleServiceClick(index)}
//           >
//             <div className="flex items-center gap-4">
//               <h2 className={`font-bold ${clickedService === index ? 'text-white' : 'text-[#8750F7]'} group-hover:text-white`}>
//                0{index+1}
//               </h2>
//               <h2 className={`text-xl font-bold ${clickedService === index ? 'text-white' : 'text-white'} group-hover:text-white`}>
//                 {service}
//               </h2>
//             </div>
//             <a href="#" className={`text-xl font-bold mt-2 sm:mt-0 ${clickedService === index ? 'text-white' : 'text-white'} group-hover:text-white`}>
//               {`About ${service}`}
//             </a>
//             <GoArrowUpRight className={`w-6 h-6 transition-transform duration-300${clickedService === index ? 'transform rotate-0 text-white' : 'text-[#8750F7] transform rotate-90'} text-purple-700`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Services.defaultProps = {
//   services: []
// };

// export default Services;
