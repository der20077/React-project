import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition:  all 0.25s linear ;
}
`;
