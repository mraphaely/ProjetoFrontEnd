import React from "react"

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const [dados, setDados] = React.useState(null)

async function getData() {
      const response = await fetch('https://renekapi.origamid.dev/json/api/produto/tablet')
     
      const json = await response.json()
      console.log(json)
    }
    return (
        <button onClick={getData}>Tablet</button>
    )
}

export default App;