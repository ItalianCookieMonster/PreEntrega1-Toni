/* eslint-disable react/prop-types */

import Offcanvas from 'react-bootstrap/Offcanvas'
import AddToCartButtons from '../AddToCartButtons/AddToCartButtons'

const MyOffCanvas = ({ show, handleClose, items, totalPrice, item }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{items} {item > 1 ? 'items' : 'item'} added to cart 🎉</Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
                <p>Product: {item.name}</p>
                <p>Price: {item.price}€</p>
                <hr />
                <p>Subtotal: {totalPrice}€</p>
                <AddToCartButtons/>
            </Offcanvas.Body>
            
        </Offcanvas>
    )
}

export default MyOffCanvas