import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../Contactus/Contact.css";

const Contact = () => {
  const parallaxRef = useRef(null);

  // Intersection observer for right-side form content animation
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="contactus-page" ref={parallaxRef}>
        <img
          decoding="async"
          sizes="100vw"
          srcSet="
            https://framerusercontent.com/images/7mS2PP4YXSay2iTINaaTpe2dnU.jpg?scale-down-to=512 512w,
            https://framerusercontent.com/images/7mS2PP4YXSay2iTINaaTpe2dnU.jpg?scale-down-to=1024 1024w,
            https://framerusercontent.com/images/7mS2PP4YXSay2iTINaaTpe2dnU.jpg?scale-down-to=2048 2048w,
            https://framerusercontent.com/images/7mS2PP4YXSay2iTINaaTpe2dnU.jpg?scale-down-to=4096 4096w,
            https://framerusercontent.com/images/7mS2PP4YXSay2iTINaaTpe2dnU.jpg 5824w"
          src="https://framerusercontent.com/images/7mS2PP4YXSay2iTINaaTpe2dnU.jpg"
          alt="Hero image"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectPosition: "center center",
            objectFit: "cover",
            imageRendering: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div className="contactus-content-wrapper">
          <div className="contactus-content">
            <a href="#" className="contact-us-link">
              <h1 className="contact-us-title">CONTACT</h1>
              <h5 className="contact-us-subtitle">
                Get in touch for any support and inquiries
              </h5>
              <p className="contact-us-description">
                We're all ears! Talk to us about your needs, and we'll provide
                the best possible solution.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="contact-section">
        <div className="content">
          <div className="left-content-contact">
            <p className="contact-title">GET IN TOUCH</p>
            <h2 className="contact-subtitle">
              Reach out to us for any help and inquiries
            </h2>
          </div>
          <div className={`right-content-contact ${sectionInView ? "in-view" : ""}`} ref={sectionRef}>
            <div className="input-form">
              <form method="POST" className="form">
                <div className="form-group">
                  <label htmlFor="your-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="your-name"
                    name="your-name"
                    type="text"
                    className="form-input"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-address" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    className="form-input"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company-name" className="form-label">
                    Company Name
                  </label>
                  <input
                    id="company-name"
                    name="company-name"
                    type="text"
                    className="form-input"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
