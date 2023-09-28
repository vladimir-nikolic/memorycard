import './App.css'
import Header from './components/Header'
import Data from './components/Data'
import { useState } from 'react';

function App() {

  const [diff, setDiff] = useState(0)
  const [offset, setOffset] = useState(0)
  const [gameStatus, setGameStatus] = useState(false)

  return (
    <>
      <Header
        offset={offset}
        setOffset={setOffset}
        diff={diff}
        setDiff={setDiff}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      <Data
        offset={offset}
        setOffset={setOffset}
        diff={diff}
        setDiff={setDiff}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
    </>
  );
}

export default App
