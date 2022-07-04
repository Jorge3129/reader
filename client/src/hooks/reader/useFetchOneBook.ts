import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectReader, setSection} from "../../store/reducers/reader/reader.reducer";
import {useEffect} from "react";
import {readerThunk} from "../../store/reducers/reader/reader.thunk";
import {useNavigate, useParams} from "react-router-dom";
import {useSection} from "./useSection";
import {sectionThunk} from "../../store/reducers/reader/section.thunk";
import {useReader} from "./useReader";

export const useFetchOneBook = () => {
    const dispatch = useAppDispatch()
    const {content, loading} = useReader()
    const {bookIdParam, sectionId} = useParams()
    const {choosePath, path, chosenBook} = useSection()
    const navigate = useNavigate()

    useEffect(() => {
        if (bookIdParam === chosenBook?.id && content) return;
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
        dispatch(setSection(newSect))
        dispatch(sectionThunk({bookId: bookIdParam, sectionId: sectionIdNumber}))
    }, [content, sectionId])

    return {loading}
}