import {ThemeProvider} from "styled-components";
import {useAppSelector} from "../../domain/store/hooks";
import {selectSettings} from "../../domain/reducers/settings.reducer";
import {getTheme} from "../../providers/theme/getTheme";
import App from "./App";

export  default () => {
    const {theme} = useAppSelector(selectSettings)

    return <ThemeProvider theme={getTheme(theme)}>
        <App/>
    </ThemeProvider>
}