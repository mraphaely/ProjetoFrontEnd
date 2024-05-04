import Input from "./Input"

const Atividade = () => {
    
    const [nome, setNome] = React.useState('')

    return(
        <>
        <Input 
            label={'Nome: '}
            id={'nome'}
            type={'text'}
            value={nome}
            setValue={setNome}
            />
            {nome}
        </>
    )
}

export default Atividade