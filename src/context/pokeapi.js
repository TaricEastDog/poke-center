import React, { createContext, useState } from "react";

export const PokeContext = createContext({
  pokemons: [],
});

export default function PokeProvider({ children }) {
  const [pokeList, setPokeList] = useState([
    {
      name: "bulbasaur",
      id: 1,
      type: "grass",
    },
    {
      name: "ivysaur",
      id: 1,
      type: "grass",
    },
  ]);

  return (
    <PokeContext.Provider value={{ pokemons: pokeList }}>
      {children}
    </PokeContext.Provider>
  );
}
