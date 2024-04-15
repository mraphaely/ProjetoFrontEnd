import "./Button.css"

// eslint-disable-next-line react/prop-types
const Button = ({text}) => {
    return(
        <button className='btn'>{text}</button>
    )
}

export default Button;