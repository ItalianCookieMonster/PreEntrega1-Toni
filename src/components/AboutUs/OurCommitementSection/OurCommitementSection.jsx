/* eslint-disable react/no-unescaped-entities */
// Boostrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OurCommitementSection = () => {
    return (
        <Container>
            <Row>
                <Col lg={6} sm={12} className="py-3">
                    <Container>
                        <img
                            src="/assets/img/our-commitment.jpg"
                            alt="image of people hugging earth"
                            className="img-fluid"
                        />
                    </Container>
                </Col>
                <Col className="py-3 text-centr d-flex align-items-center lh-lg">
                    <Container>
                        <h2 className="about-title">Our Commitement</h2>
                        <p>We live in a world where the consequences of single-use plastics and excessive waste have become all too apparent. Climate change, pollution, and the depletion of natural resources are urgent global challenges. </p>
                        <p>We believe that positive change begins with individual choices, and that's where Sustainishop comes in. We have carefully curated our collection of products to help you reduce your environmental footprint.</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default OurCommitementSection