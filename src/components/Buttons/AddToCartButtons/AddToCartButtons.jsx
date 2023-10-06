
// React-router-dom imports
import { Link } from 'react-router-dom'

//Boostrap component imports
import Container from 'react-bootstrap/Container'

// Component imports
import MyButton from '../MyButton/MyButton'

const AddToCartButtons = () => {
    return (
        <Container className="d-flex justify-content-evenly">
            <Link to="/" className="m-2">
                <MyButton text='Keep Shopping' />
            </Link>
            <Link to="/cart" className="m-2">
                <MyButton text='Go to Cart' />
            </Link>
        </Container>
    )
}

export default AddToCartButtons