import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectReader} from "../../domain/reducers/reader.reducer";
import {useEffect} from "react";
import {readerThunk} from "../../domain/reducers/reader.thunk";
import {useParams} from "react-router-dom";

export const useFetchOneBook = () => {
    const dispatch = useAppDispatch()
    const {chosenBook, bookId} = useAppSelector(selectReader)
    const {bookIdParam} = useParams()

    useEffect(() => {
        // const id = chosenBook?.id || localStorage.getItem("bookId")
        // if (bookId === id) return;
        if (bookIdParam) dispatch(readerThunk(bookIdParam))
    }, [])
}