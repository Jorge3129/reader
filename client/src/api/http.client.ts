import axios from "axios";
import {WithError} from "../domain/types";

class HttpClient {
    async get<T = any>(url: string) {
        return await axios.get<T>(url);
    }
    async post<T = any>(url: string, data: any) {
        return await axios.post<T>(url, data);
    }
}

export const httpClient = new HttpClient()