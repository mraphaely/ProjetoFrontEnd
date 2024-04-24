import React from "react";

const App = () => {
    const [dados, setDados] = React.useState({});

    async function getData(produto) {
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
        const json = await response.json();
        setDados(json);
    }

    return (
        <>
            <button onClick={() => getData('tablet')}>Tablet</button>
            <button onClick={() => getData('notebook')}>Notebook</button>
            <button onClick={() => getData('smartphone')}>Smartphone</button>
            {dados.nome && (
                <main>
                    <h1>{dados.nome}</h1>
                    <p>Preço: {dados.preco}</p>
                    <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
                </main>
            )}
        </>
    );
};

export default App;