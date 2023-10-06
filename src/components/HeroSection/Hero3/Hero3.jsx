/* eslint-disable react/no-unescaped-entities */
//React-router-dom imports
import { Link } from 'react-router-dom';

//Boostrap component imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

//CSS imports
import '../Hero.css'

const Hero3 = () => {
    return (
        <Container fluid className="hero-container hero-container-3">
            <Container className="py-5 px-4 text-center" >
                <h1>Our Environmental Impact</h1>
                <p className="my-4 lead">At Sustainishop, we take our commitment to the planet seriously. Learn more about our efforts to reduce our environmental footprint and promote sustainable practices</p>
                <Link to='/about'>
                    <Button variant="outline-light">Discover Our Impact</Button>
                </Link>
            </Container>
        </Container>
    )
}

export default Hero3