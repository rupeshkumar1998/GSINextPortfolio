import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Blogs = () => {
  const [cards, setCards] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // To handle pop-up visibility
  const [formData, setFormData] = useState({
    title: '',
    bloggerName: '',
    blogDate: '',
    aboutBlog: '',
    blogImage: '',
    bannerImage: '',
    aboutBlogger: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCards(data); // Assuming 'data' is an array of blog objects
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch data', err);
        setError('Failed to load blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/aboutblog?id=${id}`); // Correctly pass the 'id' query parameter
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more blogs
  };

  const handleAddBlog = () => {
    setShowModal(true); // Show the pop-up modal
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create blog');
      }

      const newBlog = await response.json();
      setCards([newBlog, ...cards]); // Add new blog to the beginning of the list
      setShowModal(false); // Close the modal
      setFormData({
        title: '',
        bloggerName: '',
        blogDate: '',
        aboutBlog: '',
        blogImage: '',
        bannerImage: '',
        aboutBlogger: ''
      });
    } catch (err) {
      console.error('Error creating blog:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#140c1c] p-4">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#8750f7] to-[#ffffff] bg-clip-text text-transparent mb-4">
        Recent Blogs
      </h1>
      <p className="text-white text-center w-[70%] mb-8">
        Stay updated with our latest articles and insights.
      </p>
      <div
        className="flex justify-center w-full gap-8 flex-wrap"
        style={{ maxHeight: '60vh', overflowY: 'auto' }}  // Add scrollbar styling here
      >
        {cards.slice(0, visibleCount).map((card) => (
          <div
            className="w-[80vw] h-[80vw] md:w-[40vh] md:h-[40vh]"
            key={card.id}  // Use card.id as key
            data-aos="fade-up"
            onClick={() => handleCardClick(card._id)}  // Pass the blog id
          >
            <Card
              imageUrl={card.blogImage}  // Image URL fetched from backend
              blogTime={new Date(card.blogDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}  // Formatted date
              heading={card.title}  // Blog title fetched from backend
            />
          </div>
        ))}
      </div>
      <div className="flex mt-8">
        {visibleCount < cards.length && (
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 mr-4"
          >
            Show More
          </button>
        )}
        <button
          onClick={handleAddBlog}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Blog
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[90%] md:w-[50%]">
            <h2 className="text-2xl mb-4">Create New Blog</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                name="bloggerName"
                value={formData.bloggerName}
                onChange={handleChange}
                placeholder="Blogger Name"
                required
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="date"
                name="blogDate"
                value={formData.blogDate}
                onChange={handleChange}
                required
                className="mb-4 p-2 border rounded w-full"
              />
              <textarea
                name="aboutBlog"
                value={formData.aboutBlog}
                onChange={handleChange}
                placeholder="About Blog"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                name="blogImage"
                value={formData.blogImage}
                onChange={handleChange}
                placeholder="Blog Image URL"
                className="mb-4 p-2 border rounded w-full"
              />
              <input
                type="text"
                name="bannerImage"
                value={formData.bannerImage}
                onChange={handleChange}
                placeholder="Banner Image URL"
                className="mb-4 p-2 border rounded w-full"
              />
              <textarea
                name="aboutBlogger"
                value={formData.aboutBlogger}
                onChange={handleChange}
                placeholder="About Blogger"
                className="mb-4 p-2 border rounded w-full"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-4 px-4 py-2 bg-gray-300 text-black rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Create Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
