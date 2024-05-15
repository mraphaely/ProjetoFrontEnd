import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./Contato";
import Header from "./Header";
import Home from "./Home";
import Rodape from "./Rodape";
import Sobre from "./Sobre";

// BrowserRouter deve ser o componente pai que envolve tudo que depende do React-Router.
// Routes define a área em que vamos colocar os nossos Route.
// O Route recebe um caminho em Path, se esse caminho for o mesmo da URL ele irá o componente que estiver dentro de Element={}

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/Contato" element={<Contato/>}/>
            </Routes>
            <Rodape/>
        </BrowserRouter>
    )
}

export default App;