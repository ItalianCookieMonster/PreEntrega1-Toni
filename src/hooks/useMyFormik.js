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