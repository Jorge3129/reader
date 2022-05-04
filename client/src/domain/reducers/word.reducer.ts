import {createSlice} from "@reduxjs/toolkit";
import {Word} from "../entities/words";
import {RootState} from "../store/store";

interface IBookState {
    query?: string
    result?: Word[],
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