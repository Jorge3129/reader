import {LoginResponse, LoginValues} from "../../models/types";
import AuthApi from "../../api/auth.api"
import {removeFromStorage, saveToStorage} from "../browser/storage";
import {AuthResponse} from "../../models/auth";

class AuthService {
    async login(data: LoginValues): Promise<AuthResponse> {
        const result = await AuthApi.login(data);
        saveToStorage('token', result.accessToken)
        return result;
    }

    async signup(data: LoginValues): Promise<LoginResponse> {
        const result = await AuthApi.signup(data);
        if (result.success) {
            saveToStorage("user", result.user)
            return result;
        }
        return result;
    }

    async logOut(): Promise<any> {
        removeFromStorage('token')
    }
}


export const authService = new AuthService()