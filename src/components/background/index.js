import { Background } from "../header/styles/header";
import React from "react";

export default function AppBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}
