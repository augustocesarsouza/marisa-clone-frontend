import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    font-family: ${({ theme }) => theme.font.family.default};
    /* font-family: Montserrat; */
    height: 100%;
    margin: 0;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.default};
  }
`;
