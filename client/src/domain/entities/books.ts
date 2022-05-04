export interface Book {
    title: string
    author: string
    language: string
    content: BookSection[]
    category?: string
    id?: string
}

export interface BookSection {
    id?: number
    uid?: number
    title: string
    type?: string
    content: string
}

export type BookDescription = Omit<Book, "content">