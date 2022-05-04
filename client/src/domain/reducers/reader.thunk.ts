import {createAsyncThunk} from "@reduxjs/toolkit";
import {setContent, setLoading} from "./reader.reducer";
import {BookApi} from "../../services/book.api";

export const readerThunk = createAsyncThunk("books/get",
    async (id: string, thunkApi) => {
        try {
            thunkApi.dispatch(setLoading(true))
            const book = await BookApi.getBookById(id)
            thunkApi.dispatch(setContent(book?.content))
        } catch (e) {
        } finally {
            thunkApi.dispatch(setLoading(false))
        }
    })