// components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Learning Pages</h3>
      <ul>
        <li><Link to="/alphabets">Alphabets</Link></li>
        <li><Link to="/numbers">Numbers</Link></li>
        <li><Link to="/rhymes">Rhymes</Link></li>
        <li><Link to="/drawing">Drawing</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/puzzle-games">Puzzle Games</Link></li>
        <li><Link to="/countries-flags">Countries & Flags</Link></li>
        <li><Link to="/stories">Stories</Link></li>
        <li><Link to="/traffic-safety">Traffic Safety</Link></li>
        <li><Link to="/body-parts">Body Parts</Link></li>
        <li><Link to="/days-of-week">Days Of Week</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;