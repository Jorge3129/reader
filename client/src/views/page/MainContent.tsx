import {Content, MainStyled} from "./styles";
import {FC, PropsWithChildren} from "react";

interface IProps {
    title?: string
    content?: boolean
}

const MainContent: FC<PropsWithChildren<IProps>> = ({title, children}) => {
    return (
        <MainStyled>
            {title &&
                <h2 className="main_title">{title}</h2>}
            <Content>{children}</Content>
        </MainStyled>
    );
}

export default MainContent;