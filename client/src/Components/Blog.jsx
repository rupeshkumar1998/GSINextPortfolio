import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './Card';

const Blogs = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data
  const dummyCards = [
    {
      imageUrl: 'https://example.com/image1.jpg',
      blogTime: 'August 29, 2024',
      heading: 'Blog Title 1'
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      blogTime: 'August 30, 2024',
      heading: 'Blog Title 2'
    },
    {
      imageUrl: 'https://example.com/image3.jpg',
      blogTime: 'August 31, 2024',
      heading: 'Blog Title 3'
    }
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
    
    // Fetch data from API or use dummy data
    fetch('https://api.example.com/blogs')
      .then(response => response.json())
      .then(data => {
        setCards(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch data', err);
        setCards(dummyCards);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#140c1c] p-4" id='news&Blogs'>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#8750f7] to-[#ffffff] bg-clip-text text-transparent mb-4">
        Recent Blogs
      </h1>
      <p className="text-white text-center w-[70%] mb-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam maiores illo exercitationem deleniti fugiat! Quis illo in vero eveniet ipsa ratione, nobis asperiores tempore repellat ut non, blanditiis, saepe rem!
      </p>
      <div className="flex justify-center w-full gap-8">
        {cards.map((card, index) => (
          <div 
            className="w-[80vw] h-[80vw] md:w-[40vh] md:h-[40vh]" 
            key={index}
            data-aos="fade-up"  // Add this line to apply animation
          >
            <Card
              imageUrl={card.imageUrl}
              blogTime={card.blogTime}
              heading={card.heading}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
