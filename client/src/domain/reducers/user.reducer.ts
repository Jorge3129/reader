import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {User} from "../entities/user";
import {Null} from "../types";

interface UserState {
    user: Null<User>
}

const initialState: UserState = { user: null}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, {payload}: PayloadAction<Null<User>>) => {
            state.user = payload
        },
    }
})

export const {setUser} = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user