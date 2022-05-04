import {createSlice} from "@reduxjs/toolkit";
import {Book, BookDescription, BookSection} from "../entities/books";
import {RootState} from "../store/store";

interface IBookState {
    bookDescription?: BookDescription
    content?: BookSection[]
    section?: BookSection
    loading: boolean
}

const initialState: IBookState = {
    loading: false
}

const readerSlice = createSlice({
    name: "reader",
    initialState,
    reducers: {
        setBook: (state, {payload}) => {
            state.bookDescription = payload
        },
        setLoading: (state, {payload}) => {
            state.loading = payload
        },
        setSection: (state, {payload}) => {
            state.section = payload
        },
        setContent: (state, {payload}) => {
            state.content = payload
        },
    }
})

export const selectReader = (state: RootState) => state.reader
export const {setBook, setSection, setLoading, setContent} = readerSlice.actions
export const readerReducer  = readerSlice.reducer