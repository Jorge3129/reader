import React from 'react';
import {useAuth} from "../../hooks/auth/useAuth";
import {SignupValues} from "../../models/types";
import MainContent from "../page/MainContent";
import {useForm} from "react-hook-form";
import {FormStyled, SubmitButton} from "./styles";
import Field from "./Field";
import {useNavigate} from "react-router-dom";

const SignupPage = () => {
    const {signUp} = useAuth()

    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    const {register, handleSubmit, formState} = useForm<SignupValues>({defaultValues});
    const {errors} = formState;

    const navigate = useNavigate();

    const onSubmit = async (data: SignupValues) => {
        console.log(formState.isValid)
        if (!formState.isValid) {
            return;
        }
        const error = await signUp(data);
        if (error?.message) alert(error.message)
        else navigate('/login')
    }

    const validatePassword = () => {

    }

    return (
        <MainContent title="Sign up">
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <Field error={errors.email}>
                    <label htmlFor="email">Email</label>
                    <input {...register("email", {required: true})} placeholder="johndoe@gmail.com"/>
                    <span>
                        {errors.email && errors.email.type === "required" &&
                            <span className="form_error">Email is required</span>}
                    </span>
                </Field>
                <Field error={errors.password}>
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password", {required: true, min: 2})} placeholder="password"/>
                    <span>{errors.password && errors.password.type === "required" &&
                        <span className="form_error">Password is required</span>}
                    </span>
                </Field>
                <SubmitButton type="submit" onClick={e => console.log(formState.errors)}>Submit</SubmitButton>
            </FormStyled>
        </MainContent>
    );
};

export default SignupPage;