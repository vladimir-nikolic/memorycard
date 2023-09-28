import axios from "axios";
import React, { useEffect, useState } from "react";
import Game from "./Game";

function Data({ offset, diff, gameStatus ,setGameStatus}) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const getData = async () => {
    try {
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=60`
      );

      setData(resp.data.results);
      localStorage.setItem("data", JSON.stringify(resp.data.results));
      
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length === 0 || diff === 0) {
    return <section>Da bi pokrenuo igru seletectuj težinu </section>;
  }
  return (
    <Game
      offset={offset}
      diff={diff}
      data={data}
      gameStatus={gameStatus}
      setGameStatus={setGameStatus}
    />
  );
}

export default Data;
