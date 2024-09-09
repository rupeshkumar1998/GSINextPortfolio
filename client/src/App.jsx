import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PreLoader from './Components/PreLoader';
import MndP from "../src/Components/Mndp"

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading period of 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Show preloader if loading is true
  if (loading) {
    return <PreLoader />;
  }

  return (
    <Router>
      {/* Wrap everything inside a single Router */}
      <>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/media-publication" element={<MndP />} />
          {/* Add additional routes here */}
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/services" element={<MyService />} /> */}
        </Routes>
      </>
    </Router>
  );
}
