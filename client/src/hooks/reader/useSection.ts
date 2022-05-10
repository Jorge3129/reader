import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {useSelector} from "react-redux";
import {selectReader, setPath, setSection} from "../../domain/reducers/reader.reducer";
import {ContentTableSection} from "../../domain/entities/books";
import {sectionIsOpen} from "../../domain/entities/section.utils";
import {useEffect} from "react";

export const useSection = () => {
    const dispatch = useAppDispatch()
    const {content, section} = useAppSelector(selectReader)

    const chooseSection = (section: ContentTableSection) => {
        if (section.path) dispatch(setPath(section.path))
        dispatch(setSection(section))
    }

    const choosePath = (section: ContentTableSection, path: number[]) => {
        if (sectionIsOpen(section, path)) {
            const newPath = [...path]
            if (section.depth !== undefined)
                newPath[section.depth] = -1
            dispatch(setPath(newPath))
        } else dispatch(setPath(section.path))
    }

    const chooseSectionById = (uid: number) => {
        if (!content) return;
        const section = content?.find(s => s.uid === uid)
        if (section) chooseSection(section)
    }

    const turnPage = (next: boolean) => {
        if (!content || !section?.uid) return;
        const index = next ? section.uid + 1 : section.uid - 1;
        const newSection = content[index];
        if (newSection) chooseSection(newSection);
    }

    useEffect(() => {
        window.removeEventListener('onkeydown', handleKey)
        window.onkeydown = handleKey
    }, [content, section])

    const handleKey = (e: any) => {
        console.log(e.key)
        if (e.key === "ArrowLeft") turnPage(false)
        if (e.key === "ArrowRight") turnPage(true)
    }

    return {
        ...useSelector(selectReader),
        choosePath,
        chooseSection,
        chooseSectionById,
        turnPage
    }
}