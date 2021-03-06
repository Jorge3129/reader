import MainContent from "../page/MainContent";
import {ReaderContent} from "./styles";
import ContentTable from "./content-table/ContentTable";
import TextContainer from "./text/TextContainer";
import Tools from "./Tools";
import {useFetchOneBook} from "../../hooks/reader/useFetchOneBook";
import {FC} from "react";
import {useKeyNavigation} from "../../hooks/reader/useKeyNavigation";
import {useSaveRecent} from "../../hooks/reader/useSaveRecent";

interface IProps {
}

const Reader: FC<IProps> = () => {

    useSaveRecent()
    const {loading} = useFetchOneBook()

    if (loading) return <MainContent>
        <h2>LOADING...</h2>
    </MainContent>

    return (
        <ReaderContent>
            <ContentTable/>
            <TextContainer/>
            <Tools/>
        </ReaderContent>
    );
};

export default Reader;