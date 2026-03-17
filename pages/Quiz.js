import React from "react";

function Quiz() {
  const handleQuizComplete = () => {
    // 1. Read current points from localStorage
    const currentPoints = parseInt(localStorage.getItem("points")) || 0;

    // 2. Add points for completing the quiz
    const newPoints = currentPoints + 5; // award 5 points

    // 3. Save updated points back to localStorage
    localStorage.setItem("points", newPoints);

    // 4. Give feedback to the child
    alert("Quiz completed! You earned 5 points.");
  };

  return (
    <div>
      <h2>Quiz Page</h2>
      {/* When child finishes quiz, call handleQuizComplete */}
      <button onClick={handleQuizComplete}>Finish Quiz</button>
    </div>
  );
}

export default Quiz;