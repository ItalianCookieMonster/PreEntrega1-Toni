/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const IDModal = ({ show, handleClose, orderID }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You're order is on the way!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order ID is: {orderID}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Link to="/">
                        <Button variant="primary" onClick={handleClose}>
                            Go back to home
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default IDModal