import {createAsyncThunk} from "@reduxjs/toolkit";
import {setBook, setLoading} from "./reader.reducer";
import {setSection} from "./section.reducer";
import {BookApi} from "../../../api/book.api";

export const readerThunk = createAsyncThunk("books/get",
    async (id: string, thunkApi) => {
        try {
            thunkApi.dispatch(setLoading(true))
            thunkApi.dispatch(setSection(undefined))
            const book = await BookApi.getBookById(id)
            if (book) thunkApi.dispatch(setBook(book))
        } catch (e) {
        } finally {
            thunkApi.dispatch(setLoading(false))
        }
    })