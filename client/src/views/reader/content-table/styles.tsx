import styled from "styled-components";

export const ContentTableStyle = styled.section`
  background-color: lightgray;
  position: relative;
  width: 10rem;
  max-height: 100vh - 5rem;
  font-family: "Times New Roman", sans-serif;

  & .container {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    overflow-y: scroll;
  }

  & .section_list {
    padding: 0 1.2rem;
  }

  & .section_list.top_level_list {
    padding: 0.5rem;
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