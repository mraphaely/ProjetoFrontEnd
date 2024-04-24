import React from "react";

// O estado de uma aplicação representa as características dela na aquele momento.
 const App = () => {
     //  const ativo = true
    const [ativo, setAtivo] = React.useState(true)
    const [contador, setContador] = React.useState(1)
    const [item, setItem] = React.useState(['Item 0'])//se for vazio (null)
    // const [objeto, setObjeto,] = React.useState([{nome: '', idade: ''}])

function handleClick() {
    setContador(()=>{
      return contador + 1 
  })
}     

  return(<>
    <button onClick={()=> setAtivo(!ativo)}>
        {ativo === true ? 'Ativo' : 'Inativo'}
    </button>

    {/* <button onClick={()=> setContador(contador + 1)}>
        {contador}
      </button> */}
   <button onClick={handleClick}>{contador}</button>

    {item.map((item)=>(
      <li key={item}>{item}</li>
      ))}
    </>)
}

export default App;