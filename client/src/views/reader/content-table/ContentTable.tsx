import React, {FC, MouseEvent, useEffect, useMemo} from 'react';
import {ContentTableStyle} from "./styles";
import {useSection} from "../../../hooks/reader/useSection";
import ContentList from "./ContentList";

interface IProps {
}

const ContentTable: FC<IProps> = () => {

    const {structure, path} = useSection()

    const structuredContents = useMemo(() => {
        return structure && <ContentList structure={structure}/>
    }, [structure, path])

    return (
        <ContentTableStyle>
            <div className="container">
                {structuredContents}
            </div>
        </ContentTableStyle>
    );
};

export default ContentTable;