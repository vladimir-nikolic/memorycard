import React, { useEffect, useState } from "react";
import Card from "./Card";

function NewGame({ deck, setDeck, randomizeDeck }) {
  useEffect(() => {
    const arr = [...deck];
    const newDeck = randomizeDeck(arr);
    const resetDeck = newDeck.map((el) => {
      return {
        ...el,
        status: "",
      };
    });

    setDeck(resetDeck);
  }, []);

  const [selected, setSelected] = useState("");
  const [isSolved, setIsSolved] = useState(false);

  function compareSelected(id) {
    if (deck[id].name === deck[selected].name) {
      const newDeck = [...deck];
      newDeck[id].status = "active";
      newDeck[selected].status = "active";
      console.log(newDeck);
      setDeck(newDeck);
      setSelected("");
    } else {
      const newDeck = [...deck];
      const disabledDeck = newDeck.map((el) => {
        if (el.status !== "active") {
          return {
            ...el,
            status: "disabled",
          };
        } else {
          return el;
        }
      });
      disabledDeck[id].status = "active";
      disabledDeck[selected].status = "active";
      setDeck(disabledDeck);
      setTimeout(() => {
        const newDeck = [...deck];
        newDeck[id].status = "";
        newDeck[selected].status = "";
        setDeck(newDeck);
        setSelected("");
      }, 500);
    }
  }

  function handleClick(id) {
    if (deck[id].status !== "active") {
      if (selected === "") {
        const newDeck = [...deck];
        newDeck[id].status = "active";
        setDeck(newDeck);
        setSelected(id);
      } else {
        compareSelected(id);
      }
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
}

export default NewGame;
