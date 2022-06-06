import {Book, BookSection, TextSection} from "../../models/book/book";
import {mockOdes} from "../../scrape/mocks/mock-odes";
import {isTextSection} from "../../models/book/typeGuards";

export const sectionReducer = (array: BookSection[], section: BookSection): BookSection[] => {
    if (isTextSection(section)) return array.concat([section])
    return array.concat(flattenBookContent(section.children))
}

export const flattenBookContent = (content: BookSection[]): TextSection[] => {
    return content.reduce(sectionReducer, []) as TextSection[]
}

export const provideUids = (content: TextSection[]) => {
    let uid = 0
    return content.map((section: TextSection) => {
        section.uid = uid++;
        return section;
    })
}

export const formatBook = (book: Book) => {
    const {content} = book
    let uid = 0
    flattenBookContent(content).map((section: TextSection) => {
        section.uid = uid++;
        section.textContent = section.textContent.replace(/^[\n\r]*/g, '')
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