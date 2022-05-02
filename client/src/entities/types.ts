
export const Version  = {
    ORIGINAL : "original",
    TRANSLATION: "translation",
}

export type VersionType = typeof Version[keyof typeof Version]

export interface Book {
    title: string
    author: string
    originLanguage: string
}

export interface Original extends Book {
    type: "original"
    language: string
}

export interface BookVersion extends Book {
    type: "translation"
    language: string
}

// const book: BookVersion = {
//     type: "original",
//     book: {
//         title: "",
//         author: "",
//         language: ""
//     },
//     language: ""
// }