import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {useLocation, useNavigate} from "react-router-dom";
import {selectUser, setUser} from "../../store/reducers/user/user.reducer";
import {LoginResponse, LoginValues, SignupValues} from "../../models/types";
import {authService} from "../../services/auth/auth.service";

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(selectUser)
    const navigate = useNavigate();
    const location = useLocation();

    //@ts-ignore
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (values: LoginValues): Promise<LoginResponse | void> => {
        const res = await authService.login(values);
        if (!res.user) return res;
        dispatch(setUser(res.user))
        navigate(from, {replace: true});
    }

    const logOut = async () => {
        dispatch(setUser(null))
        const result = authService.logOut()
    }

    const signUp = async (values: SignupValues) => {
        return await authService.signup(values);
    }

    return {user, signUp, handleLogin, logOut,}
}