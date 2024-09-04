import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white body-font">
      <div className="container flex flex-wrap p-5 items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 flex-grow md:flex-grow-0"
        >
          <span className="ml-3 text-xl">DATALYTIX Solutions</span>
        </Link>
        <button
          className="inline-flex items-center md:hidden text-white ml-auto"
          onClick={() => setIsOpen(!isOpen)}
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
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center`}
        >
          <Link to="/about" className="mr-5 hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-400">
            Contact
          </Link>
          <Link to="/price" className="mr-5 hover:text-gray-400">
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
