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
    setVisibleCount(prevCount => prevCount + 3); // Show 3 more blogs
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
      {visibleCount < cards.length && (
        <button
          onClick={handleShowMore}
          className="mt-8 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Blogs;
