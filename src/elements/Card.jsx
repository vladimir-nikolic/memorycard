import React from "react";
import mySvg from "../assets/react.svg";

function Card({name,handleClick,status}) {
  

  return (
    <div
      name={name}
      onClick={() => {
        handleClick(name);
      }}>
      {status !== 'active' || status !== 'matched' ? (
        <img
          src={mySvg}
          style={{ width: "150px", height: "150px" }}
        />
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
