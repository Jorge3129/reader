import MainContent from "../page/MainContent";
import {ReaderContent} from "./styles";
import ContentTable from "./content-table/ContentTable";
import Text from "./text/Text";
import Tools from "./Tools";
import {useFetchOneBook} from "../../hooks/reader/useFetchOneBook";
import {FC} from "react";
import {useAppSelector} from "../../domain/store/hooks";
import {selectReader} from "../../domain/reducers/reader.reducer";
import {Navigate} from "react-router-dom";

interface IProps {
}

const Reader: FC<IProps> = () => {

    const {loading} = useFetchOneBook()

    if (loading) return <h2>LOADING...</h2>

    return (
        <MainContent>
            <ReaderContent>
                <ContentTable/>
                <Text/>
                <Tools/>
            </ReaderContent>
        </MainContent>
    );
};

export const RedirectReader = () => {
    const {bookId, section} = useAppSelector(selectReader)
    const a = `/reader/${bookId}/${section?.uid || 0}`;
    return <Navigate to={a}/>
}

export default Reader;