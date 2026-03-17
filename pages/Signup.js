import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (age < 2 || age > 7) {
      alert("Signup is only allowed for kids aged 2 to 7.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("New user registered:", {
      fullName,
      age,
      mobile,
      email,
      password,
    });

    navigate("/home");
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/teddy.jpg')", // ✅ use your teddy image
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
          background: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          width: "320px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#ff4081" }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ textAlign: "left", marginBottom: "5px" }}>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={inputStyle}
          />

          <label style={{ textAlign: "left", marginBottom: "5px" }}>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={inputStyle}
          />

          <label style={{ textAlign: "left", marginBottom: "5px" }}>Mobile No:</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            style={inputStyle}
          />

          <label style={{ textAlign: "left", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <label style={{ textAlign: "left", marginBottom: "5px" }}>Create Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <label style={{ textAlign: "left", marginBottom: "5px" }}>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
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
              marginTop: "10px",
            }}
          >
            Sign Up
          </button>
        </form>
        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#ff4081" }}>
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

export default Signup;