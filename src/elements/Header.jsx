import React, { useEffect, useState } from "react";

function Header({
  difficulty,
  setDifficulty,
  newGame,
  setNewGame,
  newCards,
  setNewCards,
}) {
  const [numberOfCards, setNumberOfCards] = useState(0);

  useEffect(() => {
    setNumberOfCards(60);
    /*const getNumber = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/ability`);
      const data = await res.json();
      //setNumberOfCards(data.count)
    };
    getNumber();*/
  }, []);

  return (
    <div className="container">
      <h1>Memory Game</h1>
      <div>
        {!newGame ? (
          <>
            <button onClick={() => setDifficulty(8)}>Easy</button>
            <button onClick={() => setDifficulty(12)}>Medium</button>
            <button onClick={() => setDifficulty(16)}>Hard</button>
            <button onClick={() => setNewCards(0)}>Change Cards</button>
            <button onClick={() => setNewGame(true)}>Start Game</button>
          
          </>
        ) : (
          <>
            <button
              onClick={() => {
                const prevDifficulty = difficulty;
                setDifficulty(null);
                setTimeout(() => {
                  setDifficulty(prevDifficulty);
                }, 500);
              }}>
              Start Over
            </button>
            <button onClick={() => setNewGame(false)}>Main menu</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
