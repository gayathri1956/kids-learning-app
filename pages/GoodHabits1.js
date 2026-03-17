import React, { useState } from 'react';

// ✅ Habit data with working, child-friendly images (PNG)
const habits = [
  {
    id: 1,
    name: 'Brushing Teeth',
    img: process.env.PUBLIC_URL + '/images/brushing.png',
    description: 'Brush your teeth twice a day.',
  },
  {
    id: 2,
    name: 'Saying Thank You',
    img: process.env.PUBLIC_URL + '/images/thankyou.png',
    description: 'Say thank you to be polite.',
  },
  {
    id: 3,
    name: 'Helping Others',
    img: process.env.PUBLIC_URL + '/images/helping.png',
    description: 'Help others when they need it.',
  },
  {
    id: 4,
    name: 'Washing Hands',
    img: process.env.PUBLIC_URL + '/images/washing.png',
    description: 'Wash your hands before eating.',
  },
];

// Shuffle function
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const GoodHabits1 = () => {
  const [shuffledHabits] = useState(shuffleArray(habits));
  const [matchedIds, setMatchedIds] = useState([]);
  const [selectedImgId, setSelectedImgId] = useState(null);
  const [selectedTextId, setSelectedTextId] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSelectImg = (id) => {
    if (matchedIds.includes(id)) return;
    setSelectedImgId(id);
    if (selectedTextId !== null) checkMatch(id, selectedTextId);
  };

  const handleSelectText = (id) => {
    if (matchedIds.includes(id)) return;
    setSelectedTextId(id);
    if (selectedImgId !== null) checkMatch(selectedImgId, id);
  };

  const checkMatch = (imgId, textId) => {
    if (imgId === textId) {
      setMatchedIds([...matchedIds, imgId]);
      setFeedback('✅ Correct!');
    } else {
      setFeedback('❌ Try Again!');
    }
    setTimeout(() => {
      setSelectedImgId(null);
      setSelectedTextId(null);
      setFeedback('');
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#e0f7fa', minHeight: '100vh', fontFamily: 'Comic Sans MS' }}>
      <h2 style={{ textAlign: 'center' }}>🧼 Good Habits</h2>

      {/* Habit Cards */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: 40 }}>
        {habits.map(h => (
          <div key={h.id} style={{ width: 180, background: '#fff', padding: 10, borderRadius: 8, textAlign: 'center', boxShadow: '0 0 5px #ccc' }}>
            <img src={h.img} alt={h.name} style={{ width: '100%', height: 120, objectFit: 'contain', marginBottom: 10 }} />
            <h4>{h.name}</h4>
            <p style={{ fontSize: 14 }}>{h.description}</p>
          </div>
        ))}
      </div>

      <h3 style={{ textAlign: 'center' }}>🧩 Match the Habit Images with Their Names</h3>

      {/* Matching game */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', marginTop: 20 }}>
        {/* Images */}
        <div>
          <h4>Images</h4>
          {shuffledHabits.map(({ id, img }) => (
            <img
              key={id}
              src={img}
              alt=""
              onClick={() => handleSelectImg(id)}
              style={{
                width: 80,
                height: 80,
                margin: 10,
                cursor: matchedIds.includes(id) ? 'default' : 'pointer',
                opacity: matchedIds.includes(id) ? 0.5 : 1,
                border: selectedImgId === id ? '3px solid green' : '3px solid transparent',
                borderRadius: 8,
              }}
            />
          ))}
        </div>

        {/* Names */}
        <div>
          <h4>Names</h4>
          {shuffleArray(habits).map(({ id, name }) => (
            <div
              key={id}
              onClick={() => handleSelectText(id)}
              style={{
                padding: '10px 20px',
                margin: '10px 0',
                backgroundColor: matchedIds.includes(id) ? '#c8e6c9' : '#eee',
                border: selectedTextId === id ? '3px solid green' : '2px solid transparent',
                borderRadius: 20,
                fontWeight: 'bold',
                cursor: matchedIds.includes(id) ? 'default' : 'pointer',
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <div style={{ textAlign: 'center', marginTop: 30, fontSize: 18 }}>{feedback}</div>

      {/* Completion */}
      {matchedIds.length === habits.length && (
        <div style={{ textAlign: 'center', fontSize: 20, marginTop: 30, color: 'green', fontWeight: 'bold' }}>
          🎉 Well done! You matched all the good habits!
        </div>
      )}
    </div>
  );
};

export default GoodHabits1;

