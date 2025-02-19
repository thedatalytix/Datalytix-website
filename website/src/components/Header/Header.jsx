import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header text-white body-font">
      <div className="header-container flex flex-wrap p-4 ml-0 md:ml-4 items-center">
        <NavLink
          to="/"
          className="logo flex title-font font-medium items-center text-white mb-4 md:mb-0 flex-grow md:flex-grow-0"
        >
          <img src="/logo.png" alt="Datalytix Logo" className="h-10 w-10" />
          <span className="ml-3 header-text">The DATALYTIX Solutions</span>
        </NavLink>

        <button
          className="hamburger inline-flex items-center md:hidden text-white ml-auto"
          onClick={toggleMenu}
        >
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
        <nav
          className={`nav ${
            isOpen ? "block" : "hidden"
          } md:flex md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "header-link mr-5 active" : "header-link mr-5"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "header-link mr-5 active" : "header-link mr-5"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
