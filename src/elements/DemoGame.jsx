import React, { useEffect, useRef } from "react";
import Card from './Card'
import mySvg from "../assets/react.svg";

export const DemoGame = ({ deck, setDeck }) => {
 
  


  return (
    <div className="parent">
      {deck.map((elem, index) => {
        return (
          <div
            key={index}
            id={index}
            style={
              elem.status !== ""
                ? elem.status === "disabled"
                  ? { pointerEvents: "none" }
                  : { pointerEvents: "auto" }
                : { pointerEvents: "auto" }
            }
            name={elem.name}
            onClick={() => handleClick(id)}>
            {elem.status !== "active" ? (
              <img src={mySvg} style={{ width: "150px", height: "150px" }} />
            ) : (
              <img
                src={`https://img.pokemondb.net/artwork/large/${elem.name}.jpg`}
                style={{ width: "150px", height: "150px" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
