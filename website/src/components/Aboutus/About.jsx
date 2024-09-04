import React from "react";
import "../Aboutus/About.css";

const About = () => {
  return (
    <>
      <div className="aboutus-page">
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
            imageRendering: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <div className="aboutus-content-wrapper">
          <div className="aboutus-content">
            <a href="#" className="about-us-link">
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
      <section className="about-section">
        <div className="container">
          <div className="left-content">
            <div className="about-header">
              <p className="subheading">HOW IT WORKS</p>
              <h2 className="main-title">
                Our Journey Towards Technological Excellence
              </h2>
            </div>
          </div>
          <div className="right-content">
            <h1 className="heading">
              At Datalytix, we specialize in providing innovative software
              solutions that empower businesses to streamline operations,
              enhance productivity, and achieve their goals efficiently.
            </h1>
            <div className="list-item">
              <div className="list-item-content">
                <p className="number">01</p>
                <p className="title">Efficiency</p>
              </div>
              <p className="description">
                Designed for your team, see for yourself and manage your time
                with Datalytix.
              </p>
            </div>
            <div className="list-item">
              <div className="list-item-content">
                <p className="number">02</p>
                <p className="title">Reliability</p>
              </div>
              <p className="description">
                This template is not merely a design, it's a comprehensive
                solution.
              </p>
            </div>
            <div className="list-item">
              <div className="list-item-content">
                <p className="number">03</p>
                <p className="title">Innovative</p>
              </div>
              <p className="description">
                Tailored to elevate the online presence of AI, Technology, SaaS
                businesses.
              </p>
            </div>
            <div className="list-item">
              <div className="list-item-content">
                <p className="number">04</p>
                <p className="title">Integrates</p>
              </div>
              <p className="description">
                Integrates with your workflow do need to change.
              </p>
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
                <br />
                <h2 className="display-2 margin-bottom-25 text-white">
                  What We're <span className="good-at">Good at.</span>
                </h2>
                <p className="paragraph-large margin-bottom-40"></p>
              </div>
              <div className="ana-services-c2">
                <div className="ana-features-grid">
                  <div className="ana-feature cc-border-bottom">
                    <img
                      src="./data-eng.png"
                      loading="lazy"
                      alt="data-engineering-icon"
                      style={{ width: "100px", height: "100px" }}
                      className="margin-bottom-30"
                    />
                    <h3 className="margin-bottom-15">Data Engineering</h3>
                    <p>
                      Build and maintain systems for collecting, storing,
                      processing, and analyzing your data efficiently and at
                      scale.
                      <br />
                      Our focus is always on Mission Success, and we are very
                      pragmatic when choosing the best tools for the job.
                    </p>
                  </div>
                  <div className="ana-feature cc-border-bottom">
                    <img
                      src="./data-analytics.png"
                      loading="lazy"
                      alt="data-analytics-icon"
                      style={{ width: "100px", height: "100px" }}
                      className="margin-bottom-30"
                    />
                    <h3 className="margin-bottom-15">Data Analytics</h3>
                    <p>
                      With analytics, we help our partners gain valuable
                      insights into their operations and performance. Analytics
                      allows teams to get transparency on ground realities and
                      lets organizations make data-driven decisions.
                    </p>
                  </div>
                  <div className="ana-feature cc-border-bottom">
                    <img
                      src="./machine-learning.png"
                      loading="lazy"
                      alt="machine-learning-icon"
                      style={{ width: "100px", height: "100px" }}
                      className="margin-bottom-30"
                    />
                    <h3 className="margin-bottom-15">
                      Data Science & Machine Learning
                    </h3>
                    <p>
                      Build and deploy production-grade machine learning systems
                      and pipelines at scale to support features like:
                    </p>
                    <div className="bullet-list margin-bottom-30">
                      <div className="bullet-list-item">
                        <div className="bullet">
                          <div className="unicon">-</div>
                        </div>
                        <div>Personalized User Feeds</div>
                      </div>
                      <div className="bullet-list-item">
                        <div className="bullet">
                          <div className="unicon">-</div>
                        </div>
                        <div>Recommendation Systems</div>
                      </div>
                      <div className="bullet-list-item">
                        <div className="bullet">
                          <div className="unicon">-</div>
                        </div>
                        <div>Fraud Detection and Prevention</div>
                      </div>
                      <div className="bullet-list-item">
                        <div className="bullet">
                          <div className="unicon">-</div>
                        </div>
                        <div>Customer Churn Prediction</div>
                      </div>
                      <p>and many more...</p>
                    </div>
                  </div>
                  <div className="ana-feature cc-border-bottom">
                    <img
                      src="./data-security.png"
                      loading="lazy"
                      alt="data-security-icon"
                      style={{ width: "100px", height: "100px" }}
                      className="margin-bottom-30"
                    />
                    <h3 className="margin-bottom-15">Data Security</h3>
                    <p>
                      Design systems and processes for securing mission-critical
                      data like:
                    </p>
                    <div className="bullet-list margin-bottom-30">
                      <div className="bullet-list-item">
                        <div className="bullet">
                          <div className="unicon">-</div>
                        </div>
                        <div>Automated Auditing and Monitoring data access</div>
                      </div>
                      <div className="bullet-list-item">
                        <div className="bullet">
                          <div className="unicon">-</div>
                        </div>
                        <div>Backup and Disaster Recovery</div>
                      </div>
                      <div className="bullet-list-item">
                        <div className="bullet">
                          <div className="unicon">-</div>
                        </div>
                        <div>Fine-grained Data Access Control systems</div>
                      </div>
                      <div className="bullet-list-item">
                        <div className="bullet">
                          <div className="unicon">-</div>
                        </div>
                        <div>Data Encryption</div>
                      </div>
                    </div>
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
