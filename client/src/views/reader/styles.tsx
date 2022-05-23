import styled from "styled-components";

export const ReaderContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
`

export const ToolStyle = styled.section`
  width: 30%;
  justify-self: flex-end;
  background-color: ${props => props.theme.sidebarBg};
`