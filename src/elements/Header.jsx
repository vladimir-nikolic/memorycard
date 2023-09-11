import React from 'react'

function Header({difficulty, setDifficulty}) {
  return (
    <div className="container">
      <h1>Memory Game</h1>
      <div>
        {difficulty === null ? (
          <>
            <button onClick={() => setDifficulty(16)}>Easy</button>
            <button onClick={() => setDifficulty(24)}>Medium</button>
            <button onClick={() => setDifficulty(32)}>Hard</button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                const prevDifficulty = difficulty;
                setTimeout(() => {
                  setDifficulty(prevDifficulty);
                }, 5000);
              }}>
              Start Over
            </button>
            <button onClick={() => setDifficulty(null)}>Main Menu</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header