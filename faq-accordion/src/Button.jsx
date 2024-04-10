import React from "react"

const Btn = () => {
const [ativo, setAtivo] = React.useState(true)
 

return(
  <>
  <button onClick={() => setAtivo(!ativo)}>
         {ativo ? 'Ativo' : 'Inativo'}
  </button>
  
  </>
 )
}

export default Btn;
