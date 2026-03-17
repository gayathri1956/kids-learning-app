// components/SimpleLayout.js
import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

function SimpleLayout({ children }) {
  return (
    <div className="layout-container">
      <header className="app-header">
        <h1 className="app-title">🦁 Kids Learning App 🦁</h1>
        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </header>

      <main className="page-content">{children}</main>

      <footer className="app-footer">© Kids Learning App</footer>
    </div>
  );
}

export default SimpleLayout;