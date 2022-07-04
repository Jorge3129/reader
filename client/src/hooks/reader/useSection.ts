import {useAppDispatch} from "../../store/hooks";
import {useSelector} from "react-redux";
import {selectReader, setPath} from "../../store/reducers/reader/reader.reducer";
import {ContentTableSection} from "../../models/book/books";
import {sectionIsOpen} from "../../models/book/section.utils";
import {selectSection} from "../../store/reducers/reader/section.reducer";

export const useSection = () => {
    const dispatch = useAppDispatch()

    const choosePath = (section: ContentTableSection, path: number[]) => {
        if (sectionIsOpen(section, path)) {
            const newPath = [...path]
            if (section.depth !== undefined)
                newPath[section.depth] = -1
            dispatch(setPath(newPath))
        } else {
            dispatch(setPath(section.path))
        }
    }

    return {
        ...useSelector(selectReader),
        choosePath,
    }
}