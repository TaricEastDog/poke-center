import React from "react";
import { Container, List, Item } from "./styles/navbar";

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.List = function NavbarList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Navbar.Item = function NavbarItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
