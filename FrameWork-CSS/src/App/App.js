import styled from "styled-components"

const cor = {
    preto: '#000',
    branca: '#fff',
    rosa: '#e01e8f',
    amarelo: '#eed200',
}
export const Title = styled.h1`
    color: violet;
    background-color: purple;
    border-radius: 10px 10px 0 0;
    text-align: center; 
   
`
export const Title2 = styled.h3`
    color: ${cor.branca};
    font-weight: bold;
    text-align: center;
`
export const Card = styled.div`
    width: 400px;
    height: 400px;
    background-color: violet;
    border-radius: 15px;
    margin: 0 auto;
`
export const Text = styled.p`
    color: ${cor.branca};
    padding: 5px;
    &:hover{
        color: purple;
    }
`
