import styled from "styled-components";

export const TableStyles = styled.table`
  border-collapse: collapse;
  width: 80%;

  & td, & th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  & th:hover {
    cursor: pointer;
    background-color: #ddd;
  }

  & tr:nth-child(even) {
    background-color: ${props => props.theme.tableEvenRow};
  }

  & tr:hover {
    background-color: #ddd;
  }
`

TableStyles.displayName = 'TableStyles'


export const PageList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0.5rem;

  & .page_list_item {
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.color};
    padding: 0.2rem 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.2rem;
  }

  & .page_list_item:hover {
    cursor: pointer;
    background-color: ${props => props.theme.lighterBg};
  }

  & .page_list_item.current {
    background-color: ${props => props.theme.highlight};
  }
`

PageList.displayName = 'PageList'