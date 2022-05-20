import React, {Component, FC, PropsWithChildren, useEffect} from 'react';
import {useAppSelector} from "../../domain/store/hooks";
import {selectUser} from "../../domain/reducers/user.reducer";
import {Navigate, Route, useLocation} from "react-router-dom";
import {getFromStorage} from "../../services/browser/storage";

interface IProps {
}

const Private: FC<PropsWithChildren<IProps>> = ({children}) => {

    const {user} = useAppSelector(selectUser)
    const location = useLocation()

    if (!user && !getFromStorage('user')) return <Navigate to={'/login'} state={{ from: location }} replace/>

    return <>{children}</>
};

export const PrivateRoute = (Component: React.Component) => <Private>{}</Private>

export default Private;