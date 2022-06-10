import {selectReader} from "../../domain/reducers/reader/reader.reducer";
import {useAppSelector} from "../../domain/store/hooks";

export const useReader = () => {
    return {...useAppSelector(selectReader)}
}