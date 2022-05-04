import {useAppDispatch, useAppSelector} from "../domain/store/hooks";
import {selectBooks} from "../domain/reducers/books.reducer";
import {useEffect} from "react";
import {bookThunk} from "../domain/reducers/books.thunk";
import {selectReader, setBook} from "../domain/reducers/reader.reducer";
import {BookDescription} from "../domain/entities/books";
import {useNavigate} from "react-router-dom";


export const useBooks = () => {
    const dispatch = useAppDispatch()
    const {books, loading} = useAppSelector(selectBooks)
    //const {books, loading} = useSelector(selectBooks)

    const navigate = useNavigate();

    const chooseBook = (book: BookDescription) => {
        dispatch(setBook(book))
        localStorage.setItem("bookId", book.id || "")
        navigate('/reader')
    }

    return {books, loading, chooseBook}
}

export const useFetchBooks = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(bookThunk())
    }, [])
}