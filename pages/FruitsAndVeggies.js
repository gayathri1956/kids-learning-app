import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Apple', type: 'Fruit', img: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
  { id: 2, name: 'Banana', type: 'Fruit', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg' },
  { id: 3, name: 'Carrot', type: 'Vegetable', img: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Carrot-Whole.jpg' },
  { id: 4, name: 'Tomato', type: 'Vegetable', img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg' },
  { id: 5, name: 'Strawberry', type: 'Fruit', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg' },
  { id: 6, name: 'Broccoli', type: 'Vegetable', img: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg' },
];

const FruitsAndVeggies = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      question: 'Is Apple a fruit or vegetable?',
      options: ['Fruit', 'Vegetable'],
      answer: 'Fruit',
    },
    {
      question: 'Is Carrot a fruit or vegetable?',
      options: ['Fruit', 'Vegetable'],
      answer: 'Vegetable',
    },
    {
      question: 'Is Broccoli a fruit or vegetable?',
      options: ['Fruit', 'Vegetable'],
      answer: 'Vegetable',
    },
  ];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (selectedAnswer === quizQuestions[quizStep].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);

    if (quizStep + 1 < quizQuestions.length) {
      setQuizStep(quizStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuizStep(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div style={{ fontFamily: 'Comic Sans MS, cursive', backgroundColor: '#fffbe6', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>🍎 Fruits & Vegetables</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {items.map(({ id, name, img }) => (
          <div
            key={id}
            style={{
              width: 140,
              textAlign: 'center',
              backgroundColor: '#ffffff',
              borderRadius: 12,
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              padding: '10px',
              cursor: 'default',
            }}
          >
            <img src={img} alt={name} style={{ width: '100%', height: 100, borderRadius: 10, objectFit: 'cover' }} />
            <h4 style={{ marginTop: '10px' }}>{name}</h4>
          </div>
        ))}
      </div>

      {/* Quiz Section */}
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, backgroundColor: '#fff3e0', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Quiz Time! 📝</h3>
        {!showResult ? (
          <>
            <p style={{ fontSize: 18, fontWeight: 'bold' }}>{quizQuestions[quizStep].question}</p>
            {quizQuestions[quizStep].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  backgroundColor: selectedAnswer === option ? '#ffd54f' : '#ffe0b2',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: selectedAnswer === option ? 'bold' : 'normal',
                  transition: 'background-color 0.3s',
                }}
              >
                {option}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              style={{
                marginTop: '10px',
                width: '100%',
                padding: '10px',
                backgroundColor: selectedAnswer ? '#fb8c00' : '#ffcc80',
                border: 'none',
                borderRadius: '8px',
                cursor: selectedAnswer ? 'pointer' : 'not-allowed',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {quizStep + 1 === quizQuestions.length ? 'Finish' : 'Next'}
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h3>🎉 You scored {score} out of {quizQuestions.length}!</h3>
            <button
              onClick={resetQuiz}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#f57c00',
                border: 'none',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FruitsAndVeggies;
