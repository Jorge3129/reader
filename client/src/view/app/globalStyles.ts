import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  
  html {
    height: 100%;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial,serif;
    width: 100%;
    height: 100%;
  }
  
  #root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }
`