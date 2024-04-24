import React from "react";
import './App.css'

// O estado de uma aplicação representa as características dela na aquele momento.
 const App = () => {
    const [item, setItem] = React.useState(['Item 0'])//se for vazio (null)
    // const [objeto, setObjeto,] = React.useState([{nome: '', idade: ''}])

function handleClick() {
    setItem((item)=>{
      return [...item, 'Item ' + item.length]
  })
} 
function handleClickRemove() {
    const novaLista = [...item]
    novaLista.pop()
    setItem(novaLista)
}      

  return(<>

    {item.map((item)=>(
      <li key={item}>{item}</li>
      ))}
    <button className="btn-item" onClick={handleClick}>Adicionar Item</button>
    <button className="btn-itemLess" onClick={handleClickRemove}>Remover Item</button>
    </>)
}

export default App;