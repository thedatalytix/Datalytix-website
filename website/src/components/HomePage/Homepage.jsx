import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../HomePage/Homepage.css";

const ServiceCard = ({ title, gradient, rotation, imageSrc, yOffset }) => (
  <motion.div
    className="absolute w-[250px] h-[300px] md:w-[300px] md:h-[380px] rounded-[20px] md:rounded-[35px] overflow-hidden"
    style={{
      rotate: rotation,
      left: "calc(50% - 125px)",
      top: "calc(50% - 150px)",
      y: yOffset,
    }}
  >
    <div className="absolute inset-0 rounded-[20px] md:rounded-[35px] border border-white/5 border-t-0 overflow-hidden bg-gradient-to-b from-[#9b73f2]/20 to-[#5c3cd7]/20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(156, 116, 242, 0.11) 0%, rgb(92, 60, 215) 100%)",
        }}
      />
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div
        className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-white text-[40px] md:text-[51px] font-light"
        style={{ lineHeight: "1" }}
      >
        {title}
      </div>
    </div>
  </motion.div>
);

const Homepage = () => {
  const containerRef = useRef(null);
  const [isScrollComplete, setIsScrollComplete] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

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
      { threshold: 0.5 } // Trigger when 50% of the section is in view
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

  const services = [
    {
      title: "Innovative Solutions",
      gradient:
        "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
      rotation: -1,
      imageSrc:
        "https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png?scale-down-to=1024",
    },
    {
      title: "Hardware Solution",
      gradient:
        "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700",
      rotation: 2,
      imageSrc:
        "https://framerusercontent.com/images/TriMEg9VI7vab6L5vl80XoMJYF8.jpg",
    },
    {
      title: "Artificial Intelligence",
      gradient:
        "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800",
      rotation: 7,
      imageSrc:
        "https://framerusercontent.com/images/7Zpq5rsCuhC8CoNtwow4eE3TemA.png",
    },
    {
      title: "Software Solution",
      gradient:
        "bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900",
      rotation: 11,
      imageSrc:
        "https://framerusercontent.com/images/TrbTQ8gSDTFgzJUBQkhOk2hAWOA.jpg",
    },
  ];

  // Define yOffsets to move cards up in reverse order
  const yOffsets = services.map((_, index) =>
    useTransform(
      scrollYProgress,
      [1 - (index + 1) / services.length, 1 - index / services.length],
      [0, -800]
    )
  );

  const pageScroll = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"]);

  const [openIndex, setOpenIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const faqSectionRef = useRef(null);

  const faqData = [
    {
      question: "Template styling and Support",
      answer:
        "We often add new CSS styles via our properties. However, browser support for these properties may vary in Framer. Here we will provide an overview of the compatibility of modern styles added to Framer.",
    },
    {
      question: "Troubleshooting Animation Issues",
      answer:
        'If you are experiencing problems with animations not working on your Framer site, particularly with ticker components or appear effects, the issue might be related to the "Reduced Motion" settings on specific devices or browsers. ',
    },
    {
      question: "How to choose the right font license for Framer",
      answer:
        "Depending on the plan you have chosen with us, delivery can vary from 1 to 4 weeks.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, we take data privacy and security seriously. Your personal information will be encrypted and stored securely.",
    },
    {
      question: "Does this framer template is responsive?",
      answer:
        "The Free Plan is a generous offering designed for flexible and extensive experimentation, providing a broad range of features across various aspects. ",
    },
    {
      question: "How to report an issue",
      answer:
        "If you run into an issue or bug, you can report it so we can solve it. If you have an enterprise plan, you can ping your account manager or product specialists directly.",
    },
    {
      question: "How to create a remix link",
      answer:
        "You can allow anyone to create a copy of your Framer project by sending them a remix link. They can customize it, make it their own, and publish the remixed site in seconds.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    if (faqSectionRef.current) {
      observer.observe(faqSectionRef.current);
    }

    return () => {
      if (faqSectionRef.current) {
        observer.unobserve(faqSectionRef.current);
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
                Datalytix© is a leading technology company specializing in
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
                  <br />
                  <span className="highlighted-text">
                    Cutting-Edge Solutions
                  </span>
                </h1>
              </div>
              <div className="rich-text-container-sub">
                <h4 className="subheading-sub">
                  At Datalytix, we specialize in providing innovative<br/>
                  software solutions that empower businesses to<br/>
                  streamline operations,enhance productivity,<br/>
                  and achieve their goals efficiently.
                  Discover how our solutions can transform your business<br />
                  today.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Card Section */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center"
          style={{ y: pageScroll }}
        >
          <div className="text-white text-[100px] md:text-[200px] font-light tracking-tighter text-center px-4 md:px-8">
            Our Services
          </div>
          <div
            className="absolute w-[800px] h-[400px] md:w-[1026px] md:h-[519px] rounded-full filter blur-[30px] md:blur-[60px]"
            style={{ backgroundColor: "#613fe83d" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                yOffset={yOffsets[index]}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <section className="testimonial-section mx-auto">
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
      </section>

      {/* FAQ Section */}
      <section className="faq-section" ref={faqSectionRef}>
      <div className={`container ${isInView ? "visible" : ""}`}>
        <div className={`header-top left-content`}>
          <p className="sub-title">FREQUENTLY ASKED QUESTION</p>
          <h2 className="main-title">Our Faqs</h2>
        </div>
        <div className="faq-box">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="question" onClick={() => toggleAnswer(index)}>
                {faq.question}
                {openIndex === index ? (
                  <FaTimes className="icon" style={{ color: "#F0E68C" }} />
                ) : (
                  <FaPlus className="icon" style={{ color: "#F0E68C" }} />
                )}
              </div>
              <div className={`answer ${openIndex === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Homepage;

