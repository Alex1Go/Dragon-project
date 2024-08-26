import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { globalColor } from './roots';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
    /* font-synthesis: none;
    text-rendering: optimizeLegibility; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${globalColor.colorBlack};;
    font-family:  "Rubik", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${globalColor.colorWhite};
    width: 100%;
    height: 100vh;
    margin: 0 ;
    }

    a {
    text-decoration: none;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }

    img, svg {
    display: block;
    width: 100%;
    height: 100%;
    
    }

    button {
    cursor: pointer;
    }
`;

export const Container = styled.main`
  margin: 0 auto;
  width: 1440px;
  /* min-height: 100vh; */
`;
export const ContainerTwo = styled.div`
  padding: 0 59px 0 60px;
`;

export default GlobalStyles;
