import Main from "../page/Main";
import {ReaderContent} from "./styles";
import ContentTable from "./content-table/ContentTable";
import Text from "./Text";
import Tools from "./Tools";
import {useFetchOneBook} from "../../hooks/reader/useFetchOneBook";
import {FC} from "react";

interface IProps {
}

const Reader:FC<IProps> = () => {

    useFetchOneBook()

    return (
        <Main>
            <ReaderContent>
                <ContentTable/>
                <Text/>
                <Tools />
            </ReaderContent>
        </Main>
    );
};

export default Reader;