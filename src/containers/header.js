import React from "react";
import { Header } from "../components";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src="/images/logo.png" to="/" />
        <Header.SignInButton src="/images/signin.png" to="/signin" />
      </Header.Frame>
    </Header>
  );
}
