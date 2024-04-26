import React from 'react';
import './Api.css'
import Produto from './Produto';

const App = () => {

 const [data,setData] = React.useState(null)

 async function getData(event) {
  const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
  const json = await response.json();
  setData(json)

}

  return (
   <>
    <button onClick={getData}>Tablet</button>
    <button onClick={getData}>Notebook</button>
    <button onClick={getData}>Smartphone</button>
    {data != null ? <Produto datas={data}/> : null }
   </>
  )
 }
export default App



// import Button from "./Button/Button"
// import Produto from "./Produto"
// import './Api.css'
// import React from "react"

// const App = () =>{
     

//   const[dados, setDados] = React.useState(null)

//      async function Tablet(){
//       const response = await fetch("https://ranekapi.origamid.dev/json/api/produto/tablet")

//       const json = await response.json()
//       setDados(json)
//      }

//      async function Notebook(){
//       const response = await fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")

//       const json = await response.json()
//       setDados(json)
//      }

//      async function Smartphone(){
//       const response = await fetch("https://ranekapi.origamid.dev/json/api/produto/smartphone")

//       const json = await response.json()
//       setDados(json)
//      }

//       return(
//       <>
//       <Button
//       onClick={Tablet}
//       nome={"tablet"}
//       />
//       <Button
//       onClick={Notebook}
//       nome={"notebook"}
//       />
//       <Button
//       onClick={Smartphone}
//       nome={"smartphone"}
//       />
//        {dados != null ? <Produto dados={dados}/> : null}
      
      
//       </>
//   )
// }
// export default App;
