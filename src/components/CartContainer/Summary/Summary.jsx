/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Summary = ({ totalPrice, shipping, setShowForm, total }) => {
    return (
        <Container className="text-dark bg-light border border-dark my-3">
            <h4 className="my-3">Summary</h4>
            <p>Subtotal: {totalPrice}€</p>
            <p>Shipping: {shipping}€</p>
            <hr></hr>
            <p> <strong>Total: {total.toFixed(2)}€ </strong></p>
            <div className="d-flex justify-content-between">
                <Link to='/'>
                    <Button className="my-2"> Continue shopping </Button>
                </Link>
                <Button onClick={() => setShowForm(true)} className="my-2" >Checkout</Button>
            </div>
        </Container>
    )
}

export default Summary