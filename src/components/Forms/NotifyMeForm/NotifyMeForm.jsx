/* eslint-disable react/prop-types */
//Boostrap imports
import Form from 'react-bootstrap/Form';

const NotifyMeForm = ({formik}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </Form.Group>
        </Form>
    )
}

export default NotifyMeForm