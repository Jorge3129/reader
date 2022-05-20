import {Document} from "mongodb";

export interface User extends Document {
    email: string,
    password: string,
    username: string,
}