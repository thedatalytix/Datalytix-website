import React, { useEffect, useState, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "../Pricing/Pricing.css";

const Pricing = () => {
  const parallaxRef = useRef(null);
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = (event) => {
    setIsYearly(event.target.id === "yearly");
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
      <div className="pricing-page" ref={parallaxRef}>
        <img
          decoding="async"
          sizes="100vw"
          srcSet="
          https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png?scale-down-to=512 512w,
          https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png?scale-down-to=1024 1024w,
          https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png?scale-down-to=2048 2048w,
          https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png 2600w"
          src="https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png"
          alt="Hero image"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectPosition: "center center",
            objectFit: "cover",
            imageRendering: "auto",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div className="pricing-content-wrapper">
          <div className="pricing-content">
            <a href="#" className="price-us-link">
              <h1 className="price-us-title">PRICING</h1>
              <h5 className="price-us-subtitle">
                straightforward Costing designed to grow{" "}
              </h5>
              <p className="price-us-description">
                At Datalytix, we specialize in providing innovative software
                solutions and IT services.
              </p>
            </a>
          </div>
        </div>
      </div>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-toggle">
            <div className="toggle-container">
              <input
                type="radio"
                id="monthly"
                name="pricing"
                className="toggle-input"
                checked={!isYearly}
                onChange={handleToggle}
              />
              <label htmlFor="monthly" className="toggle-option">
                Monthly
              </label>
              <input
                type="radio"
                id="yearly"
                name="pricing"
                className="toggle-input"
                checked={isYearly}
                onChange={handleToggle}
              />
              <label htmlFor="yearly" className="toggle-option">
                Yearly
              </label>
              <span className="toggle-slider"></span>
            </div>
          </div>

          <div className="pricing-cards">
            {/* <!-- Basic Plan --> */}
            <div className="pricing-card">
              <h2>For individuals</h2>
              <h1>Basic</h1>
              <p className="plan-desc">Suitable for individuals</p>
              <h2 className="price">
                ${isYearly ? 109 : 99}{" "}
                <span className="price-period">
                  {isYearly ? "/yearly" : "/monthly"}
                </span>
              </h2>
              <ul className="features">
                <h2>What’s included</h2>
                <li>
                  <i className="icon-check"></i> All analytics features
                </li>
                <li>
                  <i className="icon-check"></i> Up to 250,000 tracked visits
                </li>
                <li>
                  <i className="icon-check"></i> Normal support
                </li>
                <li>
                  <i className="icon-check"></i> Up to 3 team members
                </li>
              </ul>
              <button className="get-started">Get started</button>
            </div>

            {/* <!-- Pro Plan --> */}
            <div className="pricing-card popular">
              <span className="badge">Popular</span>
              <h2>For startups</h2>
              <h1>Pro</h1>
              <p className="plan-desc">
                Suitable for teams size of 2-49 people
              </p>
              <h2 className="price">
                ${isYearly ? 209 : 199}{" "}
                <span className="price-period">
                  {isYearly ? "/yearly" : "/monthly"}
                </span>
              </h2>
              <ul className="features">
                <h2>What’s included</h2>
                <li>
                  <i className="icon-check"></i> All analytics features
                </li>
                <li>
                  <i className="icon-check"></i> Up to 1,000,000 tracked visits
                </li>
                <li>
                  <i className="icon-check"></i> Premium support
                </li>
                <li>
                  <i className="icon-check"></i> Up to 10 team members
                </li>
              </ul>
              <button className="get-started-middle">
                Get started <i className="icon-arrow-right"></i>
              </button>
            </div>

            {/* <!-- Enterprise Plan --> */}
            <div className="pricing-card">
              <h2>For big companies</h2>
              <h1>Enterprise</h1>
              <p className="plan-desc">Suitable for teams size of 50+ people</p>
              <h2 className="price">
                ${isYearly ? 409 : 399}{" "}
                <span className="price-period">
                  {isYearly ? "/yearly" : "/monthly"}
                </span>
              </h2>
              <ul className="features">
                <h2>What’s included</h2>
                <li>
                  <i className="icon-check"></i> All analytics features
                </li>
                <li>
                  <i className="icon-check"></i> Up to 5,000,000 tracked visits
                </li>
                <li>
                  <i className="icon-check"></i> Dedicated support
                </li>
                <li>
                  <i className="icon-check"></i> Up to 50 team members
                </li>
              </ul>
              <button className="get-started">Get started</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`simple-pricing-section ${sectionInView ? "in-view" : ""}`}
        ref={sectionRef}
      >
        <div className="pricing-header flex gap-2.5">
          <p className="subheading text-lg text-[#a074f9]">SIMPLE PRICING</p>
          <h2 className="main-title text-4xl text-white">
            Compare All Plans & Features
          </h2>
        </div>

        <section className="simple-pricing-section-list text-white">
          <div className="mx-auto p-6 overflow-x-auto">
            <div className="hidden mt-16 lg:block">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-8 pr-4"></th>
                    <th className="px-4 py-8 text-center">
                      <span className="text-base font-medium">Startup</span>
                      <div className="mt-6">
                        <span className="text-4xl font-bold">$59</span>
                        <span className="text-sm font-medium">/mo</span>
                      </div>
                      <button className="get-started mt-4">Get started</button>
                    </th>

                    <th className="px-4 py-8 text-center bg-custom-color rounded-t-xl">
                      <span className="text-base font-medium">Efficient </span>
                      <div className="mt-6">
                        <span className="text-4xl font-bold">$89</span>
                        <span className="text-sm font-medium">/mo</span>
                      </div>{" "}
                      <button className="get-started mt-4">Get started</button>
                    </th>

                    <th className="px-4 py-8 text-center">
                      <span className="text-base font-medium">Startup</span>
                      <div className="mt-6">
                        <span className="text-4xl font-bold">$59</span>
                        <span className="text-sm font-medium">/mo</span>
                      </div>
                      <button className="get-started mt-4">Get started</button>
                    </th>
                  </tr>
                </thead>
                {/* ROW1 */}
                <tbody>
                  <tr>
                    <td className="py-4 pr-4 text-2xl border-b border-gray-200">
                      Core features
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200"></td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color"></td>

                    <td className="px-4 py-4 text-center border-b border-gray-200"></td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium border-b text-gray-300 border-gray-200">
                      Basic Tools
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium text-gray-300 border-b border-gray-200">
                      Cloud Storage
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      50GB{" "}
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      100GB
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      500GB
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium text-gray-300 border-b border-gray-200">
                      Ads Management
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium text-gray-300 border-b border-gray-200">
                      Instant Data Refresh
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <span style={{ color: "red" }}>X</span>
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium text-gray-300 border-b border-gray-200">
                      Creative Tools
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      2{" "}
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      5
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      10
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium text-gray-300 border-b border-gray-200">
                      Weekly Reporting
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <span style={{ color: "red" }}>X</span>
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>
                  </tr>
                </tbody>
                {/* ROW2 */}
                <tbody>
                  <tr>
                    <td className="py-4 pr-4 text-2xl border-b border-gray-200">
                      Reporting{" "}
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200"></td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                    </td>
                    <td className="px-4 py-4 text-center border-b border-gray-200"></td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium border-b text-gray-300 border-gray-200">
                      Live Editing
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium border-b text-gray-300 border-gray-200">
                      Email Storage
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      10GB{" "}
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      Unlimited
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      Unlimited
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium border-b text-gray-300 border-gray-200">
                      Team Management
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <span style={{ color: "red" }}>X</span>
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium border-b text-gray-300 border-gray-200">
                      Instant Commenting
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <span style={{ color: "red" }}>X</span>
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium border-b text-gray-300 border-gray-200">
                      Team Members
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      2{" "}
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      5
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      10
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-4 font-medium border-b text-gray-300 border-gray-200">
                      Advanced Reporting
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <span style={{ color: "red" }}>X</span>
                    </td>

                    <td className="px-4 py-4 text-center text-white border-b border-white/20 bg-custom-color">
                      {" "}
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>

                    <td className="px-4 py-4 text-center border-b border-gray-200">
                      <FaCheck className="mx-auto" style={{ color: "green" }} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Pricing;
