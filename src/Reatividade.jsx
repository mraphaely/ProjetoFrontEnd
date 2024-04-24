import React from "react"

const Reatividade= () => {
    const [items, setItems] = React.useState(['Item 1', 'Item 2', 'Item 3'])

    function handleClick() {
        //maneira errada de add itens
        items.push('Novo item')
    }
    function  handleClickReativo(){
        //maneira correta de add itens
        setItems([...items, 'Novo Item']);
    }

    return(
<>
    {items.map((item, index) => (
        <li  key={index}>{item}</li>
    ))}
    <button onClick={handleClickReativo}>Adicionar Item</button>
</>  
    )
}

export default Reatividade