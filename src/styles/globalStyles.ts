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
  nav.active,
  .modal_content {
    background-color: ${({ theme } : {theme: any}) => theme.navbarBg};
  }
  nav.active > p,
  nav.active > button,
  .flex-div > p,
  .modal-close-btn {
    color: ${({ theme } : {theme: any}) => theme.navText}
  }
  nav.active:hover > button {
    color: ${({ theme } : {theme: any}) => theme.toggleBtnText}
  }
`;