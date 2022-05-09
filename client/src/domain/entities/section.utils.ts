import {setPath} from "../reducers/reader.reducer";
import {ContentTableSection} from "./books";

export const sectionIsOpen = (section: ContentTableSection, mainPath: number[], log = false) => {
    const {path, depth} = section;
    if (path === undefined || depth === undefined) return false;
    if (path[depth] === mainPath[depth] && log)
    console.log(path[depth], mainPath[depth], path[depth] === mainPath[depth], section)
    return path[depth] === mainPath[depth]
}