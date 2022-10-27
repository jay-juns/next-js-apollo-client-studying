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
  nav.active {
    background-color: ${({ theme } : {theme: any}) => theme.navbarBg};
  }
  nav.active > .nav-wrap > p,
  nav.active > .nav-wrap > button {
    color: ${({ theme } : {theme: any}) => theme.navText}
  }
  nav.active > .nav-wrap:hover > button {
    color: ${({ theme } : {theme: any}) => theme.toggleBtnText}
  }
  .modal_content {
    background-color: ${({ theme } : {theme: any}) => theme.textActiveOpp};
    box-shadow: ${({ theme } : {theme: any}) => theme.shadow};
  }
  .flex-div > p,
  .modal-close-btn {
    color: ${({ theme } : {theme: any}) => theme.textActive}
  }
  .modal_back {
    background-color: ${({ theme } : {theme: any}) => theme.overlayBg}
  } 
`;