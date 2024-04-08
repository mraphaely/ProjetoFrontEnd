import './App.css'
import JessicaImage from '../../social-links-profile-main/assets/images/avatar-jessica.jpeg'

//componentes
import Profile from '../Profile/Profile';
import Btn from '../Button/Button';

const App = () => {
    return (
        <main className="container_main">
            <div className="container_card">
                <Profile
                image={JessicaImage}
                name='Jessica Randall'
                location='London, United Kingdom'
                role='Web Developer'
                />
                <Btn source={'https://github.com/'} texto='GitHub'/>
                <Btn source={'#'} texto='Frontend Mentor'/>
                <Btn source={'https://br.linkedin.com/'} texto='Linkedin'/>
                <Btn source={'https://twitter.com/'} texto='X'/>
                <Btn source={'https://instagram.com/'} texto='Instagram'/>
            </div>
        </main>
    )
}

export default App;
