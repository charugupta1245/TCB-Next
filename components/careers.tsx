import React from "react";

const Careers = () => {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: 0,
        background: "#f0f0f0",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <h1
            style={{ fontSize: "2.5em", marginBottom: "20px", color: "#333" }}
          >
            JOIN OUR TEAM
          </h1>
          <p
            style={{
              fontSize: "1em",
              lineHeight: "1.6",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            style={{
              background: "#673ab7",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "5px",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
            SEE OPEN JOBS
          </button>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <img
            src="/images/careers-illustration.png" // Replace with your image path
            alt="Person working on a laptop"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
