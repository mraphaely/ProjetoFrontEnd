import Card from "../Card/Card"
import './App.css'

const App = () => {
    return(
        <>
        <section className="section">
        <div>
        <h1>Learn to code by watching others</h1>
        <p className="palavritas">   See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable</p>
        </div>
        <Card
        nameFirst={'First Name'}
        nameLast={'Last Name'}
        mailto={'E-mail Address'}
        password={'PassWord'}
        txt={'By clicking the button, you are agreeing to our'}
        txt2={'Terms and services'} color={'hsl(0, 100%, 74%)'}
        
        />
        </section>
        </>
    )
}

export default App;