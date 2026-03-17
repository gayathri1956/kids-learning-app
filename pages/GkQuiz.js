import React, { useState } from "react";

const gkQuestions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    options: ["Jawaharlal Nehru", "B. R. Ambedkar", "Mahatma Gandhi", "Subhas Chandra Bose"],
    answer: "Mahatma Gandhi",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What do we call a baby frog?",
    options: ["Cub", "Tadpole", "Chick", "Calf"],
    answer: "Tadpole",
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
];

const GkQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === gkQuestions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current + 1 < gkQuestions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Comic Sans MS, cursive", background: "#e8f5e9", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>🧠 General Knowledge Quiz</h1>

      {!showResult ? (
        <div style={{ maxWidth: 600, margin: "0 auto", background: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h2>Question {current + 1} of {gkQuestions.length}</h2>
          <p style={{ fontSize: "1.2rem", marginBottom: 15 }}>{gkQuestions[current].question}</p>

          {gkQuestions[current].options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                display: "block",
                width: "100%",
                padding: 10,
                marginBottom: 10,
                backgroundColor: selected === option ? "#c8e6c9" : "#f5f5f5",
                border: "1px solid #ccc",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={selected === null}
            style={{
              marginTop: 10,
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            {current + 1 === gkQuestions.length ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <h2>🎉 Quiz Completed!</h2>
          <p style={{ fontSize: "1.2rem" }}>Your Score: {score} / {gkQuestions.length}</p>
          <button
            onClick={resetQuiz}
            style={{
              marginTop: 20,
              padding: "10px 20px",
              backgroundColor: "#2196f3",
              color: "white",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GkQuiz;
