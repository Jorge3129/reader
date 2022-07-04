import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SplitTextSection} from "../../../models/book/books";
import {RootState} from "../../store";
import {ILine} from "../../../utils/text/types";

interface ISectionState {
    sectionLines?: ILine[]
    loading: boolean
    path: number[]
}

const initialState: ISectionState = {
    loading: false,
    path: []
}

const sectionSlice = createSlice({
    name: "reader/section",
    initialState,
    reducers: {
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.loading = payload
        },
        setSection: (state, {payload}: PayloadAction<SplitTextSection| undefined>) => {
            state.sectionLines = payload?.lines
        },
    }
})

export const selectSection = (state: RootState) => state.section
export const {setSection, setLoading} = sectionSlice.actions
export const sectionReducer = sectionSlice.reducer