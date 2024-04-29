import React from "react";
import './Contar.css'

const Contar = () => {

  const [contar, setContar] = React.useState(0)

  function Acrescimo(){
    setContar(contar + 1)
  }

  return(
    <>
    <button className="Menos" onClick={() => setContar(contar-1)}>-</button>
    <span>{contar}</span>
    <button className="Mais" onClick={Acrescimo}>+</button>
    </>
    )
}
export default Contar;