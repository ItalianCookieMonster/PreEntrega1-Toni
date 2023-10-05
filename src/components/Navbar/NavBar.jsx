import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (

        <Navbar expand='lg' bg='primary'>
            <Container>
                <NavLink className="navbar-brand text-beige" to="/">
                    <img
                        alt=""
                        src="/public/assets/img/SustainableLogo3.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Sustainishop
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/'>Home</Nav.Link>
                        <Nav.Link to='/'>About us</Nav.Link>
                        <Nav.Link to='/'>Contact us</Nav.Link>
                        <NavDropdown title="Shop" id="collasible-nav-dropdown" >
                            <li className="dropdown-item" >
                                <Nav.Link to='/category/on-the-go'>On the go</Nav.Link>
                            </li>
                            <li className="dropdown-item">
                                <Nav.Link to='/category/kitche'>Kitchen sustainability</Nav.Link>
                            </li>
                            <li className="dropdown-item">
                                <Nav.Link to='/category/bathroom'>Bathroom eco-fixeso</Nav.Link>
                            </li>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link to='/cart'>
                            <CartWidget />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    )
}

export default NavBar