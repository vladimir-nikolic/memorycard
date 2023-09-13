import "./App.css";
import { useState, useEffect } from "react";
import Header from "./elements/Header";
import Game from "./elements/Game";

function App() {
  const [difficulty, setDifficulty] = useState(8);
  const [newGame, setNewGame]= useState(false);
  const [newCards, setNewCards] = useState(0);
  
  //console.log(difficulty)
  return (
    <>
      <Header
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        newGame={newGame}
        setNewGame={setNewGame}
        newCards={newCards}
        setNewCards={setNewCards}
      />
      <Game
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        newGame={newGame}
        setNewGame={setNewGame}
        newCards={newCards}
        setNewCards={setNewCards}
      />
    </>
  );
}

export default App;
