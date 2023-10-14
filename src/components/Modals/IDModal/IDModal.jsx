/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
//React-router-dom imports
import { Link } from "react-router-dom";

//Boostrap compoents imports
import Modal from "react-bootstrap/Modal";

//Components imports
import MyButton from "../../Buttons/MyButton/MyButton";

const IDModal = ({ show, handleClose, orderID }) => {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You're order is on the way!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order ID is: {orderID}</Modal.Body>
                <Modal.Footer>
                    <MyButton variant="secondary" onClick={handleClose} text="Close" />
                    <Link to="/">
                        <MyButton variant="primary" onClick={handleClose} text="Go back home" />
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default IDModal