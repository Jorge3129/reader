import {Line} from "../../../utils/text/types";

export type BookType = "poetry" | "prose" | "drama"

export interface PartialBook {
    title: string
    author: string
    language: string
    category?: string
    id?: string
    type?: BookType
    genre?: string[]
}

export interface PartialBookSection {
    id?: number
    uid?: number
    title: string
    type?: string
}

export type TextSection = PartialBookSection & {
    textContent: string
    first?: boolean
    last?: boolean
}

export type SplitTextSection = {
    id?: number
    uid: number
    title: string
    type?: string
    path: number[],
    depth: number
    lines: Line[]
    first?: boolean
    last?: boolean
}

export type ContainerSection = PartialBookSection & {
    children: Array<TextSection | ContainerSection>
}

export type BookSection = TextSection | ContainerSection

export type Book = PartialBook & {
    content: TextSection[]
} & {[key: string] : any}

export type DeepBook = PartialBook & {
    content: BookSection[]
}

export type BookDescription = PartialBook

export type ContentTableSection = BookSection & {
    path: number[],
    depth?: number
}