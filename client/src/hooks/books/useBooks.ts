import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectBooks} from "../../domain/reducers/books.reducer";
import {useEffect} from "react";
import {bookThunk} from "../../domain/reducers/books.thunk";

export const useBooks = () => {
    const {books, loading} = useAppSelector(selectBooks)
    return {books, loading}
}

export const useFetchBooks = (params?: {page?: number, size?: number}) => {
    const {books} = useAppSelector(selectBooks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (books?.length) return;
        dispatch(bookThunk(params))
    }, [])
}