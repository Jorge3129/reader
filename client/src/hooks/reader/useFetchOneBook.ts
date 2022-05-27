import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectReader, setSection} from "../../domain/reducers/reader.reducer";
import {useEffect} from "react";
import {readerThunk} from "../../domain/reducers/reader.thunk";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useSection} from "./useSection";

export const useFetchOneBook = () => {
    const dispatch = useAppDispatch()
    const {content, chosenBook} = useAppSelector(selectReader)
    const {bookIdParam, sectionId} = useParams()
    const {choosePath, path, loading} = useSection()

    useEffect(() => {
        // console.log(chosenBook?.id, bookIdParam, chosenBook?.id === bookIdParam)
        if (bookIdParam
           // && chosenBook?.id !== bookIdParam
        )
            dispatch(readerThunk(bookIdParam))
    }, [])

    useEffect(() => {
        if (sectionId === undefined || !content) return;
        const sectionIdNumber = parseInt(sectionId || "")
        const newSect = content[sectionIdNumber];
        if (!newSect) return;
        choosePath(newSect, path)
        dispatch(setSection(newSect))
    }, [content, sectionId])

    return {loading}
}