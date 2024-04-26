// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({nome, onClick}) =>{
    return(
        <>
         <button onClick={onClick}>{nome}</button>
        </>

    )
}
export default Button;
