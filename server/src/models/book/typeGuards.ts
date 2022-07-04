import {BookSection, ContainerSection, TextSection} from "./book";

export const isTextSection = (section: BookSection): section is TextSection  => {
    return (typeof section.textContent === "string")
}
export const isContainerSection = (section: BookSection): section is ContainerSection  => {
    return Array.isArray(section.children)
}