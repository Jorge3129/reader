import styled from "styled-components";

export const ContentTableStyle = styled.section`
  background-color: ${props => props.theme.sidebarBg};
  position: relative;
  width: 10rem;
  max-height: 100vh - 5rem;
  font-family: "Times New Roman", sans-serif;
  transition: width 0.5s ease;
  
  &.closed {
    width: 0;
  }

  & .container {
    position: absolute;
    right: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    overflow-y: scroll;
    transition: all 0.5s ease;
  }

  &.closed .container {
    //transform: translateX(-100%);
  }

  & .section_list {
    padding: 0 1.2rem;
  }

  & .section_list.top_level_list {
    padding: 0.5rem;
  }
  
  @media screen and (max-width: 600px) {
    width: 5rem;
  } 
`

export const BookTitleStyle = styled.div`
  display: grid;
  place-content: center;
  border-bottom: 0.2rem solid dimgray;
  
  & .book_title {
    padding: 0.5rem;
    font-size: 1.4rem;
    font-weight: bold;
  }
`

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: -2rem;
  background-color: ${props => props.theme.sidebarBg};
  z-index: 2;
  
  &:hover {
    cursor: pointer;
    color: red;
  }
`