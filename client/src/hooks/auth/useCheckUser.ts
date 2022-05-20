import {useAppDispatch} from "../../domain/store/hooks";
import {useEffect} from "react";
import {getFromStorage} from "../../services/browser/storage";
import {setUser} from "../../domain/reducers/user.reducer";


export const useCheckUser = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const user = getFromStorage('user');
        console.log(user)
        if (!user) return;
        dispatch(setUser(user));
    }, [])
}