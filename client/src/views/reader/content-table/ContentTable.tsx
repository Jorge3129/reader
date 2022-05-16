import React, {FC, useMemo} from 'react';
import {BookTitleStyle, ContentTableStyle} from "./styles";
import {useSection} from "../../../hooks/reader/useSection";
import ContentList from "./ContentList";

interface IProps {
}

const ContentTable: FC<IProps> = () => {

    const {structure, path, chosenBook} = useSection()

    const structuredContents = useMemo(() => {
        return structure && <ContentList topLevel structure={structure}/>
    }, [structure, path])

    return (
        <ContentTableStyle>
            <div className="container">
                <BookTitleStyle className="book_title_container">
                    <span className="book_title">{chosenBook?.title || ""}</span>
                </BookTitleStyle>
                {structuredContents}
            </div>
        </ContentTableStyle>
    );
};

export default ContentTable;