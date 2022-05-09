import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectReader} from "../../domain/reducers/reader.reducer";
import {useEffect} from "react";
import {readerThunk} from "../../domain/reducers/reader.thunk";

export const useFetchOneBook = () => {
    const dispatch = useAppDispatch()
    const {chosenBook, bookId} = useAppSelector(selectReader)

    useEffect(() => {
        const id = chosenBook?.id || localStorage.getItem("bookId")
        if (bookId === id) return;
        if (id) dispatch(readerThunk(id))
    }, [])
}