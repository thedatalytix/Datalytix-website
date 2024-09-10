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

// ANIMATION FOR CARDS

  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = cardRef.current.querySelectorAll(".framer-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 200); 
            });
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
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

      {/* GET IN TOUCH */}
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

      {/* CARDS SECTION */}
      <div className="framer-content-contact">
      <div className="framer-about">
        <div className="framer-left-content">
          <h2 className="framer-heading">
            Innovative Problem-Solving for Your Business Needs
          </h2>
        </div>
        <div className="framer-right-content">
          <p className="framer-subheading">SOLUTIONS</p>
        </div>
      </div>
      <div className="framer-cards" ref={cardRef}>
        <div className="framer-card framer-card-one">
          <div className="framer-card-content">
            <img
              src="https://framerusercontent.com/images/WcwmUqi6p7SrskGZZqAN5UoWA.webp?scale-down-to=512"
              alt="Features"
              className="framer-card-image"
            />
            <h3 className="framer-card-title">
              Understanding Your Business Goals
            </h3>
            <p className="framer-card-description">
              We start by gaining a deep understanding of your business goals.
            </p>
          </div>
        </div>
        <div className="framer-card framer-card-two">
          <div className="framer-card-content">
            <img
              src="https://framerusercontent.com/images/uetXJoargk4e4jLKMltVY8rchqs.png?scale-down-to=512"
              alt=""
              className="framer-card-image"
            />
            <h3 className="framer-card-title">Developing Tailored Solutions</h3>
            <p className="framer-card-description">
              Next, our team of experts develops tailored solutions.
            </p>
          </div>
        </div>
        <div className="framer-card framer-card-three">
          <div className="framer-card-content">
            <img
              src="https://framerusercontent.com/images/widUlSARRksnEnxLfmV5RiZGWHg.png?scale-down-to=512"
              alt=""
              className="framer-card-image"
            />
            <h3 className="framer-card-title">Implementing Technology</h3>
            <p className="framer-card-description">
              We leverage cutting-edge technology to implement seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
