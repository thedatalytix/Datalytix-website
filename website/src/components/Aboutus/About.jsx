import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../Aboutus/About.css";

const About = () => {
  const parallaxRef = useRef(null);

  // Intersection observer for section animation
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // List of items for the "How It Works" section
  const listItems = [
    {
      number: "01",
      title: "Efficiency",
      description:
        "Designed for your team, see for yourself and manage your time with Datalytix.",
    },
    {
      number: "02",
      title: "Reliability",
      description:
        "This template is not merely a design, it's a comprehensive solution.",
    },
    {
      number: "03",
      title: "Innovative",
      description:
        "Tailored to elevate the online presence of AI, Technology, SaaS businesses.",
    },
    {
      number: "04",
      title: "Integrates",
      description: "Integrates with your workflow, no need to change.",
    },
  ];

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="aboutus-page" ref={parallaxRef}>
        <img
          decoding="async"
          sizes="100vw"
          srcSet="https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png?scale-down-to=512 512w,https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png 2600w"
          src="https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png"
          alt="Hero image"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectPosition: "center center",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div className="aboutus-content-wrapper">
          <div className="aboutus-content">
            <a className="about-us-link">
              <h1 className="about-us-title">ABOUT US</h1>
              <h5 className="about-us-subtitle">
                Empowering Business Through Technology
              </h5>
              <p className="about-us-description">
                At Datalytix, we specialize in providing innovative software
                solutions and IT services.
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section
        ref={sectionRef}
        className="about-section bg-black p-20 relative z-10 overflow-hidden"
      >
        <div className="about-container max-w-[1350px] mx-auto mt-10">
          <div className="flex flex-col lg:flex-row">
            <div className="left-content-about flex-1 mr-5 mb-10 lg:mb-0">
              <div className="about-header flex flex-col gap-2.5">
                <p className="subheading text-lg text-[#a074f9]">
                  HOW IT WORKS
                </p>
                <h2 className="main-title text-4xl text-white">
                  Our Journey Towards Technological Excellence
                </h2>
              </div>
            </div>
            <div className="right-content-about flex-1 ml-5">
              <h1 className="heading text-3xl text-white mb-5">
                At Datalytix, we specialize in providing innovative software
                solutions that empower businesses to streamline operations,
                enhance productivity, and achieve their goals efficiently.
              </h1>
              {listItems.map((item, index) => (
                <div
                  key={item.number}
                  className={`list-item mb-5 opacity-0 transform translate-x-10 transition-all duration-500 ease-out ${
                    sectionInView ? `opacity-100 translate-x-0` : ""
                  }`}
                  style={{ transitionDelay: `${index * 250}ms` }} // Adds delay for each item
                >
                  <div className="list-item-content flex items-center gap-2.5 mb-1">
                    <p className="number text-xl text-[#a074f9]">
                      {item.number}
                    </p>
                    <p className="title text-base text-white">{item.title}</p>
                  </div>
                  <p className="description text-base text-[#fcfdf2]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We're Good at */}
      <div className="ana-wrapper">
        <div className="ana-container">
          <div className="ana-container-inner cc-padding-bottom-none">
            <div className="ana-services-grid">
              <div className="ana-services-c1">
                <h2 className="display-2 text-white">
                  What We're <span className="good-at">Good at.</span>
                </h2>
              </div>
              <div className="ana-services-c2">
                <div className="ana-features-grid">
                  <div className="ana-feature cc-border-bottom">
                    <img
                      src="./data-eng.png"
                      loading="lazy"
                      alt="data-engineering-icon"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h3>Data Engineering</h3>
                    <p>
                      Build and maintain systems for collecting, storing,
                      processing, and analyzing your data efficiently and at
                      scale.
                    </p>
                  </div>
                  <div className="ana-feature cc-border-bottom">
                    <img
                      src="./data-analytics.png"
                      loading="lazy"
                      alt="data-analytics-icon"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h3>Data Analytics</h3>
                    <p>
                      Gain valuable insights into your operations and
                      performance to make data-driven decisions.
                    </p>
                  </div>
                  <div className="ana-feature cc-border-bottom">
                    <img
                      src="./machine-learning.png"
                      loading="lazy"
                      alt="machine-learning-icon"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h3>Data Science & Machine Learning</h3>
                    <p>
                      Build and deploy production-grade machine learning systems
                      at scale for features like:
                    </p>
                    <ul>
                      <li>Personalized User Feeds</li>
                      <li>Recommendation Systems</li>
                      <li>Fraud Detection</li>
                      <li>Customer Churn Prediction</li>
                    </ul>
                  </div>
                  <div className="ana-feature cc-border-bottom">
                    <img
                      src="./data-security.png"
                      loading="lazy"
                      alt="data-security-icon"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <h3>Data Security</h3>
                    <p>
                      Design systems to secure mission-critical data with tools
                      like encryption, auditing, and access control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
