/* eslint-disable react/no-unescaped-entities */
//React-router-dom imports
import { Link } from 'react-router-dom';

//Boostrap component imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

//CSS imports
import '../Hero.css'

const Hero1 = () => {
    return (
        <Container fluid className="hero-container hero-container-1">
            <Container className="py-5 px-4 text-center" >
                <h1 className="display-5">Sustainishop</h1>
                <p className="m-4 lead">Welcome to Sustainishop, your ultimate destination for sustainable living. At Sustainishop, we believe that small, everyday choices can make a big impact on our planet. That's why we've curated a collection of eco-friendly, waste-reducing products that empower you to live a greener, more sustainable life.</p>
                <Link to='/about'>
                    <Button variant="outline-light">Get to Know Us</Button>
                </Link>
            </Container>
        </Container>
    )
}

export default Hero1