import React from "react";

const Homepage = () => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <img
        src="https://framerusercontent.com/images/SSXLWXwuQtiAVh8lr6lZo6e28.jpg"
        alt="header background image"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "1rem",
            lineHeight: "1.2",
          }}
        >
          Empower business with <br />
          modern technology <br />
          solutions
        </h1>

        <a
          href="./about"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.75rem 2rem",
            backgroundColor: "#613fe7",
            color: "#fff",
            borderRadius: "58px",
            textDecoration: "none",
            fontWeight: "500",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4b32c3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#613fe7")
          }
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginLeft: "10px", verticalAlign: "middle" }}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
