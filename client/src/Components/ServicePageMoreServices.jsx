import React, { useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";

const ServiceItem = ({ icon, title, onClick }) => {
  return (
    <div
      className="flex items-center justify-between py-3 px-4 rounded-md hover:bg-[#8750f7] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center">
        {icon}
        <span className="ml-3 text-white font-medium">{title}</span>
      </div>
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [visibleServices, setVisibleServices] = useState(4);

  const defaultIcon = (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );

  useEffect(() => {
    // Fetch services from the backend
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        if (data.length > 0) {
          // Only extract titles from the fetched data
          const titles = data.map(service => ({
            icon: defaultIcon, // Use default icon or adjust as needed
            title: service.title,
          }));
          setServices(titles);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="bg-[#140c1c] rounded-lg shadow-md p-4 ">
      <h2 className="text-2xl font-bold text-white mb-4">ALL SERVICES</h2>
      <div className="space-y-2">
        {services.slice(0, visibleServices).map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            onClick={() => {
              console.log(`Clicked on ${service.title}`);
            }}
          />
        ))}
      </div>
      {visibleServices < services.length && (
        <button
          className="mt-4 bg-gray-800 hover:bg-[#8750f7] text-white font-bold py-2 px-4 rounded"
          onClick={() => setVisibleServices(visibleServices + 4)}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Services;
