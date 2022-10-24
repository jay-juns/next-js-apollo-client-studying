import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme } : {theme: any}) => theme.body};
    color: ${({ theme } : {theme: any}) => theme.text};
    transition: all 0.25s linear;
  }
  a, 
  p, 
  button {
    color: ${({ theme } : {theme: any}) => theme.text};
  }
`;