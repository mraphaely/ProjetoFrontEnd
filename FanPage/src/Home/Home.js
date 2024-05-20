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
    text-align: justify;
    text-decoration: none;
    font-size: 18px;
    padding: 28px;
`
export const Text = styled.p`
    color: ${cor.white};
    padding-top: 15px;
`
export const Title = styled.h1`
    color: ${cor.white};
`