import {createAsyncThunk} from "@reduxjs/toolkit";
import {BookApi} from "../../api/book.api";
import {setBooksAndPages, setLoading} from "./books.reducer";

export const bookThunk = createAsyncThunk("books/get",
    async (params: Object | undefined, thunkApi) => {
    try {
        thunkApi.dispatch(setLoading(true))
        const data = await BookApi.getBookDescriptions(params)
        thunkApi.dispatch(setBooksAndPages(data))
    } catch (e) {
    } finally {
        thunkApi.dispatch(setLoading(false))
    }
})