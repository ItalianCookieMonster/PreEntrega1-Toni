import { Link, NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary text-beige">
            <div className="container-fluid">
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
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-beige active" to="/">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-beige active" to="/">About</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle text-beige active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </NavLink>
                            <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                                <li> <NavLink className="dropdown-item" to="/category/on-the-go">On-the-Go Essential</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li> <NavLink className="dropdown-item" to="/category/kitchen">Kitchen Sustainability</NavLink></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li> <NavLink className="dropdown-item" to="/category/bathroom">Bathroom Eco-Fixes</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar