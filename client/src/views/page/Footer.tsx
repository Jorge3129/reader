import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyled>
            &copy;2022 Heorhii Sanchenko
        </FooterStyled>
    );
};

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: black;
  justify-self: flex-end;
  display: grid;
  place-content: center;
  color: ${props => props.theme.light_color};
  padding: 1rem 0;
`
FooterStyled.displayName = 'FooterStyled'

export default Footer;