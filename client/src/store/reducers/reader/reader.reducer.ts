import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
    Book,
    BookDescription,
    TextSection,
    ContentTableSection,
    DeepBook,
    ContainerSection,
    SplitTextSection
} from "../../../models/book/books";
import {RootState} from "../../store";
import {firstSectionPath, flattenBookContent, formatStructure, formatToShallowArray} from "../../../models/book/book.utils";

interface IBookState {
    chosenBook?: BookDescription
    bookId?: string
    content?: TextSection[]
    structure?: ContentTableSection[]
    section?: TextSection
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
        setBook: (state, {payload: book}: PayloadAction<any>) => {
            const {content, ...rest} = book;
            state.chosenBook = rest;
            const structure = formatStructure(content);
            state.content = formatToShallowArray(structure)
            state.structure = structure
            state.path = firstSectionPath(content)
            state.bookId = book.id
        },
    }
})

export const selectReader = (state: RootState) => state.reader
export const {setSection, setLoading, setBook, setPath} = readerSlice.actions
export const readerReducer = readerSlice.reducer