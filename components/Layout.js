// components/Layout.js
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="app-header">
        <h1 className="app-title">🦁 Kids Learning App 🦁</h1>
        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </header>

      <div className="content-area">
        <Sidebar />   {/* Sidebar only here */}
        <main className="page-content">{children}</main>
      </div>

      <footer className="app-footer">© Kids Learning App</footer>
    </div>
  );
}

export default Layout;