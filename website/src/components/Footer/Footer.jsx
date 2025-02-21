import React from "react";
import "../Footer/Footer.css";

const Footer = ({ scrollToContact }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top row with logo and text */}
        <div className="footer-top">
          <h4 className="logo-heading">The Datalytix Solutions</h4>
          <p className="footer-text">Fueling Business Innovation with Intelligent Insights.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <button onClick={scrollToContact} className="footer-link">
            Contact
          </button>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">© 2025 All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
