import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "../Contato/Contato.jsx";
import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import Rodape from "../Footer/Footer.jsx";
import Sobre from "../Sobre/Sobre.jsx";
import image from '../../public/judo.webp'
import '../style.css'

// BrowserRouter deve ser o componente pai que envolve tudo que depende do React-Router.
// Routes define a área em que vamos colocar os nossos Route.
// O Route recebe um caminho em Path, se esse caminho for o mesmo da URL ele irá o componente que estiver dentro de Element={}

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <img src={image} className='judo'/>
            <Routes>
                <Route path="/" element={<Home/>}  className='links'/>
                <Route path="/sobre" element={<Sobre/>}  className='links'/>
                <Route path="/contato" element={<Contato/>}  className='links'/>
            </Routes>
            <Rodape/>
        </BrowserRouter>
    )
}

export default App;