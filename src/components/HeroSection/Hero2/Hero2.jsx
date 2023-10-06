/* eslint-disable react/no-unescaped-entities */
//React-router-dom imports
import { Link } from 'react-router-dom';

//Boostrap component imports
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

//CSS imports
import '../Hero.css'

const Hero2 = () => {
    return (
        <Container fluid className="hero-container hero-container-2">
            <Container className="py-5 px-4 text-center align-bottom" >
                <h1>Explore Our Sustainable On The Go Products</h1>
                <p className="my-4 lead">Discover a world of sustainable solutions in our on the go category. Say good by to littering.</p>
                <Link to='/categories/on-the-go'>
                    <Button variant="outline-light">Shop Now</Button>
                </Link>
            </Container>
        </Container>
    )
}

export default Hero2