import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* Column 1 */}
      <div className="col1">
        <h4 className="logo-heading">
          The DATALYTIX
          <span className="copyright">©</span>
        </h4>
        <div className="footer-links">
          <a href="/about" className="footer-link-left active">
            About
          </a>
          <a href="/contact" className="footer-link-left">
            Contact
          </a>
        </div>
        <div className="footer-copyright">© 2024 All rights reserved</div>
      </div>
  
      {/* Column 2 */}
      <div className="col2">
        <p className="footer-text">
          Datalytix has the full types of potential for your start-up business.
        </p>
        <div className="footer-social-links">
          <a href="https://linkedin.com" className="footer-link-right" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com" className="footer-link-right" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" className="footer-link-right" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
