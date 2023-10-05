/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal'
import CartForm from "../../Forms/CartForm/CartForm"

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
                <h5>Total Price: {totalPrice}€</h5>
            </Modal.Footer>
        </Modal>
    )
}

export default FormModal