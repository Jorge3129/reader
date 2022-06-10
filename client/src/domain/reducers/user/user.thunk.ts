import {createAsyncThunk} from "@reduxjs/toolkit";
import {setUser, setLoading} from "./user.reducer";
import AuthApi from "../../../api/auth.api";
import {saveToStorage} from "../../../services/browser/storage";

export const userThunk = createAsyncThunk("books/get",
    async (_: void, thunkApi) => {
        try {
            thunkApi.dispatch(setLoading(true))
            const res = await AuthApi.refresh()
            saveToStorage('token', res.accessToken)
            thunkApi.dispatch(setUser(res.user))
        } catch (e: any) {
            console.log(e);
        } finally {
            thunkApi.dispatch(setLoading(false))
        }
    })