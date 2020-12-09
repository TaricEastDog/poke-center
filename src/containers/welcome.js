import React from "react";
import { Menu } from "../components";

export function WelcomeContainer() {
  return (
    <>
      <Menu>
        <Menu.Title>What would you like to do?</Menu.Title>
        <Menu.ButtonLink to="/browse">Browse Pokemons</Menu.ButtonLink>
        <Menu.ButtonLink to="/collection">
          Manage you collection
        </Menu.ButtonLink>
        <Menu.ButtonLink to="/welcome">Minigame (soon...)</Menu.ButtonLink>
      </Menu>
    </>
  );
}
