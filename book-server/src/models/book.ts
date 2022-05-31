import {Document, ObjectId} from "mongodb";

export type BookType = "poetry" | "prose" | "drama"

export interface PartialBook extends Document {
    title: string
    author: string
    language: string
    category?: string
    id?: ObjectId
    type?: BookType
    genre?: string[]
}

export interface PartialBookSection extends Document {
    id?: number
    uid?: number
    title: string
    type?: string
}

export type FlatBookSection = PartialBookSection & {
    content: string
}

export type FlatBook = PartialBook & {
    content: FlatBookSection[]
}

export type BookSection = PartialBookSection & {
    content: string | BookSection[]
}

export type Book = PartialBook & {
    content: BookSection[]
}
