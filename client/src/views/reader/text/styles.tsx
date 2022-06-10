import styled from "styled-components";

export const TextStyle = styled.section`
  flex-grow: 1;
  position: relative;
  max-height: 100vh - 5rem;

  & .container {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  & .section_title {
    padding: 1rem;
  }
`
TextStyle.displayName = 'TextStyle'

export const TextList = styled.ul`
  width: fit-content;
  margin: 0 1rem;
`
TextList.displayName = 'TextList'

export const Word = styled.span`
  border-radius: 0.2rem;

  &:hover {
    color: darkblue;
    background-color: lavender;
    cursor: pointer;
  }
`
Word.displayName = 'Word'

export const LineStyled = styled.div`
  position: relative;
  border-radius: 0.3rem;
  
  & .line_index {
    position: absolute;
    right: -2rem;
    color: ${props => props.theme.highlight};
  }
`
LineStyled.displayName = 'LineStyled'

export const PageButton = styled.button`
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
  }
`

export const PageMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
`

PageMenu.displayName = 'PageMenu'