import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";
import {User} from "../../entities/user";
import {Null} from "../../types";

interface UserState {
    user: Null<User>
    loading: boolean
}

const initialState: UserState = { user: null, loading: false}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, {payload}: PayloadAction<Null<User>>) => {
            state.user = payload
        },
        setLoading: (state, {payload}: PayloadAction<boolean>) => {
            state.loading = payload
        },
    }
})

export const {setUser, setLoading} = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user