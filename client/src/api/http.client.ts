import axios, {AxiosRequestConfig} from "axios";
import {BOOK_SERVER_URL} from "../constants/api";
import {getFromStorage, saveToStorage} from "../services/browser/storage";
import {AuthResponse} from "../domain/entities/auth";

const API_URL = BOOK_SERVER_URL

const client = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

client.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = {...config.headers}
    config.headers.Authorization = `Bearer ${getFromStorage('token')}`
    return config;
})

client.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
            saveToStorage('token', response.data.accessToken);
            return client.request(originalRequest);
        } catch (e) {
            console.log('Not authorized')
        }
    }
    throw error;
})

class HttpClient {
    async get<T = any>(url: string, config?: AxiosRequestConfig) {
        return await client.get<T>(url, config);
    }

    async post<T = any>(url: string, data: any) {
        return await client.post<T>(url, data);
    }

    async delete<T = any>(url: string, config?: AxiosRequestConfig) {
        return await client.delete<T>(url, config);
    }
}

export const httpClient = new HttpClient()