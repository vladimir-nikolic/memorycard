import React from "react";
import mySvg from "../assets/react.svg";

function Card({ name, handleClick, status, id }) {
  return (
    <div id={id} name={name} onClick={() => handleClick(id)}>
      {status !== "active" ? (
        <img src={mySvg} style={{ width: "150px", height: "150px" }} />
      ) : (
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          style={{ width: "150px", height: "150px" }}
        />
      )}
    </div>
  );
}

export default Card;
