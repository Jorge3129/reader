import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectBooks} from "../../domain/reducers/books.reducer";
import {useEffect} from "react";
import {bookThunk} from "../../domain/reducers/books.thunk";
import {setChosenBook} from "../../domain/reducers/reader.reducer";
import {BookDescription} from "../../domain/entities/books";
import {useNavigate} from "react-router-dom";


export const useBooks = () => {
    const dispatch = useAppDispatch()
    const {books, loading} = useAppSelector(selectBooks)

    const navigate = useNavigate();

    const chooseBook = (book: BookDescription) => {
        dispatch(setChosenBook(book))
        localStorage.setItem("bookId", book.id || "")
        navigate('/reader')
    }

    return {books, loading, chooseBook}
}

export const useFetchBooks = () => {
    const {books} = useAppSelector(selectBooks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log(books)
        if (books?.length) return;
        dispatch(bookThunk())
    }, [])
}