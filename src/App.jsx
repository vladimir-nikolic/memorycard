import "./App.css";
import { useState, useEffect } from "react";
import Header from "./elements/Header";

import { Game } from "./elements/Game";

function App() {
  const [difficulty, setDifficulty] = useState(null)
  
  //console.log(difficulty)
  return (
    <>
      <Header difficulty={difficulty} setDifficulty={setDifficulty} />
      {difficulty ? (
        <Game difficulty={difficulty} setDifficulty={setDifficulty} />
      ) : (
        <h1>Choose a difficulty to begin!</h1>
      )}
    </>
  );
}

export default App;
