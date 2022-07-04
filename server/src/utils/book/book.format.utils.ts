import {Book, BookSection, ContentTableSection, TextSection} from "../../models/book/book";
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
    addFirstAndLast(flattenBookContent(content)).map((section: TextSection) => {
        section.uid = uid++;
        section.textContent = section.textContent.replace(/^[\n\r]*/g, '')
        return section;
    })
    return {...book, content: formatStructure(content)};
}

export const addFirstAndLast = (content: TextSection[]) => {
    return content.map((s, i, {length}) => {
        if (i === 0) s.first = true;
        else if (i === length - 1) s.last = true;
        return s;
    })
}

export const formatStructure = (structure: ContentTableSection[], depth = 0, path: number[] = []): ContentTableSection[] => {
    return structure
        .map((s, i) => ({...s, path: [...path, i], depth}))
        .map(s => isTextSection(s) ? s :
            {...s, children: formatStructure(s.children, depth + 1, s.path)}
        )
}

//console.log(formatFlatBook(mockOdes))
// formatFlatBook(mockOdes)