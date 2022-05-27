import {ObjectId} from "mongodb";

export interface UserData {
    userId: ObjectId
    words: number[]
    recentBooks: ObjectId[]
}