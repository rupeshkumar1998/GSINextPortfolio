import React, { useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";

const ContentSection = ({ serviceId }) => {
  const [serviceData, setServiceData] = useState({ title: '', businessParagraph: '' });
  const [bulletPoints, setBulletPoints] = useState([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/services/${serviceId}`); // Adjust API URL as needed
        const data = await response.json();
        const paragraph = data.businessParagraph || '';
        setServiceData({
          title: data.title || 'Default Title',
          businessParagraph: paragraph
        });
        
        // Process paragraph to extract the last three lines
        const lines = paragraph.split('.').filter(line => line.trim() !== ''); // Split by new line and remove empty lines
        const lastThreeLines = lines.slice(-3); // Get the last three lines
        setBulletPoints(lastThreeLines);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };

    if (serviceId) {
      fetchServiceData();
    }
  }, [serviceId]);

  return (
    <div className="p-6 font-sans mx-auto">
      <h1 className="text-4xl font-bold text-white mb-4">{serviceData.title}</h1>
      <p className="text-base text-white mb-6">
        {serviceData.businessParagraph}
      </p>
      <ul className="list-none pl-0">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-center text-base text-white mb-2">
            <TiTick className="text-purple-500 mr-2" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentSection;
