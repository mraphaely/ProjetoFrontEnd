import styled from "styled-components"

export const color = {

 Cyan: 'hsl(179, 62%, 43%)',
 BrightYellow: 'hsl(71, 73%, 54%)',


 LightGray: 'hsl(204, 43%, 93%)',
 GrayishBlue: 'hsl(218, 22%, 67%)',
}

export const CardMaior = styled.div`
     background-color: ghostwhite;
     width: 500px;
     height: 200px;
     border-radius: 10px 10px 0 0;
     margin:  0 auto;

`
export const Titulo = styled.h1`
     color: ${color.Cyan};
     font-size: 20px;
     padding-top: 10px;
     padding-left: 25px;
`
export const SubTitulo = styled.p`
     color: ${color.BrightYellow};
     padding-top: 10px;
     padding-left: 25px;
`
export const Texto = styled.p`
     color: gray;
     padding-top: 10px;
     padding-left: 25px;
`
