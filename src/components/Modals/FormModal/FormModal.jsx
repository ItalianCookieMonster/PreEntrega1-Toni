/* eslint-disable react/prop-types */
//Boostrap component import
import Modal from 'react-bootstrap/Modal'

//Component imports
import CartForm from "../../Forms/CartForm/CartForm"

/**
 * The FormModal component is a modal that displays a form for the user to fill out, with a title,
 * body, and footer displaying the total price.
 * 
 */

const FormModal = ({ handleClose, show, totalPrice, handleOnChange, formik }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>One last step ...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CartForm
                    handleOnChange={handleOnChange}
                    formik={formik}
                />
            </Modal.Body>
            <Modal.Footer>
                <h5>Total Price: {totalPrice.toFixed(2)}€</h5>
            </Modal.Footer>
        </Modal>
    )
}

export default FormModal