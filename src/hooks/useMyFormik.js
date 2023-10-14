import { useFormik } from "formik";
import * as Yup from 'yup';

export const useMyFormik = (handleCheckout, setShowForm) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            privacy: false,
            surname: '',
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
        },

    })

    const formikSignUp = useFormik({
        initialValues: {
            name: '',
            email: '',
            surname: '',
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required('A name is required')
                .max(40, 'Should be 40 characters or less'),
            email: Yup.string()
                .email('Invalid email')
                .required('An email is required'),
            surname: Yup.string()
                .required('A surname is required')
                .max(40, 'Should be 40 characters or less'),
        }),
        onSubmit: (values) => {
            console.log(values)
        },
    })

    const formikContact = useFormik({
        initialValues: {
            name: '',
            email: '',
            surname: '',
            message: '',
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required('A name is required')
                .max(40, 'Should be 40 characters or less'),
            email: Yup.string()
                .email('Invalid email')
                .required('An email is required'),
            surname: Yup.string()
                .required('A surname is required')
                .max(40, 'Should be 40 characters or less'),
            message: Yup.string()
                .required('A message is required')
            
        }),

        onSubmit: (values) => {
            console.log(values)
        },
    })

    return { formik, formikSignUp, formikContact}
}