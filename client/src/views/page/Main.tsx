import {Content, MainStyled} from "./styles";
import {FC, PropsWithChildren} from "react";

interface IProps {
    title?: string
    content?: boolean
}

const Main: FC<PropsWithChildren<IProps>> = ({title, children}) => {
    return (
        <MainStyled>
            {title && <h2 className={title}>{title}</h2>}
            <Content>{children}</Content>
        </MainStyled>
    );
};

export default Main;