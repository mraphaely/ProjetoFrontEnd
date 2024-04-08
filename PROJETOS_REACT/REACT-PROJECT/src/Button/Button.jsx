import './Button.css'


// eslint-disable-next-line react/prop-types
const Btn = ({texto, source}) => {
    return(
        <a href={source}>
            <input type='button' value={texto}/>
        </a>
            
    )
}

export default Btn;
