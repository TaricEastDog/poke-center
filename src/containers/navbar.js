import React from "react";
import { Navbar } from "../components";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.List>
        <Navbar.Item>something1</Navbar.Item>
        <Navbar.Item>something2</Navbar.Item>
        <Navbar.Item>something3</Navbar.Item>
      </Navbar.List>
    </Navbar>
  );
}
