import {Document, ObjectId} from "mongodb";
import {Word} from "./word";

export interface User extends Document {
    email: string,
    password: string,
    username?: string,
    isActivated?: boolean
    activationLink: string
}