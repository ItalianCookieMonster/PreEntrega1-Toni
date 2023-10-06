/**
 * The `useMyFormik` function is a custom hook that uses Formik to handle form validation and
 * submission, and returns the Formik object.
 * @param handleCheckout - handleCheckout is a function that will be called when the form is submitted.
 * It takes the form values as an argument and performs some action, such as submitting the form data
 * to a server.
 * @param setShowForm - `setShowForm` is a function that is used to control the visibility of the form.
 * It is typically used to show or hide the form based on certain conditions or user interactions.
 * @returns The code is returning an object with a property called "formik" which contains the
 * useFormik hook.
 */

import { useFormik } from "formik";
import * as Yup from 'yup';

export const useMyFormik = (handleCheckout, setShowForm) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            privacy: false
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('A name is required')
                .max(40, 'Should be 40 characters or less'),
            email: Yup.string()
                .email('Invalid email')
                .required('An email is required'),
            phoneNumber: Yup.string()
                .required("A phone number is required"),
            privacy: Yup.bool()
                .oneOf([true], 'You need to accept the terms and conditions')
        }),
        onSubmit: (values) => {
            handleCheckout(values)
            setShowForm(false)
        }
    })

    return { formik }
}