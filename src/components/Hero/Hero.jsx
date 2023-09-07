import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";

import './Hero.css'

const Hero = () => {
    return (
        <Container fluid className="hero-container">
            <Container className="py-5 px-4 text-center container-lg" >
                <Row>
                    <Col className="hero-col">
                        <h1 className="display-5">Sustainishop</h1>
                        <p className="my-4 mx-4 lead">Welcome to Sustainishop, your ultimate destination for sustainable living. At Sustainishop, we believe that small, everyday choices can make a big impact on our planet. That's why we've curated a collection of eco-friendly, waste-reducing products that empower you to live a greener, more sustainable life.</p>
                        <Button variant="outline-light">Get to Know Us</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Hero