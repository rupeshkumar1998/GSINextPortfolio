import React, { useEffect, useState } from 'react';

const ServicePageHeading = ({ serviceId }) => {
  const [serviceData, setServiceData] = useState({ title: '', bannerImage: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch service data from your API
    const fetchServiceData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/services/${serviceId}`);
        const data = await response.json();
        setServiceData({
          title: data.title,
          bannerImage: data.bannerImage,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service data:', error);
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [serviceId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div 
      className="relative h-64 bg-cover bg-center" 
      style={{ backgroundImage: `url(${serviceData.bannerImage || 'https://gerold.themejunction.net/wp-content/uploads/2024/05/breadcrumb-bg.jpg'})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{serviceData.title || 'Your Heading Text'}</h1>
        <p className="text-lg text-gray-200 mt-2">Manage Routes here</p>
      </div>
    </div>
  );
};

export default ServicePageHeading;
