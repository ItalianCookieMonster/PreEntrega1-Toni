import { Link } from 'react-router-dom'

import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (

        <footer className="font-small pt-3 bg-primary text-light mt-auto ">
            <Container className="text-md-left border-top">
                <Row className="align-items-baseline">
                    <Col className="footer-copyright text-center py-3 d-flex align-items-center">
                        © 2023 Copyright:
                        <Link to='/'>Sustainishop.com</Link>
                    </Col>

                    <Col className="mb-md-0 mb-3 d-flex justify-content-end align-items-center">
                        <ul className="list-unstyled d-flex">
                            <li>
                                <a href='https://www.facebook.com/' className='p-3'>
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/' className='p-3'>
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.pinterest.com/' className='p-3'>
                                    <i className="bi bi-pinterest"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </footer>

    )
}

export default Footer