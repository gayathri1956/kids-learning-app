import React, { useState, useEffect } from 'react';

const topics = [
  'Counting',
  'Addition',
  'Subtraction',
  'Multiplication',
  'Division',
  'Shapes',
  'Patterns',
  'Measurement',
  'Time',
  'Money',
  'Puzzles',
];

export default function NumbersMathPage() {
  const [selectedTopic, setSelectedTopic] = useState('Counting');

  return (
    <div
      style={{
        fontFamily: "'Comic Sans MS', cursive, Arial, sans-serif",
        padding: 25,
        background: 'linear-gradient(135deg, #FFF9C4 0%, #FFCCBC 100%)',
        minHeight: '100vh',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#FF7043',
          marginBottom: 30,
          fontWeight: '900',
          textShadow: '1px 1px 4px #FFA07A',
          fontSize: '2.8rem',
        }}
      >
        🔢 Fun with Numbers & Math
      </h1>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 35,
          gap: 10,
        }}
      >
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            style={{
              backgroundColor: selectedTopic === topic ? '#FF7043' : '#FFAB91',
              border: 'none',
              borderRadius: 25,
              padding: '14px 28px',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: selectedTopic === topic ? 'white' : '#4E342E',
              boxShadow:
                selectedTopic === topic
                  ? '0 6px 15px rgba(255,112,67,0.75)'
                  : '0 3px 8px rgba(255,171,145,0.6)',
              fontSize: '1.15rem',
              transition: 'all 0.3s ease',
              userSelect: 'none',
              minWidth: 120,
              textAlign: 'center',
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Topic Content Box */}
      <div
        style={{
          background: 'linear-gradient(145deg, #FFF3E0 0%, #FFE0B2 100%)',
          borderRadius: 30,
          padding: 35,
          maxWidth: 900,
          margin: '0 auto',
          boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
          minHeight: 470,
        }}
      >
        {selectedTopic === 'Counting' && <CountingSection />}
        {selectedTopic === 'Addition' && <AdditionSection />}
        {selectedTopic === 'Subtraction' && <SubtractionSection />}
        {selectedTopic === 'Multiplication' && <MultiplicationSection />}
        {selectedTopic === 'Division' && <DivisionSection />}
        {selectedTopic === 'Shapes' && <ShapesSection />}
        {selectedTopic === 'Patterns' && <PatternsSection />}
        {selectedTopic === 'Measurement' && <MeasurementSection />}
        {selectedTopic === 'Time' && <TimeSection />}
        {selectedTopic === 'Money' && <MoneySection />}
        {selectedTopic === 'Puzzles' && <PuzzlesSection />}
      </div>
    </div>
  );
}

function CountingSection() {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2
        style={{
          color: '#FF7043',
          marginBottom: 20,
          fontWeight: '700',
          textShadow: '1px 1px 2px #FFAB91',
        }}
      >
        Counting from 1 to 100
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(45px, 1fr))',
          gap: 12,
          maxHeight: 400,
          overflowY: 'auto',
          padding: '0 15px',
          borderRadius: 20,
          backgroundColor: '#FFE8D6',
          boxShadow: 'inset 0 0 10px #FFBC9A',
        }}
      >
        {numbers.map((num) => (
          <div
            key={num}
            style={{
              backgroundColor: '#FFCCBC',
              borderRadius: 12,
              fontWeight: 'bold',
              fontSize: '1.2rem',
              padding: '12px 0',
              color: '#6D4C41',
              boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
              userSelect: 'none',
              transition: 'transform 0.2s ease',
            }}
            title={`Number ${num}`}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- New creative redesigns below ---

function AdditionSection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>🎲 Addition Adventure</h2>
      <p style={sectionTextStyle}>
        Imagine you have <strong>3</strong> apples 🍎 and you get <strong>4</strong> more apples from a friend. How many apples do you have now?
      </p>
      <p style={sectionTextStyle}>
        Let's add them: <strong>3 + 4 = ?</strong> Try to figure out the answer!
      </p>
      <InteractiveAddSub operator="+" />
    </div>
  );
}

function SubtractionSection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>🧮 Subtraction Safari</h2>
      <p style={sectionTextStyle}>
        You had <strong>10</strong> balloons 🎈. Unfortunately, <strong>3</strong> balloons flew away. How many balloons are left?
      </p>
      <p style={sectionTextStyle}>
        Let's subtract: <strong>10 - 3 = ?</strong> Can you find the answer?
      </p>
      <InteractiveAddSub operator="-" />
    </div>
  );
}

