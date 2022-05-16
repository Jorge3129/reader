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
  }
`

export const Word = styled.span`
  border-radius: 0.2rem;

  &:hover {
    color: darkblue;
    background-color: lavender;
    cursor: pointer;
  }
`

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