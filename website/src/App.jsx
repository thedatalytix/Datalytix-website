import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/Aboutus/About';
import Contact from './components/Contactus/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
