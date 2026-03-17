import React, { useState } from 'react';

const PuzzleGames = () => {
  // Letters and images (drag & drop) - unchanged
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const images = [
    { id: 'A', src: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg', alt: 'Apple' },
    { id: 'B', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/European_honey_bee_%28Apis_mellifera_mellifera%29.jpg', alt: 'Bee' },
    { id: 'C', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/81_INF_DIV_SSI.jpg', alt: 'Cat' },
    { id: 'D', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg', alt: 'Dog' },
    { id: 'E', src: 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg', alt: 'Elephant' },
    { id: 'F', src: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Paracheirodon_innesi_%28Tetra_Glow_light%29.jpg', alt: 'Fish' },
  ];

  // Drag & Drop state and handlers - unchanged
  const [dragged, setDragged] = useState(null);
  const [matches, setMatches] = useState({});

  const onDragStart = (e, letter) => {
    setDragged(letter);
  };

  const onDrop = (e, id) => {
    e.preventDefault();
    if (dragged === id) {
      setMatches(prev => ({ ...prev, [id]: true }));
    }
    setDragged(null);
  };

  const onDragOver = (e) => e.preventDefault();

  // For Complete the Word - interactive inputs
  // Each word has a pattern string with underscores representing blanks
  // and the correct word for validation
  const words = [
    { 
      pattern: ['C', '_', 'T'], 
      answer: ['A'] 
    },
    { 
      pattern: ['D', '_', 'G'], 
      answer: ['O'] 
    },
    { 
      pattern: ['E', '_', 'E', '_', '_', 'A', '_', 'T'], 
      answer: ['L', 'P', 'H', 'N'] 
    },
    { 
      pattern: ['A', '_', 'P', 'L', 'E'], 
      answer: ['P'] 
    },
    { 
      pattern: ['B', '_', 'E'], 
      answer: ['E'] 
    },
    { 
      pattern: ['F', '_', 'S', 'H'], 
      answer: ['I'] 
    },
  ];

  // Store user inputs for blanks for each word (array of chars)
  const [inputs, setInputs] = useState(words.map(w => Array(w.answer.length).fill('')));

  // Store results of validation
  const [completedWords, setCompletedWords] = useState(Array(words.length).fill(false));

  const handleInputChange = (wordIdx, inputIdx, value) => {
    if (value.length > 1) return; // only 1 char per box
    const newInputs = [...inputs];
    newInputs[wordIdx][inputIdx] = value.toUpperCase();
    setInputs(newInputs);
  };

  const checkWord = (wordIdx) => {
    const userInput = inputs[wordIdx];
    const correctAnswer = words[wordIdx].answer;
    const isCorrect = userInput.length === correctAnswer.length &&
      userInput.every((char, i) => char === correctAnswer[i]);
    
    const newCompleted = [...completedWords];
    newCompleted[wordIdx] = isCorrect;
    setCompletedWords(newCompleted);
  };

  // Mini Quiz
  const [quizAnswer, setQuizAnswer] = useState(null); // 'correct' or 'wrong'
  const correctQuizChoice = 'Dog';

  const handleQuizClick = (choice) => {
    if (choice === correctQuizChoice) {
      setQuizAnswer('correct');
    } else {
      setQuizAnswer('wrong');
    }
  };

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Comic Sans MS, cursive',
      textAlign: 'center',
      background: '#fff9c4',
      minHeight: '100vh'
    }}>
      <h1>🧩 Puzzle Games for Kids</h1>

      {/* Match letters to images */}
      <section style={{
        margin: '20px auto',
        maxWidth: '700px',
        background: '#fff',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
      }}>
        <h2>Match Letters to Images (Drag & Drop)</h2>
        <p>Drag the letter and drop it onto the matching image!</p>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', flexWrap: 'wrap' }}>
          {/* Letters to drag */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {letters.map(letter => (
              <div
                key={letter}
                draggable={!matches[letter]}
                onDragStart={(e) => onDragStart(e, letter)}
                style={{
                  width: 50,
                  height: 50,
                  lineHeight: '50px',
                  border: '2px solid #333',
                  borderRadius: '8px',
                  cursor: matches[letter] ? 'default' : 'grab',
                  backgroundColor: matches[letter] ? '#a5d6a7' : 'white',
                  userSelect: 'none',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Images to drop onto */}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {images.map(({ id, src, alt }) => (
              <div
                key={id}
                onDrop={(e) => onDrop(e, id)}
                onDragOver={onDragOver}
                style={{
                  width: 100,
                  height: 100,
                  border: '2px dashed #777',
                  borderRadius: '12px',
                  backgroundColor: matches[id] ? '#a5d6a7' : 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  margin: '5px'
                }}
                title={alt}
              >
                <img src={src} alt={alt} style={{ maxWidth: '90%', maxHeight: '90%', pointerEvents: 'none' }} />
              </div>
            ))}
          </div>
        </div>
        {Object.keys(matches).length === letters.length && (
          <p style={{ color: 'green', marginTop: '15px', fontWeight: 'bold' }}>🎉 Great job! All matches correct!</p>
        )}
      </section>

      {/* Complete the Word - interactive */}
      <section style={{
        margin: '20px auto',
        maxWidth: '700px',
        background: '#fff',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
      }}>
        <h2>Complete the Word</h2>
        <p>Fill in the missing letters:</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
          {words.map(({ pattern, answer }, wordIdx) => {
            // pattern example: ['C', '_', 'T']
            // we will render pattern with inputs for '_'
            let answerInputIndex = 0;

            return (
              <div key={wordIdx} style={{ fontSize: '1.5rem', userSelect: 'none' }}>
                {pattern.map((char, i) => {
                  if (char === '_') {
                    const idx = answerInputIndex;
                    answerInputIndex++;
                    return (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        value={inputs[wordIdx][idx]}
                        onChange={(e) => handleInputChange(wordIdx, idx, e.target.value)}
                        style={{
                          width: 30,
                          fontSize: '1.5rem',
                          textTransform: 'uppercase',
                          textAlign: 'center',
                          border: '2px solid #333',
                          borderRadius: '4px',
                          marginRight: '5px'
                        }}
                      />
                    );
                  } else {
                    return (
                      <span key={i} style={{ marginRight: '5px' }}>{char}</span>
                    );
                  }
                })}

                <button
                  onClick={() => checkWord(wordIdx)}
                  disabled={completedWords[wordIdx]}
                  style={{
                    marginLeft: '10px',
                    padding: '5px 10px',
                    cursor: completedWords[wordIdx] ? 'default' : 'pointer',
                    backgroundColor: completedWords[wordIdx] ? '#a5d6a7' : '#4caf50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    userSelect: 'none'
                  }}
                >
                  {completedWords[wordIdx] ? 'Correct!' : 'Check'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mini Quiz with working buttons */}
      <section style={{
        margin: '20px auto',
        maxWidth: '700px',
        background: '#fff',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
      }}>
        <h2>Mini Quiz</h2>
        <p>What animal is this?</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
          alt="Dog"
          style={{ width: '150px', borderRadius: '12px', margin: '10px 0' }}
        />
        <div>
          {['Cat', 'Dog', 'Elephant'].map(choice => (
            <button
              key={choice}
              onClick={() => handleQuizClick(choice)}
              style={{
                marginRight: 10,
                padding: '8px 15px',
                backgroundColor: quizAnswer && choice === correctQuizChoice
                  ? '#a5d6a7'
                  : '#e0e0e0',
                border: '1px solid #999',
                cursor: 'pointer',
                userSelect: 'none'
              }}
            >
              {choice}
            </button>
          ))}
        </div>
        {quizAnswer === 'correct' && (
          <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>🎉 Correct! Well done!</p>
        )}
        {quizAnswer === 'wrong' && (
          <p style={{ color: 'red', fontWeight: 'bold', marginTop: '10px' }}>❌ Oops! Try again.</p>
        )}
      </section>
    </div>
  );
};

export default PuzzleGames;
