import React from "react";
import { Header } from "../components";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src="/images/logo.png" to="/" />
        <Header.Group>
          <Header.SignInButton src="/images/signin.png" to="/signin" />
          <Header.SignUpButton src="/images/signup.png" to="/signup" />
        </Header.Group>
      </Header.Frame>
    </Header>
  );
}
