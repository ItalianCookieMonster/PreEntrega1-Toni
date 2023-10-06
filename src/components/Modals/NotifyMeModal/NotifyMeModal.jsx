/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
//Boostrap imports
import Modal from 'react-bootstrap/Modal';

//Components imports
import NotifyMeForm from '../../Forms/NotifyMeForm/NotifyMeForm';


const NotifyMeModal = ({ handleClose, show }) => {
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title> We'll notify you when is back!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NotifyMeForm />
            </Modal.Body>
        </Modal>
    )
}

export default NotifyMeModal