function MultiplicationSection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>✨ Multiplication Magic</h2>
      <p style={sectionTextStyle}>
        If you have <strong>4</strong> baskets 🧺, and each basket has <strong>5</strong> oranges 🍊, how many oranges do you have in total?
      </p>
      <p style={sectionTextStyle}>
        Multiply to find out: <strong>4 × 5 = ?</strong> Give it a try!
      </p>
      <InteractiveMultiplyDivide operator="×" />
    </div>
  );
}

function DivisionSection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>🪓 Division Discovery</h2>
      <p style={sectionTextStyle}>
        You have <strong>12</strong> candies 🍬 and want to share them equally among <strong>4</strong> friends. How many candies does each friend get?
      </p>
      <p style={sectionTextStyle}>
        Divide to find out: <strong>12 ÷ 4 = ?</strong> Try your answer!
      </p>
      <InteractiveMultiplyDivide operator="÷" />
    </div>
  );
}

// Interactive component for Addition & Subtraction
function InteractiveAddSub({ operator }) {
  const [num1, setNum1] = useState(randomInt(1, 10));
  const [num2, setNum2] = useState(randomInt(1, 10));
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  // Ensure subtraction never goes negative
  useEffect(() => {
    if (operator === '-' && num1 < num2) {
      setNum1(num2 + randomInt(0, 5));
    }
  }, [num1, num2, operator]);

  const correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;

  function handleCheck() {
    if (parseInt(answer, 10) === correctAnswer) {
      setFeedback('🎉 Fantastic! That’s right!');
    } else {
      setFeedback('❌ Almost! Try again.');
    }
  }

  function handleNew() {
    setNum1(randomInt(1, 15));
    setNum2(randomInt(1, 15));
    setAnswer('');
    setFeedback('');
  }

  return (
    <div>
      <div style={{ fontSize: '2.5rem', margin: '15px 0', color: '#FF7043', fontWeight: '700' }}>
        {num1} {operator} {num2} = ?
      </div>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter your answer"
        style={inputStyle}
      />
      <div style={{ marginTop: 15 }}>
        <button style={primaryBtn} onClick={handleCheck}>
          Check
        </button>
        <button style={{ ...primaryBtn, backgroundColor: '#FFA726', marginLeft: 12 }} onClick={handleNew}>
          New Problem
        </button>
      </div>
      {feedback && <p style={{ marginTop: 20, fontSize: '1.25rem', color: feedback.startsWith('🎉') ? '#388E3C' : '#D32F2F' }}>{feedback}</p>}
    </div>
  );
}

