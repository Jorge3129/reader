import React, {MouseEvent, useState} from 'react';
import Main from "../page/Main";
import {ReaderContent} from "./styles";
import ContentTable from "./ContentTable";
import Text from "./Text";
import Tools from "./Tools";
import {useFetchOneBook} from "../../hooks/useReader";

const Reader = () => {

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