import {Document, ObjectId} from "mongodb";

export interface Token extends Document {
    user: ObjectId,
    refreshToken: string
}