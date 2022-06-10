import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectWord} from "../../domain/reducers/dictionary/word.reducer";
import {wordThunk} from "../../domain/reducers/dictionary/word.thunk";

export const useDictionary = () => {
    const dispatch = useAppDispatch()
    const {query, result, loading} = useAppSelector(selectWord)

    const searchWord = async (word: string) => {
        dispatch(wordThunk(word))
    }

    return {result, loading, searchWord}
}