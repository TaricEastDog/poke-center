import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { useAuthListener } from "../hooks";
import { Navbar } from "../components";

export function NavbarContainer() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useAuthListener();

  return (
    <Navbar>
      <Navbar.Profile>
        <Navbar.Icon src="/images/avatars/small-avatars/1.png" />
        <Navbar.Dropdown>
          <Navbar.Link to="/welcome">Collection</Navbar.Link>
          <Navbar.Link to="/welcome">Settings</Navbar.Link>
          <Navbar.Link to="/welcome">Feedback</Navbar.Link>
          <Navbar.SignoutButton onClick={() => firebase.auth().signOut()}>
            Sign Out
          </Navbar.SignoutButton>
        </Navbar.Dropdown>
      </Navbar.Profile>
    </Navbar>
  );
}
