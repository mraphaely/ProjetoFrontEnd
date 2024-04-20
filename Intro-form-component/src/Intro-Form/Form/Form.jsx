import Input from "../Input/Input"
import Button from "../Button/Button"
import Terms from "../Terms/Terms"
import './Form.css'

const Form = () => {
    return(
        <form>
            <Input type={'text'} pleaceholder="First Name"/>
            <Input type={'text'} pleaceholder="Last Name"/>
            <Input type={'email'} pleaceholder="Email Adress"/>
            <Input type={'password'} pleaceholder="Password"/>
            <Button buttonName='CLAIM YOUR FREE TRIAL'/>
            <Terms link={'#'}/>
        </form>
    )
}
export default Form;