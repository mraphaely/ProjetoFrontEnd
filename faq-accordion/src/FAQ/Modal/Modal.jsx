
// eslint-disable-next-line react/prop-types
const Modal = ({text, modal}) => {
    if (modal) 
    return(
            <p>{text}</p>
        )
    return null
}

export default Modal;