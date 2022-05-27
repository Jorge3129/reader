import {LoginResponse, LoginValues, WithError} from "../domain/types";
import {httpClient} from "./http.client";
import {BOOK_SERVER_URL} from "../constants/api";
import {AuthResponse} from "../domain/entities/auth";

const MY_URL = BOOK_SERVER_URL + "/auth"

class AuthApi {
    async login(data: LoginValues): Promise<AuthResponse> {
        try {
            const res = await httpClient.post<AuthResponse>(MY_URL + "/login", {...data});
            return res.data;
        } catch (e: any) {
            console.log(e.response.data)
            return e.response.data;
        }
    }

    async signup(data: LoginValues): Promise<any> {
        try {
            const res = await httpClient.post(MY_URL + "/register", {...data});
            return res.data;
        } catch (e: any) {
            console.log(e)
            return e.response?.data;
        }
    }

    async logout(data: LoginValues): Promise<any> {
        try {
            const res = await httpClient.post(MY_URL + "/logout", {...data});
            return res.data;
        } catch (e: any) {
            console.log(e.response?.data)
            return e.response?.data;
        }
    }

    async refresh(): Promise<AuthResponse> {
        try {
            const res = await httpClient.get<AuthResponse>(MY_URL + "/refresh", {withCredentials: true});
            return res.data;
        } catch (e: any) {
            console.log(e.response?.data)
            return e.response?.data;
        }
    }
}

export default new AuthApi()