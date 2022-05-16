import {MouseEvent} from 'react';
import {routes} from "../../utils/routes";
import {HeaderStyled, LinkStyled, NavStyled} from "./styles";
import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectUser, setUser, toggleUser} from "../../domain/reducers/user.reducer";

const Header = () => {

    const {user} = useAppSelector(selectUser)
    const dispatch = useAppDispatch()
    const logout = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(setUser(false))
    }

    return (
        <HeaderStyled>
            <h1>The Reader</h1>
            <NavStyled>
                {routes.map(route =>
                    <LinkStyled className="link" to={route.path} key={route.path}>
                        <span>{route.title}</span>
                    </LinkStyled>)}
                {user && <button onClick={logout}>Logout</button>}
            </NavStyled>
        </HeaderStyled>
    );
};

export default Header;