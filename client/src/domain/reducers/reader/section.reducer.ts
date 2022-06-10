import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SplitTextSection} from "../../entities/book/books";
import {RootState} from "../../store/store";
import {Line} from "../../../utils/text/types";

interface ISectionState {
    sectionLines?: Line[]
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