import Form from "../Form/Form";
import PrincipalInfo from "../PrincipalInfo/PrincipalInfo";
import PromoBox from "../PromoBox/PromoBox";
import './App.css'

const App = () => {
    return (
        <>
            <section className="container-main">
                    <PrincipalInfo />
                <div className="container-form">
                    <PromoBox className={'PromoBox'} txt={'Try it free 7 days then $20/mo. there after'} />
                    <Form />
                </div>

            </section>
        </>
    )
}
export default App;