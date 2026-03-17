import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    navigate("/home");
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/teddy.jpg')", // ✅ correct way
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.9)", // semi-transparent white box
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#ff4081" }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ textAlign: "left", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <label style={{ textAlign: "left", marginBottom: "5px" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#4CAF50",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: "15px" }}>
          Don’t have an account?{" "}
          <a href="/" style={{ color: "#ff4081" }}>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;