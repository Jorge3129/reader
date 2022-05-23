import {LoginResponse, LoginValues, WithError} from "../domain/types";
import {httpClient} from "./http.client";
import {BOOK_SERVER_URL} from "../constants/api";

const MY_URL = BOOK_SERVER_URL + "/auth"

class AuthApi {
    async login(data: LoginValues): Promise<LoginResponse> {
        try {
            const res = await httpClient.post<LoginResponse>(MY_URL + "/login", {loginUser: data});
            return res.data;
        } catch (e: any) {
            if (e.response?.data) {
                console.log(e.response.data)
                return e.response.data;
            }
            return {message: e.message}
        }
    }

    async signup(data: LoginValues): Promise<LoginResponse> {
        try {
            const res = await httpClient.post<LoginResponse>(MY_URL + "/login", {loginUser: data});
            return res.data;
        } catch (e: any) {
            if (e.response?.data) {
                console.log(e.response.data)
                return e.response.data;
            }
            return {message: e.message}
        }
    }
}

export default new AuthApi()