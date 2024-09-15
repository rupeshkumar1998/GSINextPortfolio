import React, { useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";

const BlogDescription = ({ blogId }) => {
  const [blogData, setBlogData] = useState(null);
  const [bulletPoints, setBulletPoints] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${blogId}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }
        const data = await response.json();
        setBlogData(data);

        // Extract the last three lines for bullet points
        const aboutBlogLines = data.aboutBlog.split('.').filter(line => line.trim() !== ''); // Split and remove empty lines
        const lastThreeLines = aboutBlogLines.slice(-3); // Get the last 3 lines
        setBulletPoints(lastThreeLines);
      } catch (err) {
        console.error('Failed to fetch blog data', err);
      }
    };

    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  if (!blogData) return <p>Loading...</p>;

  return (
    <div className="pl-1 pr-4 pt-2 bg-black pb-6 font-sans mx-auto">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-white mb-4">{blogData.title}</h1>

      {/* About Blog */}
      <p className="text-base text-white mb-6">
        {blogData.aboutBlog.split('.').slice(0, -3).join('\n')} {/* Display all except the last 3 lines */}
      </p>

      {/* Subheading */}
      {/* <h2 className="text-2xl font-semibold text-white mb-4">Subheading</h2> */}

      {/* Bullet Points */}
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

export default BlogDescription;
