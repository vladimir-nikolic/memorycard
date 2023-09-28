import React, { useEffect } from 'react'
import mySvg from '../assets/react.svg'

function DemoGame({ deck, setDeck }) {

  useEffect(() => {
    const arr = [...deck];
    const resetDeck = arr.map((el) => {
      return {
        ...el,
        status: "active",
      };
    });
    setDeck(resetDeck);
  }, []);


  return (
    <div className="parent">
      {deck.map((elem,index) => {
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
            name={elem.name}>
            {elem.status !== "active" ? (
              <img src={mySvg} style={{ width: "130px", height: "130px" }} />
            ) : (
              <img
                src={`https://img.pokemondb.net/artwork/large/${elem.name}.jpg`}
                style={{ width: "130px", height: "130px" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DemoGame