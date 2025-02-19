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
      description: "Data integrity and protection are at the core of our solutions, ensuring compliance and safety.",
    },
  ];

  // GOOD AT WORK
  const services = [
    {
      title: "Data Engineering",
      description:
        "Build and maintain systems for collecting, storing, processing, and analyzing your data efficiently and at scale.Our focus is always on Mission Success, and we are very pragmatic when choosing the best tools for the job.",
      icon: "/data-eng.png",
    },
    {
      title: "Data Analytics",
      description:
        "With analytics, we help our partners gain valuable insights into their operations and performance. Analytics allows teams to get transparency on ground realities, and lets organizations make data-driven decisions.",
      icon: "/data-analytics.png",
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "Build and deploy production grade machine learning systems and pipelines at scale to support features like:",
      icon: "/machine-learning.png",
      list: [
        "Personalized User Feeds.",
        "Recommendation Systems.",
        "Fraud Detection and Prevention.",
        "Customer Churn Prediction and many many more.",
      ],
    },
    {
      title: "Data Security",
      description:
        "Design systems and processes for securing mission critical data like:",
      icon: "/data-security.png",
      list: [
        "Automated Auditing and Monitoring data access.",
        "Backup and Disaster Recovery.",
        "Fine-grained Data Access Control systems.",
        "Identify and Classify Data by sensitivity, value and impact.",
      ],
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
          srcSet="https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png?scale-down-to=512 512w, 
            https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png?scale-down-to=1024 1024w, 
            https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png?scale-down-to=2048 2048w, 
            https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png 2600w"
          src="https://framerusercontent.com/images/AWt6zcoqPs9H81EMoC4xfgZEdWY.png"
          alt="Hero image"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectPosition: "center",
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
      <section ref={sectionRef} className="about-section">
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
                At Datalytix, we specialize in providing innovative software
                solutions that enable businesses to streamline operations,
                enhance productivity, and achieve their goals efficiently.
              </h1>
              <ul className="list-none p-0">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className={`mb-6 opacity-0 transform translate-x-0 transition-all duration-500 ease-out ${
                      sectionInView ? "opacity-100 translate-x-0" : ""
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
      <div className="bg-black text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold mb-4">
                What We're <span className="text-purple-400">Good at.</span>
              </h2>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="pb-8">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-20 h-20 mb-6"
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg mb-4">{service.description}</p>
                    {service.list && (
                      <ul className="list-disc list-inside">
                        {service.list.map((item, i) => (
                          <li key={i} className="text-xm mb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
