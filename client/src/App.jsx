import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PreLoader from './Components/PreLoader';

import Header from './Components/Header';
import AboutPage from './pages/AboutPage';
import HashManager from "./Components/HashManager"
import AwardRecognitionPage from './pages/AwardRecognitionPage';
import AllServicePage from './pages/AllServicePage'
import Aos from "aos";
import "aos/dist/aos.css";

// import Blogs from './Components/Blog';
// import AllService from './pages/AllService';

// import Blog from './Components/Blog';
// import AllService from './pages/AllService';
// // import BlogBanner from './Components/BlogBanner';
// import BlogBlogger from './Components/BlogBloger';
// import BlogLeaveReply from './Components/BlogLeaveReply';
// import RecentPosts from './Components/RecentPosts';
// import BlogRecentPosts from './Components/BlogRecentPosts';
// import BlogPopularTags from './Components/BlogPopularTags';
import Blogs from './pages/Blogs';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 

Aos.init();
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <Router>
      <HashManager/>
      <Header/>
      {/* <Home /> */}
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/awards" element={<AwardRecognitionPage/>} />

      <Route path="/allServices" element={<AllServicePage/>} />
      <Route path="/news&Blogs" element={<Blogs/>} />
        {/* <Route path="/projects" element={<Projects />} /> 
        <Route path="/skills" element={<Skill />} /> 
        <Route path="/awards" element={<Awards />} />
        <Route path="/services" element={<MyService />} /> 
         all page have to added here for rander */}
      </Routes>
      {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allservices" element={<AllService />} />
    </Routes> */}
    </Router>
  );
}
