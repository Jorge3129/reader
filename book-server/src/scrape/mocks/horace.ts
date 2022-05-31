import {Book} from "../../models/book";
import {arr} from "../latin-library/carm1";
import {arr2} from "../latin-library/carm2";
import {arr3} from "../latin-library/carm3";
import {arr4} from "../latin-library/carm4";
import {flattenBookContent, formatBook} from "../../models/book.utils";

export const horace: Book[] = [
    {
        title: "Odes",
        author: "Horace",
        language: "latin",
        category: "classics",
        genre: ["lyric poetry"],
        content: [
            {
                title: "I",
                type: "Book",
                content: arr.map(section => ({...section, type: "Ode"}))
            },
            {
                title: "II",
                type: "Book",
                content: arr2.map(section => ({...section, type: "Ode"}))
            },
            {
                title: "III",
                type: "Book",
                content: arr3.map(section => ({...section, type: "Ode"}))
            },
            {
                title: "IV",
                type: "Book",
                content: arr4.map(section => ({...section, type: "Ode"}))
            }
        ]
    },
]

export const formatOdes = (() => {
    const book2 = formatBook(horace[0])
    const mapContent2 = book2.content
    flattenBookContent(mapContent2).map(
        section => {
            section.content = section.content
                .replace(/\s{4,6}/g, '\n     ');
        }
    )
    return {...book2, content: mapContent2, _id: undefined}
})();