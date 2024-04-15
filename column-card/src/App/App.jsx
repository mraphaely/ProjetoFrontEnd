// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "../Container/Container";
import img from '../../images/icon-sedans.svg'
import img2 from '../../images/icon-suvs.svg'
import img3 from '../../images/icon-luxury.svg'



import './App.css';

// eslint-disable-next-line no-unused-vars
const App = () => {

  return(
    <>
   <Container
   img={img}
   backgroundColor='hsl(31, 77%, 52%)'
   textH1={"SEDANS"}
   color='hsla(0, 0%, 100%, 0.75)'
   textP={"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."}
/>
<Container
   img={img2}
   backgroundColor='hsl(184, 100%, 22%)'
   textH1={"SUVS"}
   color='hsla(0, 0%, 100%, 0.75)'
   textP={"Take an SUV for its spacious interior, power, and versatility. Perferct for your next family vacation and off-road adventures."}
/>
<Container
   img={img3}
   backgroundColor='hsl(179, 100%, 13%)'
   textH1={"LUXURY"}
   color='hsla(0, 0%, 100%, 0.75)'
   textP={"Take an SUV for its spacious interior, power, and versatility. Perferct for your next family vacation and off-road adventures."}
/>
  
   </>
  )

}

export default App;