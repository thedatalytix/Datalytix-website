import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top row with logo and text */}
        <div className="footer-top">
          {/* Left Side - Logo and Title */}
          <h4 className="logo-heading">
            The Datalytix Solutions
          </h4>

          {/* Right Side - Text */}
          <p className="footer-text">
            Fueling Business Innovation with Intelligent Insights.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <a
            href="/about"
            className={`footer-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </a>
          <a
            href="/contact"
            className={`footer-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </a>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">© 2025 All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
