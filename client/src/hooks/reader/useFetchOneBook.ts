import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectReader} from "../../domain/reducers/reader/reader.reducer";
import {useEffect} from "react";
import {readerThunk} from "../../domain/reducers/reader/reader.thunk";
import {useNavigate, useParams} from "react-router-dom";
import {useSection} from "./useSection";
import {sectionThunk} from "../../domain/reducers/reader/section.thunk";
import {useReader} from "./useReader";

export const useFetchOneBook = () => {
    const dispatch = useAppDispatch()
    const {content, loading} = useReader()
    const {bookIdParam, sectionId} = useParams()
    const {choosePath, path} = useSection()
    const navigate = useNavigate()

    useEffect(() => {
        if (bookIdParam) dispatch(readerThunk(bookIdParam))
    }, [])


    useEffect(() => {
        // if (sectionId === undefined) navigate('0')
        if (sectionId === undefined || !content || !bookIdParam) return;
        const sectionIdNumber = parseInt(sectionId || "")
        const newSect = content[sectionIdNumber];
        if (!newSect) return;
        choosePath(newSect, path)
        // console.log(newSect)
        dispatch(sectionThunk({bookId: bookIdParam, sectionId: sectionIdNumber}))
    }, [content, sectionId])

    return {loading}
}