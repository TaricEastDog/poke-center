import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";
import PokeProvider from "./context/pokeapi";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <PokeProvider>
        <GlobalStyles />
        <App />
      </PokeProvider>
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
