/* eslint-disable react/no-unescaped-entities */
// Boostrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const OurTeamSection  = () => {
    return (
        <Container>
            <Row>
                <Col lg={6} sm={12} className="py-3 text-centr d-flex align-items-center lh-lg">
                    <Container>
                        <h2 className="about-title">Our Team</h2>
                        <p> Sustainishop is a labor of love created by a team of dedicated individuals who are passionate about sustainability. We are not just sellers; we are advocates for a more sustainable world.</p>
                        <p>Our commitment extends beyond our products to every aspect of our business operations. We strive to minimize our own environmental footprint through responsible sourcing, eco-friendly packaging, and ethical practices.</p>
                    </Container>
                </Col>
                <Col className="py-3" >
                    <Container>
                        <img
                            src="/assets/img/team-in-the-wood.jpg"
                            alt="image of people hugging in the wood"
                            className="img-fluid"
                        />
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default OurTeamSection