import React, { useState, useEffect } from 'react';

const BlogBanner = ({ blogId }) => {
  const [bannerImage, setBannerImage] = useState('');
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch the blog banner image and title using blogId
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${blogId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog details');
        }
        const data = await response.json();
        setBannerImage(data.bannerImage); // Assuming the banner image URL is in 'bannerImage'
        setTitle(data.title); // Assuming the title is in 'title'
      } catch (err) {
        console.error(err);
        setError('Failed to load blog details');
      }
    };

    if (blogId) {
      fetchBlogDetails(); // Trigger fetch if blogId exists
    }
  }, [blogId]);

  if (error) {
    return <p className="text-red-500">Error loading blog details: {error}</p>;
  }
  console.log(blogId)

  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bannerImage || 'https://gerold.themejunction.net/wp-content/uploads/2024/05/breadcrumb-bg.jpg'})`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{title || 'Loading title...'}</h1>
        <p className="text-lg text-gray-200 mt-2">Manage Routes here</p>
      </div>
    </div>
  );
};

export default BlogBanner;
