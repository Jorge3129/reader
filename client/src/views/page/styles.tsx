import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 4rem;
  background-color: black;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height:  0;
  }
`

HeaderStyled.displayName = 'HeaderStyled'

export const TitleStyled = styled.div`
  display: grid;
  place-content: center;

  & h1 {
    color: white;
    font-size: 1.1rem;
    margin: 0;
    padding: 0.6rem 1rem;
  }
`
TitleStyled.displayName = 'TitleStyled'


export const MainStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  overflow-x: hidden;

  & .main_title {
    text-align: center;
  }
`
MainStyled.displayName = 'MainStyled'

export const Content = styled.div`
  flex-grow: 1;
`
Content.displayName = 'Content'

export const FooterStyled = styled.footer`
  width: 100%;
  color: white;
  background-color: black;
  justify-self: flex-end;
`
FooterStyled.displayName = 'FooterStyled'

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
`
NavStyled.displayName = 'NavStyled'

export const LinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
  display: grid;
  place-content: center;

  & span {
    margin: 0 1rem;
  }
`
LinkStyled.displayName = 'LinkStyled'