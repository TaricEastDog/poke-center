import React from "react";
import {
  Container,
  SignoutButton,
  Link,
  Icon,
  Profile,
  Dropdown,
} from "./styles/navbar";

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navbar.SignoutButton = function NavbarSignoutButton({
  children,
  ...restProps
}) {
  return <SignoutButton {...restProps}>{children}</SignoutButton>;
};

Navbar.Link = function NavbarLink({ children, to, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Navbar.Profile = function NavbarProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Navbar.Icon = function NavbarIcon({ src, ...restProps }) {
  return <Icon src={src} {...restProps} />;
};

Navbar.Dropdown = function NavbarDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
