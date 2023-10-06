//React imports
import { useEffect } from 'react';
import { useState } from 'react';

//External libraries imports
import { NavLink } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

//Boostrap components imports
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Components imports
import CartWidget from '../CartWidget/CartWidget';
import Loading from '../Loading/Loading';


const NavBar = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'categories')
        getDocs(queryCollection)
            .then((res) => (setCategories(res.docs.map((cat) => ({ id: cat.id, ...cat.data() })))))
            .then(setLoading(false))
            .catch(err => console.log(err))
    }, [])

    return (

        <Navbar expand='lg' className='bg-accent'>
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
                        <NavLink role='button' className='nav-link' tabIndex={0} to='/'>Home</NavLink>
                        <NavLink role='button' className='nav-link' tabIndex={0} to='/about'>About us</NavLink>
                        <NavLink role='button' className='nav-link' tabIndex={0} to='/contact'>Contact us</NavLink>
                        <NavDropdown title="Shop" id="collasible-nav-dropdown" >
                            {loading ? <Loading /> :
                                <>
                                    {categories.map(cat => <li className="dropdown-item" key={cat.id}>
                                    <NavLink to={`/category/${cat.slug}`} className='nav-link'>{cat.name}</NavLink>
                                    </li>)}
                                </>

                            }
                        </NavDropdown>
                    </Nav>
                    <Nav>
                    <NavLink to='/cart' className='nav-link'>
                            <CartWidget />
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    )
}

export default NavBar