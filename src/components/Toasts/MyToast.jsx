/* eslint-disable react/prop-types */
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

const MyToast = ({ show, handleClose, items, title, variant, delay, position }) => {
    return (
        <ToastContainer position={position} className="p-3" style={{ zIndex: '1000' }} delay={delay}>
            <Toast show={show} onClose={handleClose} variant={variant}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{title}</strong>
                </Toast.Header>
                <Toast.Body>{items} added to cart!</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default MyToast