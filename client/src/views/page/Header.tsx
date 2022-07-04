import {routes} from "../../utils/routes";
import {HeaderStyled, LinkStyled, NavStyled, TitleStyled} from "./styles";
import {useAuth} from "../../hooks/auth/useAuth";
import ThemeSwitch from "./ThemeSwitch";
import {SubmitButton} from "../auth/styles";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const {user, logOut} = useAuth()
    const navigate = useNavigate();

    return (
        <HeaderStyled>
            <TitleStyled >
                <h1>The Reader</h1>
            </TitleStyled>
            <NavStyled>
                {routes.map(route =>
                    <LinkStyled className="link" to={route.path} key={route.path}>
                        <span>{route.title}</span>
                    </LinkStyled>)}
                <ThemeSwitch/>
            </NavStyled>
            {user && <SubmitButton onClick={logOut}>Logout</SubmitButton>}
            {!user && <SubmitButton onClick={e => navigate('signup')}>Sign up</SubmitButton>}
        </HeaderStyled>
    );
};

export default Header;