import { styled } from "styled-components"

export const cor = {
    primary: "red",
    secondary: "gray",
    tertiary: "black",
    quaternary: "white",
    quinary: "rgba(0, 0, 255, 0.527)",
}
export const Rodape = styled.footer`
    background-color: ${cor.quinary};
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    padding: 20px;
`