import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {useSelector} from "react-redux";
import {selectReader, setPath, setSection} from "../../domain/reducers/reader.reducer";
import {BookSection, ContentTableSection} from "../../domain/entities/books";
import {equal} from "../../utils/array";
import {sectionIsOpen} from "../../domain/entities/section.utils";

export const useSection = () => {
    const dispatch = useAppDispatch()
    const {content, section, path} = useAppSelector(selectReader)

    const chooseSection = (section: BookSection) => {
        dispatch(setSection(section))
    }

    const choosePath = (section: ContentTableSection, path: number[]) => {
        if (equal(section?.path || [], path) ) return;
        if (sectionIsOpen(section, path)) {
            const newPath = [...path]
            if (section.depth !== undefined)
                newPath[section.depth] = -1
            //console.log(newPath)
            dispatch(setPath(newPath))
        }
        dispatch(setPath(section.path))
    }

    const chooseSectionById = (uid: number) => {
        if (!content) return;
        const section = content?.find(s => s.uid === uid)
        dispatch(setSection(section))
    }

    const turnPage = (next: boolean) => {
        if (!content || !section?.uid) return;
        const index = next ? section.uid + 1 : section.uid - 1;
        const newSection = content[index];
        if (newSection) chooseSection(newSection);
    }

    return {
        ...useSelector(selectReader),
        choosePath,
        chooseSection,
        chooseSectionById,
        turnPage
    }
}