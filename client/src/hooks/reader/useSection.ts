import {useAppDispatch} from "../../domain/store/hooks";
import {useSelector} from "react-redux";
import {selectReader, setPath} from "../../domain/reducers/reader/reader.reducer";
import {ContentTableSection} from "../../domain/entities/book/books";
import {sectionIsOpen} from "../../domain/entities/book/section.utils";
import {selectSection} from "../../domain/reducers/reader/section.reducer";

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
        ...useSelector(selectSection),
        choosePath,
    }
}