import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



const AddToCartButtons = () => {
    return (
        <Container className="d-flex justify-content-evenly" >
            <Link to="/" className="m-2">
                <Button>Keep Shopping</Button>
            </Link>
            <Link to="/cart" className="m-2">
                <Button>Go to cart</Button>
            </Link>
        </Container>
    )
}

export default AddToCartButtons