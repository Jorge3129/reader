import {useAppSelector} from "../../domain/store/hooks";
import {selectReader} from "../../domain/reducers/reader.reducer";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const useRedirectReader = () => {
    const navigate = useNavigate()
    const {chosenBook, section} = useAppSelector(selectReader)
    useEffect(() => {
        if (chosenBook?.id) navigate(`/reader/${chosenBook.id}/${section?.uid || 0}`);
        else navigate('/reader')
    }, [])
}