// Interactive component for Multiplication & Division
function InteractiveMultiplyDivide({ operator }) {
  const [num1, setNum1] = useState(randomInt(1, 12));
  const [num2, setNum2] = useState(randomInt(1, 12));
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  // Ensure division is always whole number
  useEffect(() => {
    if (operator === '÷') {
      const product = num1 * num2;
      setNum1(product);
    }
  }, [num1, num2, operator]);

  const correctAnswer = operator === '×' ? num1 * num2 : Math.floor(num1 / num2);

  function handleCheck() {
    if (parseInt(answer, 10) === correctAnswer) {
      setFeedback('🎉 Well done! Correct answer!');
    } else {
      setFeedback('❌ Not quite. Try once more!');
    }
  }

  function handleNew() {
    setNum2(randomInt(1, 12));
    if (operator === '×') {
      setNum1(randomInt(1, 12));
    } else {
      // For division, num1 = num2 * some integer
      const factor = randomInt(1, 12);
      setNum1(factor * num2);
    }
    setAnswer('');
    setFeedback('');
  }

  return (
    <div>
      <div style={{ fontSize: '2.5rem', margin: '15px 0', color: '#FF7043', fontWeight: '700' }}>
        {num1} {operator} {num2} = ?
      </div>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter your answer"
        style={inputStyle}
      />
      <div style={{ marginTop: 15 }}>
        <button style={primaryBtn} onClick={handleCheck}>
          Check
        </button>
        <button style={{ ...primaryBtn, backgroundColor: '#FFA726', marginLeft: 12 }} onClick={handleNew}>
          New Problem
        </button>
      </div>
      {feedback && <p style={{ marginTop: 20, fontSize: '1.25rem', color: feedback.startsWith('🎉') ? '#388E3C' : '#D32F2F' }}>{feedback}</p>}
    </div>
  );
}

function ShapesSection() {
  const shapes = [
    { name: 'Circle', description: 'A round shape with no corners.' },
    { name: 'Square', description: 'Four equal sides and four right angles.' },
    { name: 'Triangle', description: 'A shape with three sides and three angles.' },
    { name: 'Rectangle', description: 'Four sides with opposite sides equal.' },
    { name: 'Star', description: 'A shape with points extending outwards.' },
    { name: 'Heart', description: 'A symbol of love and affection.' },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>🔷 Shapes Around Us</h2>
      <p style={sectionTextStyle}>Can you match these shapes with objects you see every day?</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 28, marginTop: 18 }}>
        {shapes.map(({ name, description }) => (
          <div
            key={name}
            style={{
              background: '#FFCCBC',
              borderRadius: 22,
              padding: 18,
              width: 160,
              boxShadow: '0 6px 15px rgba(0,0,0,0.12)',
              cursor: 'default',
              userSelect: 'none',
              transition: 'transform 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ fontSize: '5rem', marginBottom: 10 }}>{getShapeEmoji(name)}</div>
            <h3 style={{ margin: '8px 0', color: '#6D4C41' }}>{name}</h3>
            <p style={{ fontSize: '1rem', color: '#4E342E', fontStyle: 'italic' }}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PatternsSection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>🔄 Spot the Pattern</h2>
      <p style={sectionTextStyle}>
        Look at this sequence of colors and shapes, and guess what comes next!
      </p>
      <div
        style={{
          fontSize: '3.8rem',
          margin: '30px 0',
          fontWeight: '900',
          color: '#FF7043',
          textShadow: '1px 1px 3px #FFA07A',
          userSelect: 'none',
        }}
      >
        🟢 🔵 🟢 🔵 🟢 __
      </div>
      <p style={{ fontSize: '1.4rem', fontWeight: '600', color: '#6D4C41' }}>The next one is 🔵 (blue circle).</p>
      <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#4E342E', marginTop: 10 }}>
        Patterns help us see the rhythm in the world around us!
      </p>
    </div>
  );
}

function MeasurementSection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>📏 Measurement Made Simple</h2>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.3rem', color: '#6D4C41', lineHeight: 1.6 }}>
        <li>• 1 meter (m) = 100 centimeters (cm)</li>
        <li>• 1 kilogram (kg) = 1000 grams (g)</li>
        <li>• 1 liter (L) = 1000 milliliters (ml)</li>
        <li>• 1 hour = 60 minutes</li>
      </ul>
      <p style={{ marginTop: 25, fontSize: '1.1rem', fontStyle: 'italic', color: '#4E342E' }}>
        Knowing these units helps us measure things correctly in daily life!
      </p>
    </div>
  );
}

function TimeSection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>⏰ Telling Time is Fun</h2>
      <p style={sectionTextStyle}>Clocks have two main hands:</p>
      <ul style={{ listStyle: 'circle inside', fontSize: '1.3rem', color: '#6D4C41', lineHeight: 1.7 }}>
        <li><b>Hour hand</b> — points to the hour.</li>
        <li><b>Minute hand</b> — points to the minutes.</li>
      </ul>
      <p style={{ marginTop: 20, fontWeight: '700', fontSize: '1.3rem', color: '#FF7043' }}>
        When the hour hand points at <b>3</b> and the minute hand at <b>12</b>, it is <b>3 o'clock</b>!
      </p>
    </div>
  );
}

