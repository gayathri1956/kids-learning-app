import React from 'react';

// Correct image paths — all relative to the public folder
const letters = [
  { char: 'A', label: 'Apple', img: '/images/a.jpg' },
  { char: 'B', label: 'Bee', img: '/images/bee.jpg' },
  { char: 'C', label: 'Cat', img: '/images/cat.jpg' },
  { char: 'D', label: 'Dog', img: '/images/dog.jpg' },
  { char: 'E', label: 'Elephant', img: '/images/e.jpg' },
  { char: 'F', label: 'Fish', img: '/images/f.jpg' },
  { char: 'G', label: 'Giraffe', img: '/images/gi.jpg' },
  { char: 'H', label: 'Horse', img: '/images/h.jpg' },
  { char: 'I', label: 'Ice Cream', img: '/images/i.jpg' },
  { char: 'J', label: 'Juice', img: '/images/j.jpg' },
  { char: 'K', label: 'Kangaroo', img: '/images/k.jpg' },
  { char: 'L', label: 'Lion', img: '/images/l.jpg' },
  { char: 'M', label: 'Monkey', img: '/images/m.jpg' },
  { char: 'N', label: 'Nest', img: '/images/n.jpg' },
  { char: 'O', label: 'Owl', img: '/images/o.jpg' },
  { char: 'P', label: 'Parrot', img: '/images/p.jpg' },
  { char: 'Q', label: 'Queen', img: '/images/q.jpg' },
  { char: 'R', label: 'Rabbit', img: '/images/r.jpg' },
  { char: 'S', label: 'Sun', img: '/images/s.jpg' },
  { char: 'T', label: 'Tiger', img: '/images/t.jpg' },
  { char: 'U', label: 'Umbrella', img: '/images/u.jpg' },
  { char: 'V', label: 'Violin', img: '/images/v.jpg' },
  { char: 'W', label: 'Whale', img: '/images/w.jpg' },
  { char: 'X', label: 'Xylophone', img: '/images/x.jpg' },
  { char: 'Y', label: 'Yak', img: '/images/y.jpg' },
  { char: 'Z', label: 'Zebra', img: '/images/z.jpg' },
];

export default function Alphabets() {
  const playSound = (letter) => {
    const audio = new Audio(`${process.env.PUBLIC_URL}/sounds/${letter}.mp3`);
    audio.play().catch(e => console.error('Audio playback failed:', e));
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #ffe082, #ffccbc)',
      minHeight: '100vh', 
      padding: 20,
      fontFamily: 'Comic Sans MS, cursive',
      textAlign: 'center'
    }}>
      <h1>🔤 Learn Alphabets with Pictures & Sounds</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 20,
        marginTop: 30
      }}>
        {letters.map(({ char, img, label }) => (
          <button
            key={char}
            onClick={() => playSound(char)}
            style={{
              border: 'none',
              background: 'white',
              borderRadius: 15,
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              padding: 10,
              cursor: 'pointer',
              transition: 'transform 0.1s'
            }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={img}
              alt={label}
              onError={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/images/default.png`)}
              style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: 12 }}
            />
            <div style={{ fontSize: '2rem', marginTop: 8 }}>{char}</div>
            <div style={{ fontSize: '1rem', color: '#555' }}>{label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
