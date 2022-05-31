import {createAsyncThunk} from "@reduxjs/toolkit";
import {BookApi} from "../../api/book.api";
import {setBooks, setLoading} from "./books.reducer";

export const bookThunk = createAsyncThunk("books/get",
    async (params: Object | undefined, thunkApi) => {
    try {
        thunkApi.dispatch(setLoading(true))
        const books = await BookApi.getBookDescriptions(params)
        thunkApi.dispatch(setBooks(books))
    } catch (e) {
    } finally {
        thunkApi.dispatch(setLoading(false))
    }
})