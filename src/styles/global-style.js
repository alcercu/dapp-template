import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0px;
  }

  h1 {
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    margin: 0;
    color: ${props => props.theme.primaryText}
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;
    color: ${props => props.theme.primaryText}
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
    color: ${props => props.theme.primaryText}
  }

  hr {
    opacity: 1;
  }

  svg, img {
    vertical-align: top;
  }
`
