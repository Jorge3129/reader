export interface PartialBook {
    title: string
    author: string
    language: string
    category?: string
    id?: string
}

export interface PartialBookSection {
    id?: number
    uid?: number
    title: string
    type?: string
}

export type BookSection = PartialBookSection & {
    content: string
}

export type Book = PartialBook & {
    content: BookSection[]
} & {[key: string] : string}

export type DeepBookSection = PartialBookSection & {
    content: string | DeepBookSection[]
}

export type DeepBook = PartialBook & {
    content: DeepBookSection[]
}

export type BookDescription = PartialBook

export type ContentTableSection = DeepBookSection & {
    path?: number[],
    depth?: number
}