function MoneySection() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>💰 Money Matters</h2>
      <p style={sectionTextStyle}>Let’s learn about some common coins and notes we use every day!</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 50, marginTop: 20, userSelect: 'none' }}>
        <MoneyItem emoji="🪙" label="Coin" />
        <MoneyItem emoji="💵" label="Note" />
        <MoneyItem emoji="👛" label="Wallet" />
      </div>
    </div>
  );
}

function MoneyItem({ emoji, label }) {
  return (
    <div
      style={{
        fontSize: '5.5rem',
        color: '#FF7043',
        cursor: 'default',
        textAlign: 'center',
        width: 110,
        userSelect: 'none',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      title={label}
    >
      {emoji}
      <p style={{ fontSize: '1.3rem', fontWeight: '700', color: '#6D4C41', marginTop: 8 }}>{label}</p>
    </div>
  );
}

function PuzzlesSection() {
  const puzzles = [
    { question: 'What is 5 + 3?', answer: '8' },
    { question: 'What is 10 - 4?', answer: '6' },
    { question: 'What is 7 × 2?', answer: '14' },
    { question: 'What is 20 ÷ 5?', answer: '4' },
  ];

  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    if (input.trim() === puzzles[current].answer) {
      setFeedback('🎉 Correct!');
      setTimeout(() => {
        setCurrent((current + 1) % puzzles.length);
        setInput('');
        setFeedback('');
      }, 1400);
    } else {
      setFeedback('❌ Try again!');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={sectionTitleStyle}>🧩 Math Puzzles</h2>
      <p style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: 30, color: '#FF7043' }}>{puzzles[current].question}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your answer"
        style={inputStyle}
      />
      <br />
      <button style={primaryBtn} onClick={checkAnswer}>
        Check
      </button>
      {feedback && (
        <p
          style={{
            marginTop: 22,
            fontSize: '1.4rem',
            color: feedback.startsWith('🎉') ? '#388E3C' : '#D32F2F',
            fontWeight: '700',
            textShadow: '1px 1px 2px #FFF9E0',
          }}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}

// Helper functions and styles

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getShapeEmoji(name) {
  switch (name) {
    case 'Circle':
      return '⚪️';
    case 'Square':
      return '⬛️';
    case 'Triangle':
      return '🔺';
    case 'Rectangle':
      return '▭';
    case 'Star':
      return '⭐️';
    case 'Heart':
      return '❤️';
    default:
      return '❓';
  }
}

const sectionTitleStyle = {
  color: '#FF7043',
  marginBottom: 20,
  fontWeight: '900',
  textShadow: '1px 1px 3px #FFAB91',
  fontSize: '2rem',
};

const sectionTextStyle = {
  fontSize: '1.3rem',
  marginBottom: 16,
  color: '#6D4C41',
  fontWeight: '600',
};

const inputStyle = {
  fontSize: '1.4rem',
  padding: '12px 18px',
  borderRadius: 30,
  border: '3px solid #FF7043',
  width: 180,
  textAlign: 'center',
  outline: 'none',
  boxShadow: '0 4px 12px rgba(255,112,67,0.4)',
  transition: 'border-color 0.3s ease',
};

const primaryBtn = {
  padding: '14px 34px',
  fontSize: '1.3rem',
  borderRadius: 30,
  border: 'none',
  backgroundColor: '#FF7043',
  color: 'white',
  cursor: 'pointer',
  boxShadow: '0 7px 20px rgba(255,112,67,0.7)',
  fontWeight: '700',
  userSelect: 'none',
  transition: 'background-color 0.3s ease',
};
