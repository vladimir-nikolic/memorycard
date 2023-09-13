import React from "react";
import Card from './Card'

export const DemoGame = ({ deck, setDeck }) => {
  console.log(deck);
  return (
    <div className="parent">
      {deck.map((elem, index) => {
        return (
          <Card
            key={index}
            id={index}
            name={elem.name}
            status={elem.status}
          />
        );
      })}
    </div>
  );
};
