import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = ({ scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header text-white body-font">
      <div className="header-container flex items-center justify-between p-2 md:px-8">
        {/* Logo - Left */}
        <NavLink to="/" className="logo flex title-font font-medium items-center text-white">
          <img src="/logo.png" alt="Datalytix Logo" className="h-10 w-10" />
          <span className="ml-3 header-text">The Datalytix Solutions</span>
        </NavLink>

        {/* Hamburger Button (Mobile) */}
        <button className="hamburger md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Navigation - Right */}
        <nav className={`nav ${isOpen ? "block" : "hidden"} md:flex items-center space-x-5`}>
          <button className="header-link" onClick={scrollToContact}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
