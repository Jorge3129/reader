import React, {FC} from 'react';
import styled from "styled-components";

const MainWrap = styled.main`
  flex-grow: 1;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
`

const Main:FC<React.PropsWithChildren<any>> = ({children}) => {
    return (
        <MainWrap>
            {children}
        </MainWrap>
    );
};

export default Main;