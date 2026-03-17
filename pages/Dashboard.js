import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [points, setPoints] = useState(() => parseInt(localStorage.getItem("points")) || 0);

  useEffect(() => {
    // Keep points synced with localStorage
    const storedPoints = parseInt(localStorage.getItem("points")) || 0;
    setPoints(storedPoints);
  }, []);

  return (
    <div className="dashboard">
      <div className="main">
        <h2>Welcome to Kids Learning App</h2>
        <p>You have <strong>{points}</strong> points!</p>
      </div>
    </div>
  );
}

export default Dashboard;