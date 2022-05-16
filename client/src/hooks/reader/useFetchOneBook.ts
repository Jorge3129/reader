import {useAppDispatch, useAppSelector} from "../../domain/store/hooks";
import {selectReader, setSection} from "../../domain/reducers/reader.reducer";
import {useEffect} from "react";
import {readerThunk} from "../../domain/reducers/reader.thunk";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useSection} from "./useSection";

export const useFetchOneBook = () => {
    const dispatch = useAppDispatch()
    const {chosenBook, bookId, content, section} = useAppSelector(selectReader)
    const {bookIdParam, sectionId} = useParams()
    const {choosePath, path, loading} = useSection()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        // const id = chosenBook?.id || localStorage.getItem("bookId")
        // if (bookId === id) return;
        if (bookIdParam) dispatch(readerThunk(bookIdParam))
    }, [])

    useEffect(() => {
        if (!sectionId) {
            //navigate("/")
            return;
        }
        const sectionIdNumber = parseInt(sectionId || "")
        if (!content) return;
        const newSect = content[sectionIdNumber];
        if (!newSect) return;
        choosePath(newSect, path)
        dispatch(setSection(newSect))
    }, [content, sectionId])

    useEffect(() => {
        if (location.pathname !== "/reader" || !chosenBook?.id) return;
        navigate(`/reader/${chosenBook?.id}/${section?.uid || 0}`)
    }, [])

    return {loading}
}