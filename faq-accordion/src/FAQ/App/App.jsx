// eslint-disable-next-line no-unused-vars
import React from "react";
import ContainerModal from "../ContainerModal/ContainerModal";

import './App.css';

// eslint-disable-next-line no-unused-vars

const App = () => {

  return(
 
    <main className="container_main">
        <div className="container_card">
        
      
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 40 41">
    <path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/>
    </svg>FAQs</h1>
            
           
            <hr/>
            <ContainerModal  textButton={'What is Frontend Mentor, And how will it help me?'} textModal={'123 indiozinhos'}/>
            <ContainerModal textButton={'Is Frontend Mentor Free?'} textModal={'456 indiozinhos'}/>
            <ContainerModal textButton={'Can I Use Frontend Mentor Projects In My Portfolio?'} textModal={'789 indiozinhos'}/>
            <ContainerModal textButton={"How Can I Get Help If I'm Stuck On a Challenge?"} textModal={'10 no pequeno bosque'}/>
        </div>
    </main>
   
  )

}

export default App;