import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/Aboutus/About';
import Contact from './components/Contactus/Contact';
import Homepage from './components/HomePage/Homepage';
import Price from './components/Pricing/Price';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </>
  );
};

export default App;
