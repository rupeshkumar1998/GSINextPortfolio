import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const BlogPopularTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
    });

    // Fetch data from the API
    fetch('https://api.example.com/popular-tags')
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((error) => {
        console.error('Error fetching popular tags:', error);
        // Use dummy data if fetching fails
        setTags(dummyTags);
      });
  }, []);

  // Dummy data to use as a fallback
  const dummyTags = [
    'React',
    'JavaScript',
    'CSS',
    'HTML',
    'Node.js',
    'Node.js',
    'Node.js',
    'Node.js',
    'Node.js',
    'Python',
    'Python',
    'Python',
    'Machine Learning',
    'Web Development',
    'Web Development',
    'Web Development',
    'Web Development',
    'Web Development',
    'Web Development',
    'Web Development',
    'Web Development',
  ];

  return (
    <div className="max-w-md mx-auto bg-[#1c0f2a] rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Popular Tags</h2>
      <div className=" rounded-lg p-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm cursor-pointer hover:bg-purple-600"
              data-aos={getAosAnimation(index)} // AOS animation attribute
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Function to return different AOS animations based on index
const getAosAnimation = (index) => {
  const animations = ['fade-up', 'fade-down', 'zoom-in', 'slide-left', 'slide-right'];
  return animations[index % animations.length]; // Cycle through animations
};

export default BlogPopularTags;
