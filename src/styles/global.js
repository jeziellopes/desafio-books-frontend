import { createGlobalStyle } from 'styled-components';
import defaultFonts from './fonts';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;

    ${defaultFonts}
  }

  body {
    font-family: 'Heebo', sans-serif;
  }

  input {
    font-family: 'Heebo', sans-serif;
    background: none;
    border: none;
    outline: none;
    padding: 0;
  }
`

export default GlobalStyle;