import {createAsyncThunk} from "@reduxjs/toolkit";
import {setBook, setContent, setLoading, setSection, setStructure} from "./reader.reducer";
import {BookApi} from "../../services/book.api";

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