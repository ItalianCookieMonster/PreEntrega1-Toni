/* eslint-disable react/prop-types */
//Boostrap imports
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

// My components 
import MyButton from '../../Buttons/MyButton/MyButton';


const WriteUsForm = ({ formik }) => {
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="my-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                />
                {formik.errors.name && <small className='text-danger'>{formik.errors.name}</small>}
            </Form.Group>
            <Form.Group className="my-2">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="my-2">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    autoFocus
                />
                {formik.errors.email && <small className='text-danger'>{formik.errors.email}</small>}
            </Form.Group>
            <Form.Group className="my-2">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    autoFocus
                />
                {formik.errors.email && <small className='text-danger'>{formik.errors.message}</small>}
            </Form.Group>
            <Container className="text-end">
                <MyButton type="submit" text="Send" className="mx-auto" />
            </Container>
        </Form>
    )
}

export default WriteUsForm