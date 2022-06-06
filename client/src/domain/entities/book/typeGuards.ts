import {BookSection, ContainerSection, TextSection} from "./books";

export const isTextSection = (section: BookSection): section is TextSection  => {
    return 'textContent' in section;
}
export const isContainerSection = (section: BookSection): section is ContainerSection  => {
    return 'children' in section;
}