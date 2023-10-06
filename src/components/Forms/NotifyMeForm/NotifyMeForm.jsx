/* eslint-disable react/prop-types */
import { useState } from 'react'
//Boostrap imports
import Form from 'react-bootstrap/Form';
//Components imports
import MyButton from '../../Buttons/MyButton/MyButton'


const NotifyMeForm = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <div className='d-flex justify-content-end'>
                <MyButton onClick={handleClose} text='Send' />
            </div>
        </Form>
    )
}

export default NotifyMeForm