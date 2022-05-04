import {createSlice} from "@reduxjs/toolkit";
import {Book} from "../entities/books";
import {RootState} from "../store/store";

interface IBookState {
    books: Book[],
    loading: boolean
}

const initialState: IBookState = {
    books: [],
    loading: false
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, {payload}) => {
            state.books = payload
        },
        setLoading: (state, {payload}) => {
            state.loading = payload
        },
    }
})

export const selectBooks = (state: RootState) => state.books
export const {setBooks, setLoading} = bookSlice.actions
export const bookReducer  = bookSlice.reducer