import React from "react";
import { Formulario, Input, Label } from "../Styles/Form";

const Form = () => {

    const [nome, setNome] = React.useState('')

    return(
        <Formulario>
            <Label htmlFor="Nome">Nome:</Label>
            <Input type='text' onChange={({target})=> setNome(target.value)} value={nome}></Input>

            <Label htmlFor="email">Email:</Label>
            <Input type='email'></Input>

            <Label htmlFor="senha">Senha:</Label>
            <Input type='password'></Input>
        {/* {nome} */}
            
        </Formulario>
    )
}

export default Form;