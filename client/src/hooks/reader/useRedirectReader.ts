import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useReader} from "./useReader";
import {useSection} from "./useSection";

export const useRedirectReader = () => {
    const navigate = useNavigate()
    const {chosenBook} = useReader()
    const {section} = useSection()
    useEffect(() => {
        if (chosenBook?.id) navigate(`/reader/${chosenBook.id}/${section?.uid || 0}`);
        else navigate('/reader')
    }, [])
}