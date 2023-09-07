import { Link } from 'react-router-dom'

import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <Container fluid className="bg-primary"> 
            <Row className="d-flex flex-wrap justify-content-between align-items-center text-beige mt-auto">
                <Col className="d-flex flex-wrap align-items-center" >
                    <Link to='/'>
                        <img src="/public/assets/img/SustainableLogo3.png" width="50" height="auto" />
                    </Link>
                    <span className="mx-2">© 2023 Company, Inc</span>
                </Col>
                <Col>
                    <ul className="nav justify-content-end list-unstyled d-flex">
                        <li className="ms-3 ">
                            <Link to='/' >
                                <i className="bi bi-facebook" height="24" width="24"></i>
                            </Link>
                        </li>
                        <li className="ms-3 ">
                            <Link to='/' >
                                <i className="bi bi-twitter" height="24" width="24"></i>
                            </Link>
                        </li>
                        <li className="ms-3 ">
                            <Link to='/' >
                                <i className="bi bi-instagram" height="24" width="24"></i>
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer