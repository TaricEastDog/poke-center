import React from "react";
import { Container, Title, ButtonLink } from "./styles/menu";

export default function Menu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Menu.Title = function MenuTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Menu.ButtonLink = function MenuButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};
