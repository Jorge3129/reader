import {DARK, BASIC, LIGHT} from './themes';
import {THEMES} from './themeList'

export const getTheme = (themeName: string) => {
    switch(themeName) {
        case THEMES.DARK: return DARK;
        case THEMES.LIGHT: return LIGHT;
        default: return BASIC
    }
}