
// Propriedades ou Props
const Titulo = (props) => {
    return (
        <h1 style={{color: props.cor}}> {props.texto} </h1>
    )
}
const Subtitulo = ({color, text}) => {
  return(
      <p style={{color: color}}>{text}</p>
      )
}

const Cabecalho = (props) => {
    return(
        <h1 style={{color: props.cor}}>{props.children}</h1>
    )
}

const Header = () => {
    return (
        <>  
            <Cabecalho>
                <p style={{color:'red'}}>Hello world!</p>
                <p>Olá mundo!</p>
            </Cabecalho>   
            
            <Titulo cor="red" texto="" />
            <Subtitulo color="black" text="Infelizmente agora tú faz parte de mim, das minhas memórias...as quais não consigo mitigar dos meus pensamentos. Na realidade, meu bem...eu não quero que você seja apenas uma fase. "/>
        </>
    )
}

export default Header
