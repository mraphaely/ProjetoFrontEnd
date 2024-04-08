import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/header'
import './index.css'
import Footer from './Footer/footer'
import Div from './Div/div'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
   < Div />
   <Footer/>
  </React.StrictMode>,
)
