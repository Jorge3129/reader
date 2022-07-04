import {createSlice} from "@reduxjs/toolkit";
import {IDictEntry} from "../../../models/words";
import {RootState} from "../../store";

interface IBookState {
    query?: string
    result?: IDictEntry[],
    loading: boolean
}

const initialState: IBookState = {
    loading: false
}

const wordSlice = createSlice({
    name: "word",
    initialState,
    reducers: {
        setResult: (state, {payload}) => {
            state.result = payload
        },
        setLoading: (state, {payload}) => {
            state.loading = payload
        },
        setQuery: (state, {payload}) => {
            state.query = payload
        },
    }
})

export const selectWord = (state: RootState) => state.word
export const {setResult, setQuery, setLoading} = wordSlice.actions
export const wordReducer  = wordSlice.reducer