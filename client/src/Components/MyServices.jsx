import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const MyService = () => {
  const [services, setServices] = useState([]);
  const [clickedService, setClickedService] = useState(null);
  const navigate = useNavigate();

  // Fetch service data from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services'); // Adjust API URL as needed
        const data = await response.json();
        setServices(data); // Assuming `data` is an array of services
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleServiceClick = (serviceId) => {
    navigate(`/allservices?serviceId=${serviceId}`);
  };

  // Truncate text to 2-3 words
  const truncateText = (text) => {
    const words = text.split(' ');
    return words.length > 3 ? words.slice(0, 3).join(' ') + '...' : text;
  };

  const minimumServices = Array.from({ length: Math.max(4, services.length) }, (_, i) => services[i] || { title: `Service${i + 1}`, businessParagraph: 'Default description' });

  return (
    <div className="text-white bg-[#050709] p-4 sm:px-10 md:px-20 lg:px-40" id="services">
      <h1 className="text-3xl font-bold text-center py-5 bg-gradient-to-r from-[#8750F7] to-white bg-clip-text text-transparent">
        My Services
      </h1>
      <p className="text-center text-sm mb-10">
        About Our Services About Our Services About Our Services About Our
        Services About Our Services About Our Services
      </p>
      <div className="flex flex-col gap-4">
        {minimumServices.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`group flex flex-col sm:flex-row items-center justify-between bg-[#050709] p-4 rounded-md cursor-pointer transition-all duration-700 transform ${clickedService === index ? 'bg-gradient-to-l from-[#2a1454] to-[#8750f7]' : 'hover:bg-gradient-to-l hover:from-[#2a1454] hover:to-[#8750f7]'} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              onClick={() => handleServiceClick(service._id)} // Pass the serviceId here
            >
              <div className="flex items-center gap-4">
                <h2 className={`font-bold ${clickedService === index ? 'text-white' : 'text-[#8750F7]'} group-hover:text-white`}>
                  0{index+1}
                </h2>
                <h2 className={`text-xl font-bold ${clickedService === index ? 'text-white' : 'text-white'} group-hover:text-white`}>
                  {service.title}
                </h2>
              </div>
              <span className={`text-xl font-bold mt-2 sm:mt-0 ${clickedService === index ? 'text-white' : 'text-white'} group-hover:text-white`}>
                {truncateText(service.businessParagraph)}
              </span>
              <MdArrowOutward className={`w-6 h-6 transition-transform rotate-90 duration-700 ${clickedService === index ? 'transform rotate-90 text-white' : 'text-[#8750F7]'} group-hover:rotate-0 group-hover:text-white`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyService;
