import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    color: #202020;
    background-color: #fafafa;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;