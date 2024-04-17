import Button from "../Button/Button"
import './ContainerCard.css'

const ContainerCard = ({ img, titulo, textP, backgroundColor, color, id}) => {
    return (
        <main className="container_main">
            <div id={id} className="container_card"  style={{backgroundColor: backgroundColor}}>
                <img src={img} />
                <h1>{titulo}</h1>
                <p style={{color: color}}>{textP}</p>
                <Button text='Learn More' color={backgroundColor}/>
            </div>

        </main>
    )
}

export default ContainerCard;