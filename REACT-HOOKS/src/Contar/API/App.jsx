import React from "react"
//criar um botão para cada produto ao clicar no botão, mostrar: nome, preço, imagem. 
const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [dados, setDados] = React.useState(null)

async function getData() {
      const response = await fetch('https://renekapi.origamid.dev/json/api/produto/tablet')
     
      const json = await response.json()
      console.log(json)
    }
    return (
      <>
        <button onClick={getData}>Tablet</button>
        <button onClick={getData}>Notebook</button>
        <button onClick={getData}>Smartphone</button>
      </>
    )
}

export default App;