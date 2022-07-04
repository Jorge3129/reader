import {User} from "./user";

export interface SortOption {
    prop: string
    asc: boolean
}

export interface FilterOption {
    prop: string
    value: any
}

export interface SignupValues {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface LoginValues {
    email: string
    password: string
}

export interface IError {
    message: string
    error?: any
}

export type WithError<T> = T | IError
export type Null<T> = T | null

export interface LoginResponse {
    success?: boolean
    message?: string
    user?: User
}