import {routes} from "../../utils/routes";
import {HeaderStyled, LinkStyled, NavStyled} from "./styles";
import {useAuth} from "../../hooks/auth/useAuth";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {

    const {user, logOut} = useAuth()

    return (
        <HeaderStyled>
            <h1>The Reader</h1>
            <NavStyled>
                {routes.map(route =>
                    <LinkStyled className="link" to={route.path} key={route.path}>
                        <span>{route.title}</span>
                    </LinkStyled>)}
                {user && <button onClick={logOut}>Logout</button>}
                <ThemeSwitch/>
            </NavStyled>
        </HeaderStyled>
    );
};

export default Header;