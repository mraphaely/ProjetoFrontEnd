const Terms = (link) => {
    return(
        <p className="Terms-P">By clicking the button, you are agreeing to our
        <a className="Terms-A" href={link}> Terms e services</a></p>
    )
}
import './Terms.css'
export default Terms;