import {useEffect} from "react";
import {useParams} from "react-router-dom";
import UserDataApi from "../../api/userData.api";
import {useAppSelector} from "../../domain/store/hooks";
import {selectUser} from "../../domain/reducers/user/user.reducer";


export const useSaveRecent = () => {

    const {user} = useAppSelector(selectUser)
    const {bookIdParam} = useParams()

    useEffect(() => {
        (async () => {
            if (!bookIdParam || !user?.id) return;
            await UserDataApi.addRecentBook(bookIdParam, user.id)
            //alert('saved')
        })()
    }, [bookIdParam])
}