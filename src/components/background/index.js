import { Background } from "./styles/background";
import React from "react";

export default function AppBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}
