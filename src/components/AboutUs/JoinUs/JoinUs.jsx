/* eslint-disable react/no-unescaped-entities */
//Custom hooks
import { useMyFormik } from '../../../hooks/useMyFormik'

// Boostrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//My components 
import JoinUsForm from '../../Forms/JoinUsForm/JoinUsForm';

const JoinUs = () => {
    
    const { formikSignUp } = useMyFormik();

    return (
        <Container className="border-top border-dark my-5 py-4">
            <h2 className="about-title">Join Us</h2>
            <Row>
                <Col lg={6} sm={12} className="py-3 text-centr lh-lg">
                    <Container className="py-4">
                        <p>We invite you to join us on this journey towards a more sustainable future. Together, we can make a significant impact on the health of our planet for generations to come. </p>
                        <p> Sign up on our newsletter, get a 10% discount, and let's take steps towards a cleaner, greener, and more sustainable world.</p>
                    </Container>
                </Col>
                <Col className="py-3">
                    <Container>
                        <JoinUsForm formik={formikSignUp} />
                    </Container>

                </Col>
            </Row>
        </Container>
    )
}

export default JoinUs