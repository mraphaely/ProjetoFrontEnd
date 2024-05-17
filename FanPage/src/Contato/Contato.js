import { styled } from "styled-components"

export const cor = {
    primary: "red",
    secondary: "gray",
    tertiary: "black",
    quaternary: "white",
    quinary: "blue",
}
export const Caixa = styled.div`
    background-color: ${cor.tertiary};
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    padding: 28px;
`