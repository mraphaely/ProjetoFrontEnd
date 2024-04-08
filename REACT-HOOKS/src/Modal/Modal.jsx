
// eslint-disable-next-line react/prop-types
const Modal = ({modal, setModal}) => {
   if(modal == true){
    return(
    <div>
        Esse é um modal.
        <button onClick={()=> setModal(false)}>Fechar modal</button>
    </div>
   )
}else{
    return null;
}
}

export default Modal;