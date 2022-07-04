import {BookDescription} from "../../../src/models/book/books";

export const mockBooks: BookDescription[] = [
    {title: "Odes", author: "Horace", language: "Latin", id: "1", type: "poetry", genre: ["lyrics"]},
    {
        title: "De Rerum Natura",
        author: "Lucretius",
        language: "Latin",
        id: "2",
        type: "poetry",
        genre: ["didactic poem"]
    },
    {
        title: "Romeo and Juliet",
        author: "Shakespeare",
        language: "English",
        id: "3",
        type: "drama",
        genre: ["tragedy"]
    },
]