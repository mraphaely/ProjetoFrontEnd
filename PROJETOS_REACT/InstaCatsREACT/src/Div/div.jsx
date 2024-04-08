import './div.css'
import gato1 from '/img-01.jpg'
import gato2 from '/img-02.jpg'
import gato3 from '/img-03.jpg'

import gato4 from '/img-04.jpg'
import gato5 from '/img-05.jpg'

import gato6 from '/img-06.jpg'


import gato7 from '/img-07.jpg'
import gato8 from '/img-08.jpg'
import gato9 from '/img-09.jpg'

import gato10 from '/img-10.jpg'
import gato11 from '/img-11.jpg'

import gato12 from '/img-12.jpg'

const Div = () => {
    return ( 
    <div className='minhasImg'>
   
    <div>
       <img src={gato1} alt="gato1" />  
       <img src={gato2} alt="gato2" />  
       <img src={gato3} alt="gato3" /> 
    </div>
    <div>
       <img src={gato4} alt="gato4" />  
       <img src={gato5} alt="gato5" /> 
    </div>
    <div>
       <img src={gato6} alt="gato6" /> 
    </div>
    <div>
       <img src={gato7} alt="gato7" />  
       <img src={gato8} alt="gato8" />  
       <img src={gato9} alt="gato9" /> 
   </div>
   <div>
       <img src={gato10} alt="gato10" />  
       <img src={gato11} alt="gato11" /> 
   </div>
   <div>
       <img src={gato12} alt="gato12" /> 
   </div>
    </div>)
}

export default Div;