import {BookSection, ContentTableSection, TextSection} from "./books";
import {isTextSection} from "./typeGuards";

export const sectionReducer = (array: BookSection[], section: BookSection): BookSection[] => {
    if (isTextSection(section)) return array.concat([section])
    return array.concat(flattenBookContent(section.children))
}

export const flattenBookContent = (content: BookSection[]): TextSection[] => {
    return content.reduce(sectionReducer, []) as TextSection[]
}

export const formatToShallowArray = (content: BookSection[]): TextSection[] => {
    return addFirstAndLast(flattenBookContent(content));
}

export const addFirstAndLast = (content: TextSection[]) => {
    return content.map((s, i, {length}) =>
        i === 0 ? {...s, first: true} : ((i === length - 1) ? {...s, last: true} : s))
}

export const formatStructure = (structure: ContentTableSection[], depth = 0, path: number[] = []): ContentTableSection[] => {
    return structure
        .map((s, i) => ({...s, path: [...path, i], depth}))
        .map(s => isTextSection(s) ? s :
            {...s, children: formatStructure(s.children, depth + 1, s.path)}
        )
}

export const findFirstSection = (structure: ContentTableSection[], depth = 0): number => {
    return isTextSection(structure[0]) ? depth : findFirstSection(structure[0].children, depth + 1)
}

export const firstSectionPath = (structure: ContentTableSection[]) =>
    new Array(findFirstSection(structure)).fill(0)
