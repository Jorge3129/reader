import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {keyBoardMap} from "../../constants/keyboard";
import {useAppSelector} from "../../domain/store/hooks";
import {selectReader} from "../../domain/reducers/reader.reducer";


export const useKeyNavigation = () => {

    const {content, section} = useAppSelector(selectReader)

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

    const chooseStep = (key: string) => keyBoardMap[key] || 0;
}