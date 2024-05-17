import { Link } from "react-router-dom";
import { Cabecalho } from "./Header";
import '../style.css'


const Header = () => {
    return(
        <Cabecalho>
            <Link to={'/'} className='links'> Home </Link>
            <span> | </span>
            <Link to={'sobre'}  className='links'> Sobre </Link>
            <span> | </span>
            <Link to={'contato'}  className='links'>    Contato</Link>
        </Cabecalho>
    )
}

export default Header;
