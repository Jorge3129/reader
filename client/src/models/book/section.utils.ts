import {ContentTableSection} from "./books";

export const sectionIsOpen = (section: ContentTableSection, mainPath: number[]) => {
    const {path, depth} = section;
    if (path === undefined || depth === undefined) return false;
    return path[depth] === mainPath[depth]
}