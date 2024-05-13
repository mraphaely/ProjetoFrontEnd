import { CardBtn, Preco, Titulob, SubTitulob, Btn, TittleRgb } from "../Styles/CardBtn";
import { CardMaior, SubTitulo, Texto, Titulo } from "../Styles/CardMaior"
import { CardMenor, Tituloc, SubTituloc} from "../Styles/CardMenor";

const App = () => {
    return(
        <>
        <main className="ContainerPrincipal">
        <CardMaior>
          <Titulo>Join or community</Titulo>
          <SubTitulo>30-day, hassle-free money back gurantee</SubTitulo>
          <Texto>Gain acess to our full library of tutorials along with  expert code reviews. Perfect for any developers who are serius about honing their skills.</Texto>
        </CardMaior>
        <div className="Container">
        <CardBtn>
         <Titulob>Monthly Subscription</Titulob>
         <section className="valor">
         <Preco>$29</Preco>
         <TittleRgb>por month</TittleRgb>
         </section>
         <SubTitulob>Full acess for less than $1 a day</SubTitulob>
         <Btn>Sing Up</Btn>
        </CardBtn>
        <CardMenor>
         <Tituloc>Why us</Tituloc>
         <SubTituloc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, magnam porro expedita hic ad possimus nisi vel labore ipsa laudantium nobis excepturi tempore aspernatur, quaerat iusto rerum dicta. Molestias, distinctio.</SubTituloc>
        </CardMenor>
        </div>
        </main>
        </>
    )
}

export default App;