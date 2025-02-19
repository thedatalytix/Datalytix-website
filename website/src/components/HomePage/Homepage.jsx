import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../HomePage/Homepage.css";
import OurServicesSection from "../HomePage/OurServiceSection";

const Homepage = () => {
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
              }, index * 200); // Delay each card by 200ms
            });
            observer.unobserve(entry.target); // Stop observing once the animation has run
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
      <div className="homepage flex flex-col items-start justify-start p-5 sm:p-10">
        <div className="section-container lg:ml-16">
          <h1 className="heading heading-xl text-white">
            <span className="block mb-2">Empower business with</span>
            <span className="inline-block mb-2">modern technology</span>
            <span className="block">solutions</span>
          </h1>
          <Link to="/about">
            <button
              type="button"
              className="button inline-flex items-center mt-5 space-x-2"
            >
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--token-c14065e7-5a4d-4109-85cf-bca8f791260a, rgb(255, 255, 255))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </Link>
        </div>

        {/* Transforming Content */}
        <div className="flex-container-homepage">
          <div className="flex-inner">
            {/* Left side content */}
            <div className="text-left">
              <h1 className="text-42px">
                Transforming Businesses with
                <br />
                <span>Cutting-Edge Solutions</span>
              </h1>
            </div>

            {/* Right side content */}
            <div className="text-left md:pl-6">
              <p className="text-20px">
                Datalytix is a leading technology company specializing in
                <br className="hidden md:inline" />
                providing innovative software solutions and IT services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="info-container">
        <div className="info-content">
          <div className="info-text">
            <p className="info-subtitle">IN NUMBERS</p>
            <h1 className="info-heading">
              At Datalytix, we are dedicated to providing<br></br>
              innovative software solutions<br></br>
              and IT services that<br></br>
              empower businesses.<br></br>
            </h1>
          </div>

          <div className="info-stats">
            <div className="stat-item">
              <h2 className="stat-number">6</h2>
              <p className="stat-description">Years of Experience</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <h2 className="stat-number">5+</h2>
              <p className="stat-description">Countries in Services</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <h2 className="stat-number">30%</h2>
              <p className="stat-description">Increase in Productivity</p>
            </div>
            <div className="stat-divider"></div>
          </div>
        </div>
      </div>

      {/* Innovative Cards Section */}
      <div className="framer-content">
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
              <h3 className="framer-card-title">
                Developing Tailored Solutions
              </h3>
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

      {/* Our Service Card Section */}
      <OurServicesSection />


      {/* Innovative Content Section */}
      <section className="about-section-homepage">
        <div className="container-innovate">
          <div className="content">
            <div className="left-content-innovate">
              <div className="rich-text-container-innovate">
                <p className="innovate-text">INNOVATE</p>
              </div>
            </div>
            <div className="right-content">
              <div className="rich-text-container-main">
                <h1 className="main-heading">
                  Transforming Businesses with
                  <span className="highlighted-text">
                    Cutting-Edge Solutions
                  </span>
                </h1>
              </div>
              <div className="rich-text-container-sub">
                <h4 className="subheading-sub">
                  At Datalytix, we specialize in providing innovative software
                  solutions that empower businesses to streamline operations,
                  enhance productivity, and achieve their goals efficiently.
                  Discover how our solutions can transform your business today.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      {/* <section className="testimonial-section mx-auto">
        <div className="review-container">
          <div className="heading1">
            <p className="subheading1">REVIEWS</p>
            <h2>Our Customers Reviews</h2>
          </div>
          <div className="cards">
            <div className="card-container">
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <p className="testimonial-text">
                  Datalytix has been an amazing investment partner for me. Their
                  investment management services are easy to use.
                </p>
                <p className="testimonial-author">@ Yury</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <p className="testimonial-text">
                  The services provided by Datalytix helped me achieve my
                  investment goals easily and effectively.
                </p>
                <p className="testimonial-author">@ Alex</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <p className="testimonial-text">
                  I am so glad I chose Datalytix for my financial needs. Their
                  team is very supportive and knowledgeable.
                </p>
                <p className="testimonial-author">@ John</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <p className="testimonial-text">
                  Thanks to Datalytix, my investments are growing steadily. I
                  highly recommend their services.
                </p>
                <p className="testimonial-author">@ Sarah</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <p className="testimonial-text">
                  Datalytix has been an amazing investment partner for me. Their
                  investment management services are easy to use.
                </p>
                <p className="testimonial-author">@ Joel</p>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <p className="testimonial-text">
                  Datalytix has been an amazing investment partner for me. Their
                  investment management services are easy to use.
                </p>
                <p className="testimonial-author">@ Noel</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Homepage;