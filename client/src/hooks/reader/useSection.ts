import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {useSelector} from "react-redux";
import {selectReader, setPath, setSection} from "../../domain/reducers/reader.reducer";
import {ContentTableSection} from "../../domain/entities/books";
import {sectionIsOpen} from "../../domain/entities/section.utils";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const useSection = () => {
    const dispatch = useAppDispatch()
    const {content, section} = useAppSelector(selectReader)

    const choosePath = (section: ContentTableSection, path: number[]) => {
        if (sectionIsOpen(section, path)) {
            const newPath = [...path]
            if (section.depth !== undefined)
                newPath[section.depth] = -1
            dispatch(setPath(newPath))
        } else dispatch(setPath(section.path))
    }

    useEffect(() => {
        window.removeEventListener('onkeydown', handleKey)
        window.onkeydown = handleKey
    }, [content, section])

    const navigate = useNavigate()
    const {bookIdParam} = useParams()

    const handleKey = (e: any) => {
        const step = chooseStep(e.key)
        if (!content || section?.uid === undefined) return;
        const newId = section.uid + step;
        if (!content[newId]) return;
        navigate(`/reader/${bookIdParam}/${newId}`)
    }

    const chooseStep = (key: string) =>
        key === "ArrowLeft" ? -1 : key === "ArrowRight" ? 1 : 0

    return {
        ...useSelector(selectReader),
        choosePath,
    }
}