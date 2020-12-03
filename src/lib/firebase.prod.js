import Firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN0fW3Jqh28rH2FirmzEU3m9O6ZgJzh78",
  authDomain: "poke-center-d9d04.firebaseapp.com",
  projectId: "poke-center-d9d04",
  storageBucket: "poke-center-d9d04.appspot.com",
  messagingSenderId: "795959674496",
  appId: "1:795959674496:web:41383f5b8eb25f73c1c865",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
