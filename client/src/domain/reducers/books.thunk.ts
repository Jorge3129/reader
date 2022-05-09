import {createAsyncThunk} from "@reduxjs/toolkit";
import {BookApi} from "../../services/book.api";
import {setBooks, setLoading} from "./books.reducer";

export const bookThunk = createAsyncThunk("books/get",
    async (_, thunkApi) => {
    try {
        thunkApi.dispatch(setLoading(true))
        const books = await BookApi.getBookDescriptions()
        thunkApi.dispatch(setBooks(books))
    } catch (e) {
    } finally {
        thunkApi.dispatch(setLoading(false))
    }
})