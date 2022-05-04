import { ObjectId } from "mongodb";

export interface Book {
    title: string
    author: string
    language: string
    content: string | BookSection[]
    category?: string
    id?: ObjectId
}

export interface BookSection {
    id?: number
    uid?: number
    title: string
    type?: string
    content: string | BookSection[]
}
