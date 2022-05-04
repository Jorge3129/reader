import {useAppDispatch, useAppSelector} from "../domain/store/hooks";
import {selectBooks} from "../domain/reducers/books.reducer";
import {selectWord} from "../domain/reducers/word.reducer";
import {wordThunk} from "../domain/reducers/word.thunk";


export const useDictionary = () => {
    const dispatch = useAppDispatch()
    const {query, result, loading} = useAppSelector(selectWord)

    const searchWord = async (word: string) => {
        dispatch(wordThunk(word))
    }

    return {result, loading, searchWord}
}