import Input from "./Input"
import React from "react"

const App = () => {
    

    const [nome, setNome] = React.useState('')

    return(
        <div>
            <p>Hello World!</p>
            <Input 
            label={'Nome: '}
            id={'nome'}
            type={'text'}
            value={nome}
            setValue={setNome}
            />
            {nome}

            {/* <Input 
            label={' Senha: '}
            id={'senha'}
            type={'password'}
            required
            /> */}
        </div>
    )
}

export default App