import {useAppDispatch, useAppSelector} from "../domain/store/hooks";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {readerThunk} from "../domain/reducers/reader.thunk";
import {selectReader, setSection} from "../domain/reducers/reader.reducer";
import {BookSection} from "../domain/entities/books";

export const useSection = () => {
    const dispatch = useAppDispatch()
    //const {books, loading} = useSelector(selectBooks)

    const chooseSection = (section: BookSection) => {
        dispatch(setSection(section))
    }

    return {...useSelector(selectReader), chooseSection}
}

export const useFetchOneBook = () => {
    const dispatch = useAppDispatch()
    const {bookDescription} = useAppSelector(selectReader)

    useEffect(() => {
        let id = bookDescription?.id;
        console.log(id)
        if (!bookDescription?.id) {
            const bookId = localStorage.getItem("bookId")
            if (bookId) id = bookId
        }
        if(!id) return;
        dispatch(readerThunk(id))
    }, [])
}