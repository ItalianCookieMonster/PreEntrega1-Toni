/* eslint-disable react/prop-types */
//Boostrap imports
import Form from 'react-bootstrap/Form'

//My components
import MyButton from "../../Buttons/MyButton/MyButton"

const JoinUsForm = ({ formik }) => {


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
            <MyButton type="submit" text="Sign up" className="mx-auto" />
        </Form>
    )
}

export default JoinUsForm