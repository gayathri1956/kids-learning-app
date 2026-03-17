import React from "react";
import { useNavigate } from "react-router-dom";

function Home1() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#ff4081" }}>
        🌟 Welcome to Kids Learning App 🌟
      </h1>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
        Fun learning with alphabets, numbers, rhymes, stories and more!
      </p>

      <button
        onClick={() => navigate("/all-pages")}
        style={{
          fontSize: "20px",
          padding: "10px 30px",
          borderRadius: "12px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Show All Pages
      </button>
    </div>
  );
}

export default Home1;