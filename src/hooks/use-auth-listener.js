import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        localStorage.setItem("user", JSON.stringify(userAuth));
        setUser(userAuth);
        console.log("useauthlistener - user is logged in :D");
      } else {
        localStorage.removeItem("user");
        setUser(null);
        console.log("useauthlistener - user is not logged in :c");
      }
    });
    return () => listener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
}
