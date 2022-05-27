import styled from "styled-components";
import {Link} from "react-router-dom";


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

  & tr:nth-child(even){
    background-color: ${props => props.theme.tableEvenRow};
  }
  
  & tr:hover {
    background-color: #ddd;
  }
`

TableStyles.displayName = 'TableStyles'