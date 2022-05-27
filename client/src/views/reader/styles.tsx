import styled from "styled-components";
import MainContent from "../page/MainContent";
import {Content} from "../page/styles";

export const ReaderContent = styled(Content)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
`

ReaderContent.displayName = 'ReaderContent'

export const ToolStyle = styled.section`
  width: 30%;
  justify-self: flex-end;
  background-color: ${props => props.theme.sidebarBg};
`