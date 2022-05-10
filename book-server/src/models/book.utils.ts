import {Book, BookSection} from "./book";
import {mockOdes} from "../scrape/mocks/mock-odes";

export const sectionReducer = (array: BookSection[], section: BookSection): BookSection[] => {
    if (typeof section.content === "string") return array.concat([section])
    return array.concat(flattenBookContent(section.content))
}

export const flattenBookContent = (content: BookSection[]) => {
    return content.reduce(sectionReducer, [])
}

export const provideUids = (content: BookSection[]) => {
    let uid = 0
    return content.map((section: BookSection) => {
        section.uid = uid++;
        return section;
    })
}

export const formatBook = (book: Book) => {
    const {content} = book
    let uid = 0
    flattenBookContent(content).map((section: BookSection) => {
        section.uid = uid++;
        return section;
    })
    return {...book, content};
}

export const formatFlatBook = (book: Book) => {
    const content = provideUids(flattenBookContent(book.content));
    //console.log(JSON.stringify(book, null, 2))
    return {...book, content};
}

//console.log(formatFlatBook(mockOdes))
formatFlatBook(mockOdes)