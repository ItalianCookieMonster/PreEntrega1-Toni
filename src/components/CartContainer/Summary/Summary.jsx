/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';

import MyButton from "../../Buttons/MyButton/MyButton";

const Summary = ({ totalPrice, shipping, setShowForm, total }) => {
    const rest = 80 - totalPrice
    return (
        <Container className="text-dark bg-light border border-dark my-3" width='400px'>
            <h4 className="my-3">Summary</h4>
            <p>Subtotal: {totalPrice.toFixed(2)}€</p>
            {shipping > 0 && <p>Shipping: {shipping} </p>}
            {shipping === 0 && <p><strong>Free shipping</strong></p>}
            {totalPrice >= 65 && <p className='text-danger'>Just {rest.toFixed(2)}€ more to get free shipping</p>}
            <hr></hr>
            <p> <strong>Total: {total.toFixed(2)}€ </strong></p>
            <div className="d-flex justify-content-between">
                <Link to='/'>
                    <MyButton className="my-2" text='Continue shopping' />
                </Link>
                <MyButton text='Checkout' onClick={() => setShowForm(true)} className="my-2" />
            </div>
        </Container>
    )
}

export default Summary