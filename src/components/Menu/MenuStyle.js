import styled from "styled-components";

export const MenuStyle = styled.menu`
html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: verdana, sans-serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  
  img {
    border-style: none;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  
  
  nav {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  
  #home {
    padding-top: 3rem;
  }
  
  button:hover, button:focus {
    outline: 0px transparent;
  }
  
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 22px;
    padding-bottom: 2rem;
    outline: none;
  }
  
  a:hover, a:focus {
    text-decoration: 2px underline solid;
    text-underline-offset: 5px;
    color: #ffffff;
  }
  
  footer a {
    font-size: 20px;
    font-weight: 600;
  }
  
  footer a:hover, footer a:focus {
    color: rebeccapurple;
    filter: brightness(130%);
  }`