import './Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({text, color, id}) => {
    return(
        <button id={id} className='btn' style={{backgroundColor: color}}>{text}</button>
    )
}

export default Button;