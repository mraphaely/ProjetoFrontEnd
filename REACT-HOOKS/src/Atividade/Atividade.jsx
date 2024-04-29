//Para criação ser aceita é necessário enviar dados de: nome, email, senha, cep, rua, numero, bairro, cidade e estado. mostre uma mensagem na tela caso a resposta da api seja positiva.

fetch('https://ranekapi.origamid.dev/json/api/usuario',{
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    // eslint-disable-next-line no-undef
    body: JSON.stringify(form)
})

const Form = () => {
  <>
  <label htmlFor="text">Nome</label>
  <input type="text" />

  <label htmlFor="email">E-mail</label>
  <input type="email" />

  <label htmlFor="senha">Senha</label>
  <input type="senha" />

  <label htmlFor="Cep">Cep</label>
  <input type="number" />

  <label htmlFor="Rua">Rua</label>
  <input type="text" />

  <label htmlFor="Número">Número</label>
  <input type="text" />

  <label htmlFor="Bairro">Bairro</label>
  <input type="text" />

  <label htmlFor="Cidade">Cidade</label>
  <input type="text" />

  <label htmlFor="Estado">Estado</label>
  <input type="text" />
  </>
}

export default Form;