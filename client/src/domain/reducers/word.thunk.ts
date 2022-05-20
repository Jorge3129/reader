import {createAsyncThunk} from "@reduxjs/toolkit";
import {LatinApi} from "../../api/latin.api";
import {setLoading, setResult} from "./word.reducer";

export const wordThunk = createAsyncThunk("word/get",
    async (query: string, thunkApi) => {
    try {
        thunkApi.dispatch(setLoading(true))
        const result = await LatinApi.queryWord(query)
        thunkApi.dispatch(setResult(result.filter((v: any) => v.type.name !== "phrase")))
    } catch (e) {
    } finally {
        thunkApi.dispatch(setLoading(false))
    }
})