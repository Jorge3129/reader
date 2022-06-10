import {MouseEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectSettings, setTheme} from "../../domain/reducers/user/settings.reducer";
import {THEMES} from "../../providers/theme/themeList";
import {saveToStorage} from "../../services/browser/storage";
import styled from "styled-components";
import {icons} from "../../constants/icons";

const ThemeSwitch = () => {
    const {theme} = useAppSelector(selectSettings)
    const dispatch = useAppDispatch()
    const isDark = theme === THEMES.DARK;
    const inverse = isDark ? THEMES.LIGHT : THEMES.DARK
    const icon = isDark ? icons.NIGHT : icons.DAY;
    // const themeName = titleCase(inverse)

    const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(setTheme(inverse))
        saveToStorage('theme', inverse)
    }

    return <Wrapper onClick={toggleTheme}>{icon}</Wrapper>
}

const Wrapper = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  display: grid;
  place-content: center;
  padding: 1rem;
  
  & :hover {
    cursor: pointer;
    color: ${props => props.theme.hover};
  }
`
Wrapper.displayName = 'ThemeSwitch'

export default ThemeSwitch