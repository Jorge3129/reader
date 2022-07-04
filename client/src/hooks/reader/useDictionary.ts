import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectWord} from "../../store/reducers/dictionary/word.reducer";
import {wordThunk} from "../../store/reducers/dictionary/word.thunk";

export const useDictionary = () => {
    const dispatch = useAppDispatch()
    const {query, result, loading} = useAppSelector(selectWord)

    const searchWord = async (word: string) => {
        dispatch(wordThunk(word))
    }

    return {result, loading, searchWord}
}