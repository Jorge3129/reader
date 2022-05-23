import {LoginResponse, LoginValues} from "../../domain/types";
import AuthApi from "../../api/auth.api"
import {removeFromStorage, saveToStorage} from "../browser/storage";

class AuthService {
    async login(data: LoginValues): Promise<LoginResponse> {
        const result = await AuthApi.login(data);
        if (result.success) {
            saveToStorage("user", result.user)
            return result;
        }
        return result;
    }

    async signup(data: LoginValues): Promise<LoginResponse> {
        const result = await AuthApi.login(data);
        if (result.success) {
            saveToStorage("user", result.user)
            return result;
        }
        return result;
    }

    async logOut(): Promise<any> {
        removeFromStorage('user')
    }
}


export const authService = new AuthService()