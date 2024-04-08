import './header.css'
import logo from '/catLogo.png'

const header = () => {
    return ( 
    // <React.Fragment>//tambem pode ser - <></>
    //         <img src="" alt="" />
    //          <p>Meu elemento</p>
    // </React.Fragment>
    <header className='meuHeader'>
        <img src={logo} alt="img-logo" className='img-logo' />
    <ul>
        <a href="#">LOGIN</a>
  
        <a href="#">REGISTRAR</a>
    </ul>
    </header>
    )
}

export default header;
