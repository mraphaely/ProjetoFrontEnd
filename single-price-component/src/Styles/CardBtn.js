import styled from "styled-components"

export const color = {

 Cyan: 'hsl(179, 62%, 43%)',
 BrightYellow: 'hsl(71, 73%, 54%)',


 LightGray: 'hsl(204, 43%, 93%)',
 GrayishBlue: 'hsl(218, 22%, 67%)',
}

export const CardBtn = styled.div`
     background-color: ${color.Cyan};
     width: 250px;
     height: 200px;
     border-radius:  0 0 0 10px ;
     margin:  0 auto;
`
export const Titulob = styled.h1`
     color: ghostwhite;
     font-size: 15px;
     padding-left: 25px;
`
export const Preco = styled.h1`
     color: ghostwhite;
     font-size: 25px;
     padding-left: 25px;
     `
export const SubTitulob = styled.p`
     color: ghostwhite;
  
     padding-left: 25px;
     `
export const  TittleRgb = styled.p`
     color: ${color.LightGray};
     padding-top: 10px;
     padding-left: 25px;
`    
export const Btn = styled.button`
    background-color: ${color.BrightYellow};
    width: 150px;
    height: 38px;
    border-radius: 10px;
    margin-left: 49px;
    border: 0;
    color: ghostwhite;
    &:hover{
        color: ${color.BrightYellow};
        background-color: ${color.LightGray};
    }
    
`     
