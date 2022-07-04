import React, {FC, useMemo, useState, MouseEvent} from 'react';
import {BookTitleStyle, Close, ContentTableStyle} from "./styles";
import ContentList from "./ContentList";
import {useFixWidth} from "../../../hooks/reader/useFixWidth";
import {useReader} from "../../../hooks/reader/useReader";

interface IProps {
}

const ContentTable: FC<IProps> = () => {

    const {structure, path, chosenBook} = useReader()
    const [showTable, setShowTable] = useState(true)
    const {containerRef, onClose} = useFixWidth()

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        //onClose(showTable);
        setShowTable(!showTable);
    }

    const structuredContents = useMemo(() => {
        return structure && <ContentList topLevel structure={structure}/>
    }, [structure, path])

    return (
        <ContentTableStyle className={showTable ? "" : "closed"}>
            <Close onClick={onClick}> {showTable ?
                <i className="fa-solid fa-square-caret-left"></i> :
                <i className="fa-solid fa-square-caret-right"></i>}
            </Close>
            <div className="container" ref={containerRef}>
                <BookTitleStyle className="book_title_container">
                    <div className="book_title">{chosenBook?.title || ""}</div>
                    <div className="book_author">{chosenBook?.author || ""}</div>
                </BookTitleStyle>
                {structuredContents}
            </div>
        </ContentTableStyle>
    );
};

export default ContentTable;