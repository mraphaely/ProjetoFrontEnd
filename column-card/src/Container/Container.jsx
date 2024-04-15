import Button from "../Button/Button"
import './Container.css'

const Container = ({ img, textH1, textP, backgroundColor, color}) => {
    return (
        <main className="container_main">
            <div className="container_card"  style={{backgroundColor: backgroundColor}}>

                <img src={img} />
                <h1>{textH1}</h1>
                <p style={{color: color}}>{textP}</p>
                <Button text='Learn More' />
            </div>

        </main>
    )
}

export default Container;