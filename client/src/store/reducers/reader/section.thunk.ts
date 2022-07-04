import {createAsyncThunk} from "@reduxjs/toolkit";
import {setLoading, setSection} from "./section.reducer";
import {BookApi} from "../../../api/book.api";

interface IParams {
    bookId: string,
    sectionId: number
}

export const sectionThunk = createAsyncThunk("books/get",
    async ({bookId, sectionId}: IParams, thunkApi) => {
        try {
            thunkApi.dispatch(setLoading(true))
            thunkApi.dispatch(setSection(undefined))
            const book = await BookApi.getSection(bookId, sectionId)
            if (book) thunkApi.dispatch(setSection(book))
        } catch (e) {
        } finally {
            thunkApi.dispatch(setLoading(false))
        }
    })