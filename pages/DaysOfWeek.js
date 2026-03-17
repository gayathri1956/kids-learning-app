// src/pages/DaysOfWeek.js
import React, { useState } from 'react';
import './DaysOfWeek.css';

const daysInfo = {
  Sunday: 'Sunday is a fun day! 🌞',
  Monday: 'Monday is the start of the week! 📘',
  Tuesday: 'Tuesday is for trying new things! 🚴‍♂️',
  Wednesday: 'Wednesday is the middle of the week! 🐫',
  Thursday: 'Thursday is for learning! 📚',
  Friday: 'Friday is fun and exciting! 🎉',
  Saturday: 'Saturday is for rest and play! 🛌🎨'
};

const DaysOfWeek = () => {
  const [selectedDay, setSelectedDay] = useState('Sunday');

  return (
    <div className="days-container">
      <h1 className="days-title">🗓️ Days of the Week</h1>
      <div className="days-content">
        <div className="days-list">
          {Object.keys(daysInfo).map((day) => (
            <button
              key={day}
              className={`day-button ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="day-info">
          <h2>{selectedDay}</h2>
          <p>{daysInfo[selectedDay]}</p>
        </div>
      </div>
    </div>
  );
};

export default DaysOfWeek;
