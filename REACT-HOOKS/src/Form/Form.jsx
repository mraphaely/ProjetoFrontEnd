import React from "react"

const App = () => {

    // eslint-disable-next-line no-unused-vars
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [telefone, setTelefone] = React.useState('')
    const [password, setPassword] = React.useState('')

function HandleSubimit(event){
    event.preventDefault()
    // console.log(event.target)
}

    return (
        <>
        <form onSubmit={HandleSubimit}>
            <label htmlFor="nome">Nome: </label>
            <input
                id="nome"
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
            />
            <p>{nome}</p>

            <label htmlFor="email">E-mail: </label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <p>{email}</p>

            <label htmlFor='tel'>Telefone: </label>
            <input
                id="tel"
                type='number'
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                required
            />
            <p>{telefone}</p>

            <label htmlFor='password'>Senha: </label>
            <input
                id="password"
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            <p>{password}</p>
            <button>Enviar</button>
        </form>
        </>
    )
}

export default App