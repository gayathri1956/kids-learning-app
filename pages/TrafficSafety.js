import React from 'react';

const signals = [
  {
    color: '#e53935',
    name: 'Red Light',
    emoji: '🟥',
    description: 'Stop! Wait for the green light before crossing or going.',
  },
  {
    color: '#fdd835',
    name: 'Yellow Light',
    emoji: '🟨',
    description: 'Get ready! The light will turn red soon. Slow down.',
  },
  {
    color: '#43a047',
    name: 'Green Light',
    emoji: '🟩',
    description: 'Go! It is safe to cross or drive now.',
  },
  {
    color: '#0288d1',
    name: 'Pedestrian Crossing',
    emoji: '🚸',
    description: 'Watch out for people crossing the road.',
  },
];

const safetyTips = [
  'Always stop, look both ways, and listen before crossing the road.',
  'Use pedestrian crossings and traffic signals.',
  'Wear a helmet when riding a bike or scooter.',
  'Hold hands with an adult when crossing busy roads.',
  'Never play near roads or traffic.',
];

const TrafficSafety = () => {
  return (
    <div style={{ fontFamily: 'Comic Sans MS, cursive', backgroundColor: '#fff8e1', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>🚦 Traffic Signals & Road Safety for Kids</h2>

      <section style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
        {signals.map(({ color, name, emoji, description }) => (
          <div
            key={name}
            style={{
              backgroundColor: color,
              color: 'white',
              width: 160,
              borderRadius: 15,
              padding: 20,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '48px', marginBottom: 10 }}>{emoji}</div>
            <h3 style={{ margin: '10px 0' }}>{name}</h3>
            <p style={{ fontSize: '14px' }}>{description}</p>
          </div>
        ))}
      </section>

      <section style={{ maxWidth: 600, margin: '0 auto' }}>
        <h3 style={{ borderBottom: '2px solid #ffb300', paddingBottom: '8px', marginBottom: '16px', color: '#ff6f00' }}>
          🚸 Road Safety Tips
        </h3>
        <ul style={{ fontSize: 18, lineHeight: 1.6, color: '#5d4037' }}>
          {safetyTips.map((tip, idx) => (
            <li key={idx} style={{ marginBottom: '10px' }}>• {tip}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TrafficSafety;
