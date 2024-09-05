import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PreLoader from './Components/PreLoader';
import Blog from './Components/Blog';
import AllService from './pages/AllService';
// import BlogBanner from './Components/BlogBanner';
import BlogBlogger from './Components/BlogBloger';
import BlogLeaveReply from './Components/BlogLeaveReply';
import RecentPosts from './Components/RecentPosts';
import BlogRecentPosts from './Components/BlogRecentPosts';
import BlogPopularTags from './Components/BlogPopularTags';
import Blogs from './pages/Blogs';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    // <BlogBlogger  imageUrl="https://gerold.themejunction.net/wp-content/uploads/2024/05/blog-4-1536x597.jpg"
    // buttonText="SAAS" blogDate="September 2, 2024" authorName="John Doe"/>

    <Blogs/>

    // <Router>
    //   <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/allservices" element={<AllService />} />
    // </Routes>
    // </Router>

  );
}
