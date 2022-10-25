import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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