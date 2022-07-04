import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {keyBoardMap} from "../../constants/keyboard";
import {useAppSelector} from "../../store/hooks";
import {selectReader} from "../../store/reducers/reader/reader.reducer";
import {useReader} from "./useReader";
import {useSection} from "./useSection";


export const useKeyNavigation = () => {

    const {content} = useReader()
    const {section} = useSection()

    useEffect(() => {
        window.removeEventListener('onkeydown', handleKey)
        window.onkeydown = handleKey
        return () => window.removeEventListener('onkeydown', handleKey)
    }, [content, section])

    const navigate = useNavigate()
    const {bookIdParam} = useParams()

    const handleKey = (e: any) => {
        const step = chooseStep(e.key)
        if (!content || section?.uid === undefined || !step) return;
        const newId = section.uid + step;
        if (!content[newId]) return;
        navigate(`/reader/${bookIdParam}/${newId}`)
    }

    const chooseStep = (key: string) => keyBoardMap[key] || 0;
}