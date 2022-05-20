import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {useSelector} from "react-redux";
import {selectReader, setPath, setSection} from "../../domain/reducers/reader.reducer";
import {ContentTableSection} from "../../domain/entities/books";
import {sectionIsOpen} from "../../domain/entities/section.utils";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {keyboard} from "../../constants/keyboard"

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

    const chooseStep = (key: string): number => {
        const map = {
            [keyboard.ARROW_RIGHT]: 1,
            [keyboard.ARROW_LEFT]: -1,
        }
        return map[key] || 0;
    }

    return {
        ...useSelector(selectReader),
        choosePath,
    }
}