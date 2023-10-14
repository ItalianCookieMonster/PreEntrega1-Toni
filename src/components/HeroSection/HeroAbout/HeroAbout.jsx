/* eslint-disable react/no-unescaped-entities */
//React-router-dom imports

//Boostrap component imports
import Container from 'react-bootstrap/Container';

//CSS imports
import '../Hero.css'

const HeroAbout = () => {
    return (
        <Container fluid className="hero-container-about hero-container-3">
            <Container className="py-5 px-4">
                <h1>About us</h1>
            </Container>
        </Container>
    )
}

export default HeroAbout