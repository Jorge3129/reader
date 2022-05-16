import React, {MouseEvent} from 'react';
import {useAppDispatch} from "../../domain/store/hooks";
import {setUser} from "../../domain/reducers/user.reducer";
import {useLocation, useNavigate} from "react-router-dom";
import MainContent from "../page/MainContent";

const AuthPage = () => {

    const dispatch = useAppDispatch()
    let navigate = useNavigate();
    let location = useLocation();

    // @ts-ignore
    let from = location.state?.from?.pathname || "/";

    const login = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(setUser(true))
        navigate(from, {replace: true});
    }

    return (
        <MainContent title="Login">
            <button onClick={login}>Log in</button>
        </MainContent>
    );
};

export default AuthPage;