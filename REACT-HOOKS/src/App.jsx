//Estado
// o estado de uma aplicção representa as características dela naquele momento.

/*
const App = () => {
  
  const ativo = false
  return(
    <button>{ativo ? 'Botão ativo' : 'Botão inativo'}</button>
    )
}
  
  export default App;
  */
 
 //Hooks
 //os hooks são funções especiais do React que permitem controlarmos o estado e ciclo de vida de componentes funcionais.
 
 //---------------------------------------------------------------//
 
 //React.useState
 // o react.usestate é uma função que retorna um array com 2 valores. o primeiro valor guarda o dado estado atual, pode ser 
 //qualquer tipo de dado como strings,arrays, boolean, null,underfined e objetos. O segundo valor é uma função  que pode ser
 //utilizada para modificarmos o estado do primeiro valor
 
 import React from 'react';
 const App = () => {
   
  const [ativo, setAtivo] = React.useState(true)
  const [contar, setContar] = React.useState(0)

  return(
    <>
    <button onClick={() => setAtivo(!ativo)}>
           {ativo ? 'Ativo' : 'Inativo'}
    </button>
    
    <button onClick={() => setContar(contar + 1)}>
            {contar}
    </button>
    </>
  )
}

export default App;
