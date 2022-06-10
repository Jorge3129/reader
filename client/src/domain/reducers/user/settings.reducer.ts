import {THEMES, ThemeName} from "../../../providers/theme/themeList";
import {getFromStorage} from "../../../services/browser/storage";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";


interface SettingsState {
    theme: ThemeName
}

const initialState: SettingsState =  {
    theme: getFromStorage('theme') || THEMES.LIGHT,
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTheme: (state, {payload}: PayloadAction<ThemeName>) => {
            state.theme = payload
        }
    }
})

export const {setTheme} = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer
export const selectSettings = (state: RootState) => state.settings