import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';


// import '../../index.css';
import './NavBar.css';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-accent custom-navbar">
            <Container>
                <Navbar.Brand href="#home" className="text-beige">
                    <img
                        alt=""
                        src="/public/assets/img/SustainableLogo3.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Sustainishop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">About us</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <NavDropdown title="Shop" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> On-the-Go Essentials</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Kitchen Sustainability
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"> Bathroom Eco-Fixes </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Best sellers
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar