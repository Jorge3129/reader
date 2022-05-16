import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

const userSlice = createSlice({
    name: "user",
    initialState: {user: false},
    reducers: {
        setUser: (state, {payload}: PayloadAction<boolean>) => {
            state.user = payload
        },
        toggleUser: (state, {payload}: PayloadAction<void>) => {
            state.user = !state.user
        }
    }
})

export const {setUser, toggleUser} = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user