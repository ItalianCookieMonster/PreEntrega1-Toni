import Form from 'react-bootstrap/Form';

const NotifyMeForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                />
            </Form.Group>
        </Form>
    )
}

export default NotifyMeForm