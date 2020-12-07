import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { Header } from "../components";
import { useAuthListener } from "../hooks";

export function WelcomeContainer() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();

  return (
    <>
      <Header>
        <p>Hello there {user.displayName}!</p>
        <button
          onClick={() =>
            firebase.auth().signOut().then(console.log("signed out"))
          }
        >
          SignOut
        </button>
      </Header>
    </>
  );
}
