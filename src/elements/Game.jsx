import { React, useState, useEffect } from "react";
import { DemoGame } from "./DemoGame";
import { NewGame } from "./NewGame";
function Game({
  difficulty,
  setDifficulty,
  newGame,
  setNewGame,
  newCards,
  setNewCards,
}) {
  const [deck, setDeck] = useState(
    JSON.parse(localStorage.getItem("deck")) || []
  );

  const numberOfCard = difficulty;
  const changeCards = newCards;

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
        status: "",
      };
      deckEl.push(elem);
    }
    //console.log(deckEl)
    return deckEl;
  }

  useEffect(() => {
    if (!deck.length > 0) {
      // da ne skida!!!
      const getData = async () => {
        try {
          const resp = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${numberOfCard}&offset=${changeCards}`
          );
          const data = await resp.json();
          const elements = setElementsOfDeck(data.results);
          setDeck(elements);
          localStorage.setItem("deck", JSON.stringify(elements));
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  }, []);

  return (
    <>
      {newGame ? (
        <NewGame deck={deck} setDeck={setDeck} setNewGame={setNewGame}/>
      ) : (
        <DemoGame deck={deck} setDeck={setDeck} />
      )}
    </>
  );
}

export default Game;
