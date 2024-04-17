import "./Button.css"

// eslint-disable-next-line react/prop-types
const Button = ({text, color}) => {
    return(
        <button className='btn' style={{color: color}}>{text}</button>
    )
}

export default Button;