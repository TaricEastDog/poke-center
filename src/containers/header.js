import React from "react";
import { Header } from "../components";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src="/images/logo.png" to="/" />
        <Header.ButtonLink to="/signin">Sign In</Header.ButtonLink>
      </Header.Frame>
    </Header>
  );
}
