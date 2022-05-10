import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Book, BookDescription, BookSection, ContentTableSection, DeepBook, DeepBookSection} from "../entities/books";
import {RootState} from "../store/store";
import {firstSectionPath, flattenDeepBookContent, formatStructure} from "../entities/book.utils";

interface IBookState {
    chosenBook?: BookDescription
    bookId?: string
    content?: ContentTableSection[]
    structure?: ContentTableSection[]
    section?: BookSection
    loading: boolean
    path: number[]
}

const initialState: IBookState = {
    loading: false,
    path: []
}

const readerSlice = createSlice({
    name: "reader",
    initialState,
    reducers: {
        setChosenBook: (state, {payload}) => {
            state.chosenBook = payload
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
        setStructure: (state, {payload}) => {
            state.structure = payload
        },
        setPath: (state, {payload}) => {
            state.path = payload
        },
        setBook: (state, {payload: book}: PayloadAction<DeepBook>) => {
            const {content} = book;
            const structure = formatStructure(content);
            state.content = flattenDeepBookContent(structure)
            state.structure = structure
            state.path = firstSectionPath(content)
            state.bookId = book.id
        },
    }
})

export const selectReader = (state: RootState) => state.reader
export const {setChosenBook, setSection, setLoading, setContent, setStructure, setBook, setPath} = readerSlice.actions
export const readerReducer = readerSlice.reducer