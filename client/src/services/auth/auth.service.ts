import {LoginResponse, LoginValues} from "../../domain/types";
import {User} from "../../domain/entities/user"
import AuthApi from "../../api/auth.api"
import {removeFromStorage, saveToStorage} from "../browser/storage";

class AuthService {
    async logIn(data: LoginValues): Promise<LoginResponse> {
        const result = await AuthApi.logIn(data);
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