import {MouseEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectSettings, setTheme} from "../../domain/reducers/settings.reducer";
import {THEMES} from "../../providers/theme/themeList";
import {saveToStorage} from "../../services/browser/storage";

const ThemeSwitch = () => {
    const {theme} = useAppSelector(selectSettings)
    const dispatch = useAppDispatch()
    const inverse = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    const themeName = inverse[0].toUpperCase() + inverse.split('').slice(1).join('')

    const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(setTheme(inverse))
        saveToStorage('theme', inverse)
    }

    return <button onClick={toggleTheme}>{themeName}</button>
}

export default ThemeSwitch