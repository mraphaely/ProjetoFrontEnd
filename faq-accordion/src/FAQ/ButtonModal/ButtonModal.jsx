import './ButtonModal.css'

// eslint-disable-next-line react/prop-types
const ButtonModal = ({text, setModal, modal, img}) => {
    return(
        <button onClick={()=> setModal(!modal)} className='btn'>{text}{img}</button>
    )
}

export default ButtonModal;