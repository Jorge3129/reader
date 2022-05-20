import React from 'react';
import {useAuth} from "../../hooks/auth/useAuth";
import {SignupValues} from "../../domain/types";
import {Field, Form, Formik, FormikHelpers} from "formik";
import MainContent from "../page/MainContent";

const SignupPage = () => {
    const {signUp} = useAuth()

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
    }

    const handleSubmit = async (
        values: SignupValues,
        {setSubmitting}: FormikHelpers<SignupValues>
    ) => {
        //const result = await
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }

    return (
        <MainContent title="Signup">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="John"/>

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe"/>

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="johndoe@gmail.com"
                        type="email"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </MainContent>
    );
};

export default SignupPage;