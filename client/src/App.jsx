import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PreLoader from './Components/PreLoader';
import Header from './Components/Header';
import AboutPage from './pages/AboutPage';
import HashManager from './Components/HashManager';
import AwardRecognitionPage from './pages/AwardRecognitionPage';
import AllService from './pages/AllService';
import AboutBlog from './pages/Blogs';  // Import AboutBlog page
import Aos from 'aos';
import 'aos/dist/aos.css';

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
      <HashManager />
      <Header />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />
        
        {/* About Page Route */}
        <Route path="/about" element={<AboutPage />} />

        {/* Award Recognition Page Route */}
        <Route path="/awards" element={<AwardRecognitionPage />} />

        {/* All Services Route */}
        <Route path="/allServices" element={<AllService />} />


        {/* About Blog Route */}
        <Route path="/aboutblog" element={<AboutBlog />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
