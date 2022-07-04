import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Book, BookDescription} from "../../../models/book/books";
import {RootState} from "../../store";
import {BookResponse} from "../../../api/book.api";

interface IBookState {
    books: BookDescription[],
    loading: boolean,
    pages: number
}

const initialState: IBookState = {
    books: [],
    loading: false,
    pages: 1
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, {payload}: PayloadAction<BookDescription[]>) => {
            state.books = payload
        },
        setBooksAndPages: (state, {payload}: PayloadAction<BookResponse>) => {
            const {books, pages} = payload;
            state.books = books || []
            state.pages = pages === undefined ? 1 : pages
        },
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.loading = payload
        },
    }
})

export const selectBooks = (state: RootState) => state.books
export const {setBooks, setLoading, setBooksAndPages} = bookSlice.actions
export const bookReducer  = bookSlice.reducer