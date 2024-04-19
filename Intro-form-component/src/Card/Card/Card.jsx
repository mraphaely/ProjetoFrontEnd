import Button from '../../Button/Button';
import './Card.css'
// eslint-disable-next-line react/prop-types
const Card = ({ nameFirst, nameLast, mailto, password, txt, txt2, color}) => {
    return (
        <>
            <section className='container_main'>
                <div className='container_card'>
                < Button id={'btnR'} text='Try it free 7 days then $20/mo.thereafter' color='hsl(248, 32%, 49%'/>
                <input type="text" placeholder={nameFirst} required/>
                <input type="text" placeholder={nameLast} required/>
                <input type="email" placeholder={mailto} required/>
                <input type="password" placeholder={password} required/>
                < Button id={'btnV'} text='CLAIM YOUR FREE TRIAL' color=' hsl(154, 59%, 51%)' />
                <p>{txt}</p>
                <a href="#" style={{color: color}}>{txt2}</a>
                </div>
            </section>
        </>
    )
}

export default Card;