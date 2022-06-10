import styled, {ThemeProvider} from "styled-components";
import {useAppSelector} from "../../domain/store/hooks";
import {selectSettings} from "../../domain/reducers/user/settings.reducer";
import {getTheme} from "../../providers/theme/getTheme";
import App from "./App";

const AppStyled = styled(App)`
  color: ${props => props.theme.color};
  background-color:  ${props => props.theme.background};
`

export  default () => {
    const {theme} = useAppSelector(selectSettings)

    return <ThemeProvider theme={getTheme(theme)}>
        <AppStyled/>
    </ThemeProvider>
}