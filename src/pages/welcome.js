import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function Welcome() {
  const { firebase } = useContext(FirebaseContext);

  return (
    <div>
      <p>hello from welcome page!</p>
      <button
        onClick={() =>
          firebase.auth().signOut().then(console.log("signed out"))
        }
      >
        SignOut
      </button>
    </div>
  );
}
