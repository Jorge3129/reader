import React, {Component, FC, PropsWithChildren, useEffect} from 'react';
import {useAppSelector} from "../../store/hooks";
import {selectUser} from "../../store/reducers/user/user.reducer";
import {Navigate, Route, useLocation} from "react-router-dom";
import LoginPage from "./LoginPage";

interface IProps {
}

const Private: FC<PropsWithChildren<IProps>> = ({children}) => {

    const {user, loading} = useAppSelector(selectUser)
    const location = useLocation()

    useEffect(() => {
        //console.log(user)
    },[user])

    if (loading) {
        return <div>Loading</div>
    }

    if (!user) return <Navigate to={'/login'} state={{ from: location }} replace/>
    // if (!user) return <LoginPage/>

    return <>{children}</>
};

// export const withPrivateRoute = (Component: React.Component) => <Private><Component/></Private>

export default Private;