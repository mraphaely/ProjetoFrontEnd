import React from "react"

const Form = () => {

const [nome, setNome] = React.useState()
const [email, setEmail] = React.useState()
const [senha, setSenha] = React.useState()
const [cep, setCep] = React.useState()
const [rua, setRua] = React.useState()
const [numero, setNumero] = React.useState()
const [bairro, setBairro] = React.useState()
const [cidade, setCidade] = React.useState()
const [estado, setEstado] = React.useState()

// eslint-disable-next-line no-unused-vars
const [response, setResponse] = React.useState()


function HandleSubimit(event){
  event.preventDefault()
  // console.log(event)
  const dataForm = {
    nome,
    email,
    senha,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado
  }
  fetch('https://ranekapi.origamid.dev/json/api/usuario'), {
  method: 'POST',
  headers: {
    'Content-Type':'application/json'
  },
  body: JSON.stringify(dataForm)
  }.then((response) => {
    console.log(response)
  })
}


  return(
    <form onSubmit={HandleSubimit}
    style={{display: 'flex', flexDirection: 'column'}}>
      <label htmlFor="nome">Nome: </label>
      <input type="text" 
      id="nome"
      value={nome}
      onChange={(event) => setNome(event.target.value)}/>

      <label htmlFor="email">Email: </label>
      <input type="email" 
      id="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}/>

      <label htmlFor="senha">Senha: </label>
      <input type="text" 
      id="senha"
      value={senha}
      onChange={(event) => setSenha(event.target.value)}/>

      <label htmlFor="cep">Cep: </label>
      <input type="number" 
      id="cep"
      value={cep}
      onChange={(event) => setCep(event.target.value)}/>

      <label htmlFor="rua">Rua: </label>
      <input type="text" 
      id="rua"
      value={rua}
      onChange={(event) => setRua(event.target.value)}/>

      <label htmlFor="numero">Número: </label>
      <input type="number" 
      id="numero"
      value={numero}
      onChange={(event) => setNumero(event.target.value)}/>

      <label htmlFor="bairro">Bairro: </label>
      <input type="text" 
      id="bairro"
      value={bairro}
      onChange={(event) => setBairro(event.target.value)}/>

      <label htmlFor="cidade">Cidade: </label>
      <input type="text" 
      id="cidade"
      value={cidade}
      onChange={(event) => setCidade(event.target.value)}/>

      <label htmlFor="estado">Estado: </label>
      <input type="text" 
      id="estado"
      value={estado}
      onChange={(event) => setEstado(event.target.value)}/>
      
      <br />
      <button>Enviar</button>
      {response && <p>Usuário cadastrado!</p>}
    </form>
  )
}

export default Form