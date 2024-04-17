// eslint-disable-next-line no-unused-vars
import React from "react";
import img from '../../../images/icon-sedans.svg'
import img2 from '../../../images/icon-suvs.svg'
import img3 from '../../../images/icon-luxury.svg'
import ContainerCard from "../ContainerCard/ContainerCard";



import './App.css';

// eslint-disable-next-line no-unused-vars
const App = () => {

  return(
    <>
<main className="container_main">
<ContainerCard
   img={img}
   backgroundColor='hsl(31, 77%, 52%)'
   titulo={"SEDANS"}
   color='hsla(0, 0%, 100%, 0.75)'
   textP={"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."}
   id='sedan'
/>
<ContainerCard
   img={img2}
   backgroundColor='hsl(184, 100%, 22%)'
   titulo={"SUVS"}
   color='hsla(0, 0%, 100%, 0.75)'
   textP={"Take an SUV for its spacious interior, power, and versatility. Perferct for your next family vacation and off-road adventures."}
   id='suv'
/>
<ContainerCard
   img={img3}
   backgroundColor='hsl(179, 100%, 13%)'
   titulo={"LUXURY"}
   color='hsla(0, 0%, 100%, 0.75)'
   textP={"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."}
   id='luxury'
/>
</main>
   </>
  )

}

export default App;
