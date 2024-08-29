import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PreLoader from './Components/PreLoader';
import Blogs from './Components/Blog';
import AllService from './pages/AllService';

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
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allservices" element={<AllService />} />
    </Routes>
    </Router>
  );
}
