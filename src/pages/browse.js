import React, { useContext } from "react";
import { PokeContext } from "../context/pokeapi";

export default function Browser() {
  const { pokemons } = useContext(PokeContext);
  console.log(pokemons);
  return (
    <>
      <h1>hello from poke browser</h1>
      {pokemons.map((pokemon) => (
        <p>{pokemon.name}</p>
      ))}
    </>
  );
}
