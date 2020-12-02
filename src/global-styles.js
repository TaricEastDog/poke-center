import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  -ms-hyphenate-limit-chars, body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #323232;
    color: white;
    font-size: 18px;
  }
`;
