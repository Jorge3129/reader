import {Document, ObjectId} from "mongodb";
import {Line} from "../../utils/text/types";

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

export type TextSection = PartialBookSection & {
    textContent: string
}

export type SplitTextSection = PartialBookSection & {
    lines: Line[]
}

export type FlatBook = PartialBook & {
    content: TextSection[]
}

export type ContainerSection = PartialBookSection & {
    children: Array<TextSection | ContainerSection>
}

export type BookSection = TextSection | ContainerSection

export type ContentTableSection = BookSection & {
    path?: number[],
    depth?: number
}

export type Book = PartialBook & {
    content: BookSection[]
}

export type ContentBook = PartialBook & {
    content: ContentTableSection[]
}