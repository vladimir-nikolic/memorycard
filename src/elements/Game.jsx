import {React, useEffect, useState} from 'react'
import Card from './Card';

export const Game = ({ difficulty, setDifficulty }) => {

  const numberOfCard = difficulty/2;

  const [deck, setDeck] = useState(
    JSON.parse(localStorage.getItem("deck")) || []
  );

  function randomizeDeck(array) {
    let length = array.length;
    for(let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      const temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }

    return array;
  }

  function setElementsOfDeck(array) {
    const deck=[]
    const firstDeckArr = array.map((elem) => elem.name);
    const deckArr = randomizeDeck([...firstDeckArr].concat(firstDeckArr));

    for (let i = 0; i < deckArr.length; i++) {
      let elem = {
        name: `${deckArr[i]}`,
        status: '',
      };
    deck.push(elem);
    }
    return deck
  }


  useEffect(() => {
    if (!deck.length > 0){  // da ne skida!!!
      const getData = async () => {
        try {
          const resp = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${numberOfCard}`
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
    
  },[])  
  

  function handleClick(name){
    alert(name)
  }


  if(deck.length === 0){
    return <h1>...LOADING</h1>
  }
  return (
    <div className="parent">
      {deck.map(( elem, index) => {
        return (
          <Card
            key={index}
            name={elem.name}
            status={elem.status}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};
