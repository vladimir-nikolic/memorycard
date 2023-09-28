import React, { useEffect, useState } from "react";
import mySvg from "../assets/react.svg";
import NewGame from "./NewGame";
import DemoGame from "./DemoGame";

function Game({ offset, diff, data, gameStatus, setGameStatus }) {
  const [deck, setDeck] = useState(
    JSON.parse(localStorage.getItem("game")) || []
  );

  useEffect(() => {
    let newDeck = [];
    if (diff + offset > 60) {
      newDeck = data
        .slice(offset, diff + offset)
        .concat(data.slice(0, offset + diff - 60));
    } else {
      newDeck = data.slice(offset, diff + offset);
    }
    setDeck(setElementsOfDeck(newDeck));
  }, [diff,offset]);

  function randomizeDeck(array) {
    let length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }

    return array;
  }

  function setElementsOfDeck(array) {
    const deckEl = [];
    const firstDeckArr = array.map((elem) => elem.name);
    const deckArr = randomizeDeck([...firstDeckArr].concat(firstDeckArr));

    for (let i = 0; i < deckArr.length; i++) {
      let elem = {
        name: `${deckArr[i]}`,
        status: "active",
      };
      deckEl.push(elem);
    }
    return deckEl;
  }
  if (gameStatus === true) {
    return <NewGame deck={deck} setDeck={setDeck} randomizeDeck={randomizeDeck} />;
  }
  return <DemoGame deck={deck} setDeck={setDeck} />;
}

export default Game;
