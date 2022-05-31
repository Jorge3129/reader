import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Book, BookDescription, BookSection, ContentTableSection, DeepBook, DeepBookSection} from "../entities/books";
import {RootState} from "../store/store";
import {firstSectionPath, flattenDeepBookContent, formatStructure, formatToShallowArray} from "../entities/book.utils";

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
            const {content, ...rest} = book;
            state.chosenBook = book;
            const structure = formatStructure(content);
            state.content = formatToShallowArray(structure)
            state.structure = structure
            state.path = firstSectionPath(content)
            state.bookId = book.id
        },
    }
})

export const selectReader = (state: RootState) => state.reader
export const {setSection, setLoading, setContent, setStructure, setBook, setPath} = readerSlice.actions
export const readerReducer = readerSlice.reducer