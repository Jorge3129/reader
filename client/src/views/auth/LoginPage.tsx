import MainContent from "../page/MainContent";
import {useAuth} from "../../hooks/auth/useAuth";
import {FC} from "react";
import {LoginValues} from "../../models/types";
import {FormStyled, SubmitButton} from "./styles";
import {useForm} from 'react-hook-form'
import Field from "./Field";

const LoginPage: FC<{ title?: string }> = () => {

    const {handleLogin} = useAuth()

    const defaultValues = {
        email: '',
        password: ''
    }

    const {register, handleSubmit, formState: {errors}} = useForm<LoginValues>({defaultValues});

    const onSubmit = async (data: LoginValues) => {
        const error = await handleLogin(data);
        if (error) alert(JSON.stringify(error, null, 2));
    }

    return (
        <MainContent title="Login">
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <Field>
                    <label htmlFor="email">Email</label>
                    <input {...register("email", {required: true})} placeholder="johndoe@gmail.com"/>
                </Field>
                <Field>
                    <label htmlFor="password">Password</label>
                    <input {...register("password", {required: true})} placeholder="password"/>
                </Field>
                <SubmitButton type="submit">Submit</SubmitButton>
            </FormStyled>
        </MainContent>
    );
};

export default LoginPage;