import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000000;
  }
  
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: 0;
  }
`;

export const ColorsTheme = {
  colors: {
    white: '#FFFFFF',
    gray: 'rgba(217, 217, 217, 0.15)',
    red: '#F55859',
    blue: '#0F81EC'
  }
}