/* eslint-disable react/prop-types */

//Boostrap component import
import Modal from 'react-bootstrap/Modal';

const ProductAddedModal = ({ handleClose, item, nrProds, show }) => {
    setTimeout(() => {
        handleClose()
    }, 3000)

    return (
        <Modal
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            show={show}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {nrProds} {nrProds > 1 ? 'items' : 'item'} added to cart 🎉
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Product: {item.name}</p>
            </Modal.Body>
        </Modal>
    )
}

export default ProductAddedModal