/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const CartForm = ({ formik }) => {
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                />
                {formik.errors.name && <small className='text-danger'>{formik.errors.name}</small>}
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    autoFocus
                />
                {formik.errors.email && <small className='text-danger'>{formik.errors.email}</small>}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder="Phone number"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    autoFocus
                />
                {formik.errors.phoneNumber && <small className='text-danger'>{formik.errors.phoneNumber}</small>}
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label="I agree with privacy policy"
                    name="privacy"
                    value={formik.values.privacy}
                    onChange={formik.handleChange}
                    autoFocus
                />
                {formik.errors.privacy && <small className='text-danger'>{formik.errors.privacy}</small>}
            </Form.Group>

            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CartForm
