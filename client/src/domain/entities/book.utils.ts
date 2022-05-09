import {BookSection, ContentTableSection, DeepBookSection} from "./books";

export const sectionReducer = (array: DeepBookSection[], section: DeepBookSection): DeepBookSection[] => {
    if (typeof section.content === "string") return array.concat([section])
    return array.concat(flattenDeepBookContent(section.content))
}

export const flattenDeepBookContent = (content: DeepBookSection[]): BookSection[] => {
    return content.reduce(sectionReducer, []) as BookSection[]
}

export const formatStructure = (structure: ContentTableSection[], depth = 0, path: number[] = []): ContentTableSection[] => {
    return structure
        .map((s, i) => ({...s, path: [...path, i], depth}))
        .map(s => ({
            ...s,
            content: typeof s.content === "string" ? s.content : formatStructure(s.content, depth + 1, s.path)
        }))
}

export const findFirstSection = (structure: ContentTableSection[], depth = 0): number => {
    return typeof structure[0].content === "string" ? depth : findFirstSection(structure[0].content, depth + 1)
}

export const firstSectionPath = (structure: ContentTableSection[]) =>
    new Array(findFirstSection(structure)).fill(0)
