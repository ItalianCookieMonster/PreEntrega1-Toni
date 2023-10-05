/* eslint-disable react/no-unescaped-entities */
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import '../Hero.css'

const Hero2 = () => {
    return (
        <Container fluid className="hero-container hero-container-2">
            <Container className="py-5 px-4 text-center align-bottom" >
                <h1>Explore Our Sustainable Products</h1>
                <p className="my-4 lead">Discover a world of sustainable solutions in our product categories. From eco-friendly home essentials to plastic-free personal care, we have something for everyone.</p>
                <Button variant="outline-light">Shop Now</Button>
            </Container>
        </Container>
    )
}

export default Hero2