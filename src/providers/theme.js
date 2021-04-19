import { ThemeProvider } from 'styled-components';
import { useScreenSize } from '../hooks';
import { g as grid } from '../utils/formula';

/**
 * Default Project Theme
 *
 * @param {React.Component} children
 * @returns {React.Component}
 */
const Theme = ({ children }) => {
  const [width, height] = useScreenSize();

  // theme definitions
  const theme = {
    // dynamic screen sizes
    screen: {
      height: height,
      width: width,
    },

    // default screen sizes
    layout: {
      width: 1366,
      height: 768,
    },

    // theme colors
    colors: {
      primary: '#AB2680', // author labels, book thumbnail
      secondary: '#B22E6F', // book thumbnail
      secondaryLight: '#D0608D',

      white: '#fff', // card background
      darkslategray: '#333333', // dark titles
      darkgray: '#999999', // descriptions
      whitesmoke: '#F5EFF3', // book thumbnail

      grayOpacity: 'rgba(255, 255, 255, 0.32)',
      blackOpacity: 'rgba(0, 0, 0, 0.32)',
    },

    // theme font-sizes
    fontSize: {
      small: '12px',
      medium: '14px',
      large: '16px',
      extraLarge: '28px',
    },

    // theme font-weights
    fontWeight: {
      Thin: 100,
      Light: 300,
      Regular: 400,
      Medium: 500,
      Bold: 700,
      ExtraBold: 800,
      Black: 900,
    },

    // theme shadow effects
    shadows: {
      bookCardShadows: '0px 6px 24px 0px #54105F21',
      bookCoverShadows: '0px 6px 9px 0px #00000026',
    },

    // dynamic books padding based on screen width
    booksListPadding: {
      grid: (n) => grid(n, width),
    },
  };

  // return theme provider wrapper
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
