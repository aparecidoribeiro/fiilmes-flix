import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*, body {
    margin: 0;
    padding: 0;
    font-family: "Smooch Sans", serif;
    box-sizing: border-box;
    outline: 0;
}
svg {
    pointer-events: none;
}

body {
    background-color: ${({ theme }) => theme.white_twoo};
}

a {
    text-decoration: none;
}

`