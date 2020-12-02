import React from "react";
import { Header } from "../components";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src="/images/logo.png" />
        <Header.ButtonLink>Sign In</Header.ButtonLink>
      </Header.Frame>
    </Header>
  );
}
