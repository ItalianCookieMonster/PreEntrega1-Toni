//Custom hooks
import { useMyFormik } from '../../../hooks/useMyFormik';

//Boostrap imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

//My components 
import WriteUsForm from '../../Forms/WriteUsForm/WriteUsForm';

const ContactContainer = () => {

    const { formikContact } = useMyFormik();

    return (
        <Container className="my-5">
            <Row>
                <Col sm={12} lg={6}>
                    <Container>
                        <h2 className="mb-5" >Write Us</h2>

                        <WriteUsForm formik={formikContact} />
                    </Container>
                </Col>

                <Col className="lh-lg d-flex align-items-center">
                    <Container className="border border-dark bg-white p-4">
                        <h3 className="mb-4">Contact Details</h3>
                        <p><strong>Phone:</strong> +34 786 8273</p>
                        <p><strong>Email:</strong> info@sustainishop.com</p>
                        <p><strong>Address:</strong> 123 Green Street
                            Sustainabilityville, EcoState 98765
                            Earth</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactContainer