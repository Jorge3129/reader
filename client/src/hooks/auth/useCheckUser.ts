import {useAppDispatch} from "../../store/hooks";
import {useEffect} from "react";
import {userThunk} from "../../store/reducers/user/user.thunk";
import {getFromStorage} from "../../services/browser/storage";


export const useCheckUser = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (getFromStorage('token')) {
            dispatch(userThunk());
        }
    }, [])
}