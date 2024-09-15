import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ServicePageMarketing({ serviceId }) {
  const [serviceData, setServiceData] = useState({ businessParagraph: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/services/${serviceId}`); // Adjust API URL as needed
        const data = await response.json();
        setServiceData({
          businessParagraph: data.businessParagraph,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service data:', error);
        setLoading(false);
      }
    };

    if (serviceId) {
      fetchServiceData();
    }
  }, [serviceId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleContactUsClick = () => {
    navigate('/#contact'); // Navigate to the home page
  };

  return (
    <div className="text-white flex justify-center items-center ">
      <div className="bg-[#140c1c] rounded-lg shadow-lg p-8  ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left ">
              <h1 className="text-4xl font-bold mb-4">
                Grow Your{' '}
                <span className="inline-block relative top-1">
                  <svg
                    className="h-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 13.293a1 1 0 011.414 0l2.828-2.828a1 1 0 011.414 1.414l-2.828 2.828a1 1 0 01-1.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Business, <div className='italic underline font-normal'>With Us</div>
              </h1>
              <p className="text-lg mb-6">
                {serviceData.businessParagraph || 'Loading business description...'}
              </p>
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleContactUsClick}>
                Contact Us
              </button>
            </div>
            <div className="text-center md:text-right mt-8 md:mt-0 ">
              <ul className="list-none">
                <li className="mb-4">
                  <h2 className="text-xl font-bold">5.0</h2>
                  <p className="text-gray-400">Rated on Clutch</p>
                </li>
                <li className="mb-4">
                  <h2 className="text-xl font-bold">37</h2>
                  <p className="text-gray-400">International Clients</p>
                </li>
                <li>
                  <h2 className="text-xl font-bold">10+</h2>
                  <p className="text-gray-400">Design Awards</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16">
          <div className="flex flex-wrap justify-center">
            <div className=" px-4 mb-4">
              <div className="bg-gray-900 p-6 rounded shadow flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-105">
                <span className="text-xl font-bold">Deloitte</span>
              </div>
            </div>
            <div className=" px-4 mb-4">
              <div className="bg-gray-900 p-6 rounded shadow flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-105">
                <span className="text-xl font-bold">Amazon</span>
              </div>
            </div>
            <div className=" px-4 mb-4">
              <div className="bg-gray-900 p-6 rounded shadow flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-105">
                <span className="text-xl font-bold">Planned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePageMarketing;
