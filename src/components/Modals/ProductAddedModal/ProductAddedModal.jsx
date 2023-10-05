/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';

import AddToCartButtons from '../../AddToCartButtons/AddToCartButtons';

const ProductAddedModal = ({ handleClose, item, items, totalPrice, show }) => {
    setTimeout(() => {
        handleClose
    }, 3000)

    return (
        <Modal
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {items} {item > 1 ? 'items' : 'item'} added to cart 🎉
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Product: {item.name}</p>
                <p>Price: {item.price}€</p>
                <hr />
                <p>Subtotal: {totalPrice}€</p>
            </Modal.Body>
            <Modal.Footer>
                <AddToCartButtons/>
            </Modal.Footer>
        </Modal>
    )
}

export default ProductAddedModal