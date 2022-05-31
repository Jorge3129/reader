import MainContent from "../page/MainContent";
import {useAuth} from "../../hooks/auth/useAuth";
import {FC} from "react";
import {Field, Formik, FormikHelpers} from "formik"
import {LoginValues} from "../../domain/types";
import {FormStyled} from "./styles";

const LoginPage: FC<{ title?: string }> = () => {

    const {logIn} = useAuth()

    const initialValues = {
        email: '',
        password: ''
    }

    const handleSubmit = async (
        values: LoginValues,
        {setSubmitting}: FormikHelpers<LoginValues>
    ) => {
        const error = await logIn(values);
        if (error) alert(JSON.stringify(error, null, 2));
        setSubmitting(false);
    }

    return (
        <MainContent title="Login">
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <FormStyled>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="johndoe@gmail.com" type="email"/>
                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="password" type="password"/>
                    <button type="submit">Submit</button>
                </FormStyled>
            </Formik>
        </MainContent>
    );
};

export default LoginPage;