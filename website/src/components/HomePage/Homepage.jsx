import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CountUp } from "countup.js";
import { useInView } from "react-intersection-observer";
import "../HomePage/Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Homepage = () => {
  const cardRef = useRef(null);
  const parallaxRef = useRef(null);

  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      const offset = 100; // Adjust this value if needed
      const topPosition =
        contactRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  // Intersection observer for section animation
  const { ref: howItWorksRef, inView: howItWorksInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // List of items for the "How It Works" section
  const listItems = [
    {
      number: "01",
      title: "Efficiency",
      description:
        "We help teams become more efficient by providing valuable insights and automation.",
    },
    {
      number: "02",
      title: "Reliability",
      description:
        "Our solutions are built with precision and consistency to ensure dependable performance.",
    },
    {
      number: "03",
      title: "Scalability",
      description:
        "We design systems that grow with your business, adapting to evolving needs effortlessly.",
    },
    {
      number: "04",
      title: "Security",
      description:
        "Data integrity and protection are at the core of our solutions, ensuring compliance and safety.",
    },
  ];

  // GOOD AT WORK
  const services = [
    {
      title: "Data Engineering",
      description:
        "We design scalable systems for collecting, storing, and processing data, ensuring efficiency and mission success.",
      icon: "/data-eng.png",
    },
    {
      title: "Data Analytics",
      description:
        "We provide insights to drive data-informed decisions, offering transparency and operational clarity.",
      icon: "/data-analytics.png",
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "We build and deploy scalable machine learning systems to enhance automation and intelligence.",
      icon: "/machine-learning.png",
    },
    {
      title: "Data Security",
      description:
        "We design secure systems to protect critical data, ensuring confidentiality and integrity.",
      icon: "/data-security.png",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyname: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("companyname", formData.companyname);
    data.append("message", formData.message);

    const Sheet_Url =
      "https://script.google.com/macros/s/AKfycbykhtbbgzewRbqiEJbgEYNKFZvFgKY6DT6M3miXsKwWerJ0L_fLOKharM5lqMMeVJ8/exec";
    try {
      await fetch(Sheet_Url, {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      });

      setFormData({
        name: "",
        email: "",
        companyname: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Innovative Problem-Solving Cards Sliding
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

  // UseEffect for 0 to count values
  useEffect(() => {
    const counts = [
      { id: "one", endValue: 6, duration: 2.5 },
      { id: "two", endValue: 5, duration: 2.5, suffix: "+" },
      { id: "three", endValue: 70, duration: 2.5, suffix: "%" },
    ];

    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const {
            id,
            endValue,
            duration,
            suffix = "",
          } = counts.find((count) => count.id === entry.target.id) || {};

          const count = new CountUp(id, endValue, {
            duration,
            suffix, // Append suffix
          });

          if (count.error) {
            console.error(count.error);
          } else {
            count.start();
          }

          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    }, observerOptions);

    counts.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Clean up observer on component unmount
    return () => {
      counts.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <>
      <Header scrollToContact={scrollToContact} />

      <div className="homepage flex flex-col items-center justify-start p-5 sm:p-10">
        <div className="section-container lg:ml-0 max-w-[1200px] w-full">
          <h1 className="heading heading-xl text-white text-gradient text-center">
            <span className="block mb-2">Empower Your Business With</span>
            <span className="inline-block mb-2">Modern Data Engineering</span>
          </h1>
          <div className="flex justify-center">
            <button
              type="button"
              className="button inline-flex items-center mt-5 space-x-2"
              onClick={scrollToContact}
            >
              <span>Learn more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Transforming Content */}
        <div className="flex-container-homepage max-w-[1200px] w-full">
          <div className="flex-inner">
            {/* Left side content */}
            <div className="text-left">
              <h1 className="home-text-left">
                Transforming Businesses with <br />
                <span>Cutting-Edge Solutions</span>
              </h1>
            </div>

            {/* Right side content */}
            <div className="text-left md:pl-6">
              <p className="home-text-right">
                The Datalytix Solutions is a leading technology company specializing in
                data engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IN NUMBERS SECTION */}
      <div className="info-container">
        <div className="info-content">
          <div className="info-text">
            <p className="info-subtitle">IN NUMBERS</p>
            <h1 className="info-heading">
              The Datalytix Solutions, we are dedicated to providing innovative software
              solutions, data engineering and IT services that empower
              businesses.<br></br>
            </h1>
          </div>

          <div className="info-stats">
            <div className="stat-item">
              <h2 className="stat-number" id="one">
                0
              </h2>
              <p className="stat-description">Years of Experience</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h2 className="stat-number" id="two">
                0
              </h2>
              <p className="stat-description">Countries in Services</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h2 className="stat-number" id="three">
                0
              </h2>
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
              Innovative Problem-Solving & Data Intelligence <br></br>
              for Your Business Needs{" "}
            </h2>
          </div>
        </div>
        <div className="framer-cards" ref={cardRef}>
          <div className="framer-card framer-card-one">
            <div className="framer-card-content">
              <img
                src="/Images/card.png"
                alt="card"
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
                src="/Images/card1.png"
                alt="card1"
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
                src="/Images/card2.png"
                alt="card2"
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

      {/* HOW IT WORKS */}
      <section ref={howItWorksRef} className="about-section">
        <div className="about-container">
          <div className="content-wrapper">
            <div className="left-content-about">
              <div className="about-header">
                <p className="subheading">HOW IT WORKS</p>
                <h2 className="main-title">
                  Our Journey Towards Technological Excellence
                </h2>
              </div>
            </div>
            <div className="right-content-about">
              <h1 className="heading-about">
                The Datalytix Solutions, we specialize in providing innovative software
                solutions that enable businesses to streamline operations,
                enhance productivity, and achieve their goals efficiently.
              </h1>
              <ul className="list-none p-0">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className={`mb-6 opacity-0 transform translate-x-0 transition-all duration-500 ease-out ${
                      howItWorksInView ? "opacity-100 translate-x-0" : ""
                    }`}
                    style={{ transitionDelay: `${index * 500}ms` }}
                  >
                    <div className="flex items-center mb-2">
                      <span className="number mr-2">{item.number}</span>
                      <h3 className="title">{item.title}</h3>
                    </div>
                    <p className="description">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Good at */}
      <div className="bg-black text-white px-4 sm:px-6 py-10 sm:py-12 flex justify-center">
        <div className="max-w-[1150px] w-full">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-20 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What We're <span className="text-purple-400">Good at.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-[220px] sm:h-[250px] w-[90%] sm:w-[280px] rounded-xl shadow-lg border-transparent transition-all duration-300 hover:scale-[1.05] group"
                style={{
                  background:
                    "linear-gradient(180deg, #000000 0%, #36017a 100%)",
                  fontFamily: "'Mulish', sans-serif",
                }}
              >
                {/* Title - Top Left */}
                <h3 className="absolute top-4 left-4 text-sm sm:text-lg font-semibold">
                  {service.title.split(" ").slice(0, 2).join(" ")} <br />
                  {service.title.split(" ").slice(2).join(" ")}
                </h3>

                {/* Icon - Bottom Right */}
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="absolute bottom-4 right-4 w-16 sm:w-20 h-16 sm:h-20 p-2 transition-transform duration-300 group-hover:scale-110 filter invert"
                />

                {/* Flipper Effect - Description on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-white text-xs sm:text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GET IN TOUCH */}
      <section className="contact-section" ref={contactRef}>
        <div className="content">
          <div className="left-content-contact">
            <p className="contact-title">GET IN TOUCH</p>
            <h2 className="contact-subtitle">
              Reach out to us for any help and inquiries
            </h2>
          </div>
          <div className="right-content-contact">
            <div className="input-form">
              <form method="POST" className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="your-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-address" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company-name" className="form-label">
                    Company Name
                  </label>
                  <input
                    id="companyname"
                    name="companyname"
                    type="text"
                    className="form-input"
                    value={formData.companyname}
                    onChange={handleChange}
                    required
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
                    value={formData.message}
                    onChange={handleChange}
                    required
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

      <Footer scrollToContact={scrollToContact} />
    </>
  );
};

export default Homepage;
