import React from "react";
import mySvg from "../assets/react.svg";

function Card({ name, handleClick, status, id }) {
  return (
    <div
      id={id}
      style={
        status !== ""
          ? status === "disabled"
            ? { pointerEvents: "none" }
            : { pointerEvents: "auto" }
          : { pointerEvents: "auto" }
      }
      name={name}
      onClick={() => handleClick(id)}>
      {status !== "active" ? (
        <img src={mySvg} style={{ width: "120px", height: "120px" }} />
      ) : (
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          style={{ width: "120px", height: "120px" }}
        />
      )}
    </div>
  );
}

export default Card;
