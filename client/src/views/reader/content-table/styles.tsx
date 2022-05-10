import styled from "styled-components";

export const ContentTableStyle = styled.section`
  background-color: darkgrey;
  position: relative;
  width: 10rem;
  max-height: 100vh - 5rem;

  & .container {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: scroll;
  }

  & .section_title:hover {
    color: white;
    cursor: pointer;
  }

  & .section_list {
    padding: 0 0.5rem;
  }

  & .text_section:hover {
    color: white;
    cursor: pointer;
  }
`