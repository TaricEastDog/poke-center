import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { Menu } from "../components";
import { useAuthListener } from "../hooks";

export function WelcomeContainer() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();

  return (
    <>
      <p>Hello there {user.displayName}!</p>
      <button
        onClick={() =>
          firebase.auth().signOut().then(console.log("signed out"))
        }
      >
        Sign Out
      </button>
      <Menu>
        <Menu.Title>What would you like to do?</Menu.Title>
        <Menu.ButtonLink to="/welcome">Browse Pokemons</Menu.ButtonLink>
        <Menu.ButtonLink to="/welcome">Manage you collection</Menu.ButtonLink>
        <Menu.ButtonLink to="/welcome" disbled>
          Minigame (soon...)
        </Menu.ButtonLink>
      </Menu>
    </>
  );
}
