import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaPlus, FaTimes } from "react-icons/fa";
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

  const [openIndex, setOpenIndex] = useState(null);

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
      <section className="framer-content-contact">
        <div className="framer-cards-contact">
          <div className="framer-card-contact framer-card-one">
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
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <div className="header-top">
            <p className="sub-title">FREQUENTLY ASKED QUESTION</p>
            <h2 className="main-title">Our Faqs</h2>
          </div>
          <div className="faq-box">
            {faqData.map((faq, index) => (
              <div className="faq-item">
                <div className="question" onClick={() => toggleAnswer(index)}>
                  {faq.question} 
                  {openIndex === index ? (
                    <FaTimes
                      className="icon"
                      style={{ color: "#F0E68C" }}
                    />
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

export default Contact;
