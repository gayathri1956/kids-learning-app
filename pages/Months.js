
import React from 'react';

const months = [
  { name: 'January', emoji: '❄️', color: '#B3E5FC' },
  { name: 'February', emoji: '❤️', color: '#F48FB1' },
  { name: 'March', emoji: '🍀', color: '#AED581' },
  { name: 'April', emoji: '🌸', color: '#F8BBD0' },
  { name: 'May', emoji: '🌼', color: '#FFF176' },
  { name: 'June', emoji: '☀️', color: '#FFD54F' },
  { name: 'July', emoji: '🎆', color: '#EF9A9A' },
  { name: 'August', emoji: '🌻', color: '#FFCA28' },
  { name: 'September', emoji: '🍂', color: '#FFCC80' },
  { name: 'October', emoji: '🎃', color: '#FFB74D' },
  { name: 'November', emoji: '🍁', color: '#A1887F' },
  { name: 'December', emoji: '🎄', color: '#81D4FA' },
];

export default function Months() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #C8E6C9, #FFCCBC)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 30,
      fontFamily: "'Comic Sans MS', cursive",
      color: '#4E342E',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: 20 }}>📆 Months of the Year</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 20,
        width: '100%',
        maxWidth: 800,
      }}>
        {months.map(({ name, emoji, color }) => (
          <div
            key={name}
            style={{
              backgroundColor: color,
              borderRadius: 20,
              padding: '25px 10px',
              boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
              fontSize: '1.6rem',
              cursor: 'default',
              userSelect: 'none',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ fontSize: '3rem' }}>{emoji}</div>
            <div style={{ marginTop: 10, fontWeight: 'bold' }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
