import React from "react";
import mySvg from "../assets/react.svg";

function Card({name}) {


  return (
    <div
      name={name}
      onClick={() => {
        handleClick({ name, selected, id });
      }}>
      
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          style={{ width: "150px", height: "150px" }}
        />
    </div>
  );
}

export default Card;
