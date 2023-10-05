/* eslint-disable react/prop-types */
import {useState} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalSimple = ({ message }) => {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <Button onClick={() => setSmShow(true)} className="me-2">
                Small modal
            </Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Ooops!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
            </Modal>
        </>
    )
}

export default ModalSimple