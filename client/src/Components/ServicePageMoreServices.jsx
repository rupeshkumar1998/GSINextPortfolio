import React, { useState, useEffect } from 'react';

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

  const defaultServices = [
    {
      icon: (
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
      ),
      title: 'Branding Design',
    },
    {
      icon: (
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
            d="M9 12h6m-6 3h6m-3-6v6m6-6V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4z"
          />
        </svg>
      ),
      title: 'UI/UX Design',
    },
    {
      icon: (
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
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Web Design',
    },
    {
      icon: (
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
            d="M10 20l4-16m4 4l4 4-4 4m-4-4l-4-4"
          />
        </svg>
      ),
      title: 'App Design',
    },
  ];

  useEffect(() => {
    // Fetch services from the backend
    const fetchServices = async () => {
      try {
        const response = await fetch('https://your-backend-api/services');
        const data = await response.json();
        if (data.length > 0) {
          setServices(data);
        } else {
          setServices(defaultServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices(defaultServices);
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

<<<<<<< HEAD
export default Services;
=======
export default Services;
>>>>>>> 035dfb9f8d5a3a07138544b1b1a60ae956f5c9cb
