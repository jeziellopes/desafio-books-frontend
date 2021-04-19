import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background_light.png';
import defaultFonts from './fonts';

const GlobalStyle = createGlobalStyle`

  html {
    background-image: url(${background});
    height: ${({ theme }) => theme.screen.height}px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  html, body, #root {
    height: 100%;
    padding: 0;
    margin: 0;

    ::-webkit-scrollbar {
      display: none;
    }

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
`;

export default GlobalStyle;
