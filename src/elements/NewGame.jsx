import { React, useState } from "react";
import Card from "./Card";

export const NewGame = ({ deck, setDeck, setNewGame}) => {
 

  //click logika

  const [selected, setSelected] = useState("");

  function compareSelected(id) {
    if (deck[id].name === deck[selected].name) {
      const newDeck = [...deck];
      newDeck[id].status = "active";
      newDeck[selected].status = "active";
      setDeck(newDeck);
      setSelected("");
    } else {
      const newDeck = [...deck];
      newDeck[id].status = "active";
      newDeck[selected].status = "active";
      setDeck(newDeck);
      setTimeout(() => {
        const newDeck = [...deck];
        newDeck[id].status = "";
        newDeck[selected].status = "";
        setDeck(newDeck);
        setSelected("");
      }, 1000);
    }
  }

  function handleClick(id) {
    if (selected === "") {
      const newDeck = [...deck];
      newDeck[id].status = "active";
      setDeck(newDeck);
      setSelected(id);
    } else {
      compareSelected(id);
    }
  }

  return (
    <div className="parent">
      {deck.map((elem, index) => {
        return (
          <Card
            key={index}
            id={index}
            name={elem.name}
            status={elem.status}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};
