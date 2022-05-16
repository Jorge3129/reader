import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  
  & h1 {
    color: white;
    font-size: 1.1rem;
    margin: 0;
    padding: 0.6rem 1rem;
  }
`

export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  & .main_title{
    text-align: center;
  }
`

export const Content = styled.div`
  flex-grow: 1;
`

export const FooterStyled = styled.footer`
  width: 100%;
  color: white;
  background-color: black;
  justify-self: flex-end;
`

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
`

export const LinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
  display: grid;
  place-content: center;
  
  & span {
    margin: 0 1rem;
  }
`