import React, { useState, useEffect } from 'react';

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://api.example.com/recent-posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error('Error fetching recent posts:', error);
        // Use dummy data if fetching fails
        setPosts(dummyPosts);
      });
  }, []);

  // Dummy data to use as a fallback
  const dummyPosts = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      excerpt: 'Learn how to use React Hooks in your functional components...',
      imageUrl: 'https://via.placeholder.com/100', // Example image URL
    },
    {
      id: 2,
      title: 'JavaScript ES6 Features',
      excerpt: 'Explore the latest features introduced in ECMAScript 6...',
      imageUrl: 'https://via.placeholder.com/100', // Example image URL
    },
    {
      id: 3,
      title: 'CSS Grid vs. Flexbox',
      excerpt: 'A comparison of CSS Grid and Flexbox layout systems...',
      imageUrl: 'https://via.placeholder.com/100', // Example image URL
    },
  ];

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <div 
          key={index} 
          className="bg-black text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center"
          style={{ width: '100%', maxWidth: '400px' }}
        >
          <div className="flex-grow">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-400">{post.excerpt}</p>
            <a href={`/posts/${post.id}`} className="text-purple-500 hover:underline">
              Read More
            </a>
          </div>
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-20 h-20 rounded-lg ml-4 object-cover" 
          />
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
