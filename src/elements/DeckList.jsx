import React, { useState } from "react";
import Card from "./Card";

function DeckList({ deck, setDeck }) {

  const activeStyle = {
    backgroundColor: 'red'
    
  }
  
  const handleClick = ({ name, selected, id }) => {

    const deckUpdate = [...deck]
    const updatedDeck = deckUpdate.map(card => (card.name === name && card.id === id) ?  {...card, selected:true} : card )
    setDeck(updatedDeck)
  };
  return (
    <div className="parent" >
      {deck.map((card, index) => {
        const { id, name, selected, isMatched } = card;
        return (
          <Card
            activeStyle={activeStyle}
            key={index}
            id={id}
            name={name}
            selected={selected}
            isMatched={isMatched}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

export default DeckList;
