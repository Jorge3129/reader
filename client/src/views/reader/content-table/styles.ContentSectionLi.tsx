import styled from "styled-components";

interface IProps {
    color?: string
}

export const ContentSectionLi = styled.li.attrs((props: IProps) => ({
    color: props.color,
}))`
  & .section_title {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    border-left: 0.2rem solid transparent;
    border-radius: 0.2rem;
  }

  & .section_title.open_section {
    color: ${props => props.color || "red"};
  }

  & .text_section.open_section {
    border-left: 0.2rem solid ${props => props.color || "red"};
  }
  
  & .angle_icon {
    padding: 0.15em 0.3rem;
    font-size: 0.8em;
  }
  
  & .top_level {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.2rem;
  }
  
  & .content_link {
    color: black;
    text-decoration: none;
    flex: 1;
    padding: 0.1rem 0.3rem;
  }

  & .open_section .content_link {
    color: ${props => props.color || "red"};
  }

  & .section_title:hover {
    cursor: pointer;
    background-color: darkgrey;
  }
`