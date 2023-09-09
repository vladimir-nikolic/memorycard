import "./App.css";
import { useState, useEffect } from "react";
import Header from "./elements/Header";
import DeckList from "./elements/DeckList";

function App() {
  const [deck, setDeck] = useState(
    JSON.parse(localStorage.getItem("deck")) || []
  );
  //const [selectedCard, setSelectedCard] = useState(null)

  function randomizeDeck(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function setElementsOfDeck(array) {
    let deckArr = [];
    for (let index = 0; index < array.length; index++) {
      let elem = {
        id: 'id',
        name: "name",
        selected: false,
        isMatched: false,
      };
      elem.id = index;
      elem.name = array[index].name;
      //elem.url = array[index].url;
      deckArr.push(elem);
    }

    for (let index = array.length; index < array.length * 2; index++) {
      let elem = {
        id: "id",
        name: "name",
        selected: false,
        isMatched: false,
      };
      elem.id = index;
      elem.name = array[index - array.length].name;
      //elem.url = array[index - array.length].url;
      deckArr.push(elem);
    }
    return randomizeDeck(deckArr);
  }

  useEffect(() => {
    if (!deck.length > 0) {
      const getData = async () => {
        try {
          const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=8");
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
      <Header />
      <DeckList deck={deck} setDeck={setDeck} />
    </>
  );
}

export default App;
