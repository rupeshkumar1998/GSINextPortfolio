
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PreLoader from './Components/PreLoader';

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
      <Home />
      <Routes>
        {/* <Route path="/projects" element={<Projects />} /> 
        <Route path="/skills" element={<Skill />} /> 
        <Route path="/awards" element={<Awards />} />
        <Route path="/services" element={<MyService />} /> 
         all page have to added here for rander */}
      </Routes>
    </Router>
  );
}
