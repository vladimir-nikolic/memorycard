import React from "react";
import mySvg from "../assets/react.svg";

function Card({
  id,
  name,
  selected,
  isMatched,
  handleClick,
  activeStyle,
}) {
  return (
    <div
      activeStyle={activeStyle}
      name={name}
      id={id}
      onClick={() => {
        handleClick({ name, selected, id });
      }}>
      {selected ? (
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          style={{ width: "150px", height: "150px" }}
        />
      ) : (
        <img src={mySvg} style={{ width: "150px", height: "150px" }} />
      )}
    </div>
  );
}

export default Card;
