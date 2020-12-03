import React from "react";
import {
  Frame,
  Background,
  Image,
  Logo,
  ButtonLink,
  SignInButton,
  SignUpButton,
  Group,
} from "./styles/header";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Image = function HeaderImage({ ...restProps }) {
  return <Image src="/images/header-main.png" {...restProps} />;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

Header.SignInButton = function HeaderSignInButton({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <SignInButton {...restProps} />
    </ReactRouterLink>
  );
};

Header.SignUpButton = function HeaderSignUpButton({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <SignUpButton {...restProps} />
    </ReactRouterLink>
  );
};
