import React from 'react';
import {routes} from "../../utils/routes";
import {HeaderStyled, LinkStyled, NavStyled} from "./styles";

const Header = () => {
    return (
        <HeaderStyled>
            <h1>The Reader</h1>
            <NavStyled>
                {routes.map(route =>
                    <LinkStyled className="link" to={route.path} key={route.path}>
                        <span>{route.title}</span>
                    </LinkStyled>)}
            </NavStyled>
        </HeaderStyled>
    );
};

export default Header;