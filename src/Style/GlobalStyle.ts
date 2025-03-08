import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pluto Sans';
    src: url('/fonts/PlutoSans-Regular.woff2') format('woff2'),
         url('/fonts/PlutoSans-Regular.woff') format('woff'),
         url('/fonts/PlutoSans-Regular.ttf') format('truetype');
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  
  #root{
    height: 100%;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    height: 100%;
    margin: 0;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({theme}) => theme.font.family.default}, sans-serif;
    height: 100%;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.default};
  }

  p {
   
  }

  ul, ol {

  }

  a {
    
  }
`;
