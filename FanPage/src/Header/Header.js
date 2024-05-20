import { styled } from "styled-components"

export const cor = {
    primary: "red",
    secondary: "gray",
    tertiary: "black",
    quaternary: "white",
    quinary: "rgba(0, 0, 255, 0.527)",
}
export const Cabecalho = styled.nav`
    background-color: ${cor.quinary};
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 28px;
    padding: 20px;
`