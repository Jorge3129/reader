import {selectReader} from "../../store/reducers/reader/reader.reducer";
import {useAppSelector} from "../../store/hooks";

export const useReader = () => {
    return {...useAppSelector(selectReader)}
}