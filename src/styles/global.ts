import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  } 

  button {
    cursor: pointer;
  }
`

export const BaseLayout = styled.section`
  padding-inline: 10rem;
`
