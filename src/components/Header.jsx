import React, { useState } from "react";

function Header({
  offset,
  setOffset,
  diff,
  setDiff,
  gameStatus,
  setGameStatus,
}) {
  const [disable, setDisable] = useState(true);

  const diffButtons = [
    { name: "easy", value: 8 },
    { name: "medium", value: 10 },
    { name: "hard", value: 12 },
  ];

  function changeDeck() {
    setOffset((pre) => {
      return pre + diff > 60 ? pre + diff - 60 : pre + diff;
    });
  }

  function changeDiff(num) {
    setDiff(parseInt(num));
    setDisable(false);
  }

  return (
    <header className="header-container">
      <div>
        <h1>Memory Game</h1>
      </div>
      {
        !gameStatus && (
          <section className="header-menu">
            {diffButtons.map((btn) => (
              <button
                key={btn.name}
                name={btn.name}
                value={btn.value}
                className="btn"
                onClick={(e) => changeDiff(e.target.value)}>
                {btn.name.toUpperCase()}
              </button>
            ))}
          </section>
        )
      }
      <section>
        {gameStatus === false ? (
          <>
            <button disabled={disable} className="btn" onClick={changeDeck}>
              change cards
            </button>
            <button
              disabled={disable}
              className="btn"
              onClick={() => setGameStatus(true)}>
              Start Game
            </button>
          </>
        ) : (
          <>
            <button className="btn"> New Game</button>
            <button onClick={()=>setGameStatus(false)}className="btn">Quit game</button>
          </>
        )}
      </section>
    </header>
  );
}

export default Header;
